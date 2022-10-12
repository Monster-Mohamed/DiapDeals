import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserEntity } from "../../database/entities/user.entity";
import { RegisterUserDto } from "../dto/registerUser.dto";
import { compare, hash } from "bcrypt";
import { LoginUserDto } from "../dto/loginUser.dto";
import { UserHelperService } from "./user-helper/user-helper.service";
import { UserResponse } from "../../../dist/types/user/userResponse.type";
import { verify } from "jsonwebtoken";
import { Message } from "../../types/message.type";
import { ResetPasswordDto } from "../dto/resetPassword.dto";

@Injectable()
export class UserService {
  constructor(
    private readonly userHelper: UserHelperService,

    @InjectRepository(UserEntity)
    private readonly User: Repository<UserEntity>
  ) {}

  async findById(id: number) {
    return this.userHelper.findById(id);
  }

  async buildUserResponse(user: UserEntity): Promise<UserResponse> {
    return this.userHelper.buildUserResponse(user);
  }

  async register(userDto: RegisterUserDto): Promise<UserEntity> {
    // TODO: generate username
    const username = this.userHelper.usernameGenerator(userDto.email);

    // TODO: check email is not already exists
    await this.userHelper.emailIsNotAlreadyExist(userDto.email);

    // TODO: check if the referrerEmail is valid & update the points for them
    const point = await this.userHelper.checkReferrerEmailAndUpdatePoints(
      userDto.referrerEmail
    );

    // TODO: add the new user to the database
    const fullUserDto = Object.assign(userDto, { username });
    const user = await this.userHelper.createNewUser(point, fullUserDto);

    // TODO: send an email to the user to verify the account
    await this.userHelper.sendVerificationEmail(user);

    // return the new user
    return user;
  }

  async login(userDto: LoginUserDto): Promise<UserEntity> {
    const user = await this.User.findOne({
      where: { email: userDto.email },
      select: ["email", "password", "username", "id", "image", "referrerEmail"],
    });

    if (!user) {
      throw new HttpException(
        "The email is not exist, Please try again.",
        HttpStatus.NOT_FOUND
      );
    }

    if (!(await compare(userDto.password, user.password))) {
      throw new HttpException(
        "The password is not valid, Please try again.",
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
            "This email is already activated",
            HttpStatus.BAD_REQUEST
          );
        }

        await this.User.update({ id: check.id }, { isEmailConfirmed: true });
        return {
          message: "The account has been activated successfully.",
        };
      }

      throw new HttpException(
        "The token is invalid or expired",
        HttpStatus.UNAUTHORIZED
      );
    } catch (err) {
      throw new HttpException(
        "The token is invalid or expired",
        HttpStatus.UNAUTHORIZED
      );
    }
  }

  async forgotPassword(email: string): Promise<Message> {
    try {
      const user = await this.User.findOneBy({ email });

      // TODO: send an email to the user to verify the account
      await this.userHelper.sendResetPassword(user);

      return {
        message:
          "The password reset link has been sent to your email, please check your email",
      };
    } catch (err) {
      throw new HttpException(
        "Something went wrong, please try again",
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
        "The user is not exists",
        HttpStatus.UNAUTHORIZED
      );
    }

    await this.userHelper.checkPasswordIsNew(check.id, resetForm.password);

    const password = await hash(resetForm.password, 10);

    await this.User.update({ id: user.id }, { password });

    return {
      message: "Your password has been updated successfully",
    };
  }
}
