import {
  Get,
  Post,
  Body,
  ValidationPipe,
  UseGuards,
  Param,
  UploadedFile,
} from '@nestjs/common';
import {
  Controller,
  Put,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common/decorators';
import { RegisterUserDto } from './dto/registerUser.dto';
import { LoginUserDto } from './dto/loginUser.dto';
import { User } from './user.decorator';
import { UserResponse } from '@app/types/user/userResponse.type';
import { UserEntity } from './user.entity';
import { AuthGuard } from '../../security/guards/auth.guard';
import { Message } from '../../types/message.type';
import { ResetPasswordDto } from './dto/resetPassword.dto';
import { UserService } from './user.service';
import ImageStorage from '../image/helpers/image-storage.helper';
import { Image } from '../image/entities/image.entity';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('users')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  // ------------------------------------------------
  // TODO: Handling the image of the user
  // ------------------------------------------------

  @Post()
  @UsePipes(new ValidationPipe())
  async createUser(@Body('user') user: RegisterUserDto): Promise<UserResponse> {
    const newUser = await this.UserService.register(user);
    return this.UserService.buildUserResponse(newUser);
  }

  @Post('avatar')
  @UseGuards(AuthGuard)
  @UseInterceptors(FileInterceptor('avatar', ImageStorage.filterImage))
  async addAvatar(
    @User('id') userId: number,
    @UploadedFile() avatar: Express.Multer.File
  ) {
    const u = await this.UserService.addAvatar(userId, avatar);
    return this.UserService.buildUserResponse(u);
  }

  @Get('activate/:token')
  async activateAccount(@Param('token') token: string): Promise<Message> {
    return await this.UserService.activateAccount(token);
  }

  @Post('login')
  @UsePipes(new ValidationPipe())
  async login(@Body('user') user: LoginUserDto): Promise<UserResponse> {
    const loggedUser = await this.UserService.login(user);
    return this.UserService.buildUserResponse(loggedUser);
  }

  @Post('forgot')
  async forgotPassword(@Body('email') email: string): Promise<Message> {
    return await this.UserService.forgotPassword(email);
  }

  @UsePipes(new ValidationPipe())
  @Put('reset/:token')
  async resetPassword(
    @Body('resetForm') resetForm: ResetPasswordDto,
    @Param('token') token: string
  ): Promise<Message> {
    return await this.UserService.resetPassword(token, resetForm);
  }

  @Get()
  @UseGuards(AuthGuard)
  async getUser(@User() user: UserEntity): Promise<Image> {
    if (user.avatar) {
      const avatar = await this.UserService.getAvatar(user.avatar.id);
      return avatar;
    }
  }
}
