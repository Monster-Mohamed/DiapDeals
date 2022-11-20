import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { RegisterUserDto } from '../user/dto/registerUser.dto';
import { compare, hash } from 'bcrypt';
import { LoginUserDto } from '../user/dto/loginUser.dto';
import { UserHelperService } from './user-helper/user-helper.service';
import { verify } from 'jsonwebtoken';
import { Message } from '../../types/message.type';
import { ResetPasswordDto } from '../user/dto/resetPassword.dto';
import { UserResponse } from '@app/types/user/userResponse.type';
import { ImageService } from '../image/image.service';
import { Image } from '../image/entities/image.entity';
import { UpdateUserDto } from './dto/updateUser.dto';

@Injectable()
export class UserService {
  constructor(
    private readonly userHelperService: UserHelperService,
    private readonly imageService: ImageService,

    @InjectRepository(UserEntity)
    private readonly User: Repository<UserEntity>
  ) {}

  async findById(id: number) {
    return this.userHelperService.findById(id);
  }

  async buildUserResponse(user: UserEntity): Promise<UserResponse> {
    return this.userHelperService.buildUserResponse(user);
  }

  async register(userDto: RegisterUserDto): Promise<UserEntity> {
    // TODO: generate username
    const username = this.userHelperService.usernameGenerator(userDto.email);

    // TODO: check email is not already exists
    await this.userHelperService.emailIsNotAlreadyExist(userDto.email);

    // TODO: add the new user to the database
    const fullUserDto = Object.assign(userDto, { username });
    const cuser = await this.userHelperService.createNewUser(fullUserDto);

    // TODO: check if the referrerEmail is valid & update the points for them
    const point =
      await this.userHelperService.checkReferrerEmailAndUpdatePoints(
        userDto.referrerEmail,
        cuser.id
      );

    // TODO: Add the point to the user's points
    cuser.points = point;

    await this.User.save(cuser);

    // TODO: send an email to the user to verify the account
    await this.userHelperService.sendVerificationEmail(cuser);

    // TODO: Get the current user
    const user = await this.userHelperService.findById(cuser.id);

    // return the new user
    return user;
  }

  async update(
    updatedUserDto: UpdateUserDto,
    userId: number
  ): Promise<UserEntity> {
    const user = await this.User.update(
      { id: userId },
      {
        ...updatedUserDto,
      }
    );

    return await this.userHelperService.findById(userId);
  }

  async addAvatar(
    userId: number,
    avatar: Express.Multer.File
  ): Promise<UserEntity> {
    // TODO: Upload the avatar to the server
    const img = await this.imageService.uploadImage('users/avatars', avatar);

    // TODO: add the avatar to the user
    const av = await this.imageService.saveImageData(img.url);
    await this.User.update({ id: userId }, { avatar: av });
    return await this.userHelperService.findById(userId);
  }

  async getAvatar(avatarId: number): Promise<Image> {
    return await this.imageService.findById(avatarId);
  }

  async login(userDto: LoginUserDto): Promise<UserEntity> {
    const user = await this.User.findOne({
      where: { email: userDto.email },
      select: [
        'email',
        'password',
        'username',
        'id',
        'avatar',
        'referrerEmail',
      ],
    });

    if (!user) {
      throw new HttpException(
        'The email is not exist, Please try again.',
        HttpStatus.NOT_FOUND
      );
    }

    if (!(await compare(userDto.password, user.password))) {
      throw new HttpException(
        'The password is not valid, Please try again.',
        HttpStatus.UNAUTHORIZED
      );
    }

    return user;
  }

  async activateAccount(token: string): Promise<Message> {
    try {
      if (token) {
        const user: any = verify(token, process.env.JWT_SECRET);
        const check = await this.User.findOneBy({ id: user.id });
        if (check.isEmailConfirmed == true) {
          throw new HttpException(
            'This email is already activated',
            HttpStatus.BAD_REQUEST
          );
        }

        await this.User.update({ id: check.id }, { isEmailConfirmed: true });
        return {
          message: 'The account has been activated successfully.',
        };
      }

      throw new HttpException(
        'The token is invalid or expired',
        HttpStatus.UNAUTHORIZED
      );
    } catch (err) {
      throw new HttpException(
        'The token is invalid or expired',
        HttpStatus.UNAUTHORIZED
      );
    }
  }

  async forgotPassword(email: string): Promise<Message> {
    try {
      const user = await this.User.findOneBy({ email });

      // TODO: send an email to the user to verify the account
      await this.userHelperService.sendResetPassword(user);

      return {
        message:
          'The password reset link has been sent to your email, please check your email',
      };
    } catch (err) {
      throw new HttpException(
        'Something went wrong, please try again',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async resetPassword(
    token: string,
    resetForm: ResetPasswordDto
  ): Promise<Message> {
    const user: any = verify(token, process.env.JWT_SECRET);
    const check = await this.User.findOneBy({ id: user.id });

    if (!check) {
      throw new HttpException(
        'The user is not exists',
        HttpStatus.UNAUTHORIZED
      );
    }

    await this.userHelperService.checkPasswordIsNew(
      check.id,
      resetForm.password
    );

    const password = await hash(resetForm.password, 10);

    await this.User.update({ id: user.id }, { password });

    return {
      message: 'Your password has been updated successfully',
    };
  }
}
