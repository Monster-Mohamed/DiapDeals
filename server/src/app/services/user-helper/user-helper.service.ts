import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "../../../database/entities/user.entity";
import { PointEntity } from "../../../database/entities/point.entity";
import { Repository } from "typeorm";
import { UserJWT } from "../../../../dist/types/user/UserJWT.type";
import { sign } from "jsonwebtoken";
import { objectCleaner } from "../../../helpers/objectCleaner.helper";
import { UserResponse } from "../../../../dist/types/user/userResponse.type";
import { EmailService } from "../email/email.service";
import { ValidReferrer } from "../../../types/user/ValidReferrer.type";
import { RegisterUserDto } from "../../dto/registerUser.dto";
import { compare } from "bcrypt";

@Injectable()
export class UserHelperService {
  constructor(
    private readonly emailService: EmailService,

    @InjectRepository(UserEntity)
    private readonly User: Repository<UserEntity>,

    @InjectRepository(PointEntity)
    private readonly Point: Repository<PointEntity>
  ) {}

  async findById(id: number): Promise<UserEntity> {
    const user = await this.User.findOneBy({ id });
    return user;
  }

  async checkPasswordIsNew(id: number, newPassword: string): Promise<void> {
    const user = await this.User.findOne({
      where: { id },
      select: ["password", "username", "id", "image", "referrerEmail"],
    });

    console.log(user);
    if (await compare(newPassword, user.password)) {
      throw new HttpException(
        "The password you entered is the old, you must add a new password.",
        HttpStatus.BAD_REQUEST
      );
    }
  }

  generateJWT(user: UserJWT, expired?: string): string {
    return sign(
      {
        id: user.id,
        username: user.username,
        email: user.email,
      },
      process.env.JWT_SECRET,
      expired && {
        expiresIn: expired,
      }
    );
  }

  buildUserResponse(user: UserEntity): UserResponse {
    const jwtUser = {
      id: user.id,
      email: user.email,
      username: user.username,
    };

    objectCleaner(user, ["password", "id"]);

    return {
      user: {
        ...user,
        token: this.generateJWT(jwtUser),
      },
    };
  }

  async emailIsNotAlreadyExist(email: string): Promise<void> {
    const emailCheck = await this.User.findOneBy({ email });

    if (emailCheck) {
      throw new HttpException(
        "The email is already exists",
        HttpStatus.CONFLICT
      );
    }
  }

  async checkReferrerEmailIsValidAndGet(
    reffEmail: string
  ): Promise<ValidReferrer> {
    if (reffEmail) {
      const user = await this.User.findOneBy({ email: reffEmail });
      if (!user)
        throw new HttpException(
          "The referrer email is not exists.",
          HttpStatus.NOT_FOUND
        );

      return {
        referrerUser: user,
        isValid: true,
      };
    }

    return {
      referrerUser: null,
      isValid: false,
    };
  }

  async checkReferrerEmailAndUpdatePoints(
    reffEmail: string
  ): Promise<PointEntity> {
    const { referrerUser, isValid } =
      await this.checkReferrerEmailIsValidAndGet(reffEmail);

    const point = new PointEntity();

    if (isValid) {
      point.points = 10;

      // * Get the points of the user from points table
      // * The user has the same id of his points then get the point that has the same id
      const p = await this.Point.findOneBy({ id: referrerUser.id });

      await this.Point.update({ id: p.id }, { points: p.points + 10 });
    }

    return await this.Point.save(point);
  }

  usernameGenerator(email: string): string {
    const rand = Math.round(Math.random() * Math.pow(3, 26)).toString(36);
    const username = email.split("@")[0] + "-" + rand;
    return username;
  }

  async sendVerificationEmail(user: UserEntity): Promise<void> {
    const token = this.generateJWT({ id: user.id.toString() }, "1440m"); // 24 hours

    const first_name = user.first_name.length > 0 && user.first_name;
    const supportURL = process.env.BACKEND_DOMAIN;
    const url = `${process.env.BACKEND_DOMAIN}/users/activate/${token}`;

    await this.emailService.emailVerification(
      user.email,
      url,
      supportURL,
      first_name
    );
  }

  async sendResetPassword(user: UserEntity): Promise<void> {
    const token = this.generateJWT({ id: user.id.toString() }, "10m");

    const first_name = user.first_name.length > 0 && user.first_name;
    const supportURL = process.env.BACKEND_DOMAIN;
    const url = `${process.env.BACKEND_DOMAIN}/users/reset/${token}`;

    await this.emailService.resetAccount(
      user.email,
      url,
      supportURL,
      first_name
    );
  }

  async createNewUser(
    point: PointEntity,
    userDto: RegisterUserDto & { username: string }
  ): Promise<UserEntity> {
    const newUser = new UserEntity();
    newUser.points = point;
    Object.assign(newUser, userDto);
    return await this.User.save(newUser);
  }
}
