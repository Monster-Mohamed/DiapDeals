import {
  Get,
  Post,
  Body,
  ValidationPipe,
  UseGuards,
  Param,
} from "@nestjs/common";
import { Controller, Put, UsePipes } from "@nestjs/common/decorators";
import { UserService } from "../services/user.service";
import { RegisterUserDto } from "../dto/registerUser.dto";
import { LoginUserDto } from "../dto/loginUser.dto";
import { User } from "../decorators/user.decorator";
import { UserResponse } from "@app/types/user/userResponse.type";
import { UserEntity } from "../../database/entities/user.entity";
import { AuthGuard } from "../../security/guards/auth.guard";
import { Message } from "../../types/message.type";
import { ResetPasswordDto } from "../dto/resetPassword.dto";

@Controller("users")
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async createUser(@Body("user") user: RegisterUserDto): Promise<UserResponse> {
    const newUser = await this.UserService.register(user);
    return this.UserService.buildUserResponse(newUser);
  }

  @Get("activate/:token")
  async activateAccount(@Param("token") token: string): Promise<Message> {
    return await this.UserService.activateAccount(token);
  }

  @Post("login")
  @UsePipes(new ValidationPipe())
  async login(@Body("user") user: LoginUserDto): Promise<UserResponse> {
    const loggedUser = await this.UserService.login(user);
    return this.UserService.buildUserResponse(loggedUser);
  }

  @Post("forgot")
  async forgotPassword(@Body("email") email: string): Promise<Message> {
    return await this.UserService.forgotPassword(email);
  }

  @UsePipes(new ValidationPipe())
  @Put("reset/:token")
  async resetPassword(
    @Body("resetForm") resetForm: ResetPasswordDto,
    @Param("token") token: string
  ): Promise<Message> {
    return await this.UserService.resetPassword(token, resetForm);
  }

  @Get()
  @UseGuards(AuthGuard)
  async getUser(@User() user: UserEntity): Promise<UserResponse> {
    return this.UserService.buildUserResponse(user);
  }
}
