import { IsEmail, IsNotEmpty } from "class-validator";

export class LoginUserDto {
  @IsEmail({}, { message: "Please enter a valid email address." })
  readonly email: string;

  @IsNotEmpty({ message: "Please enter your password." })
  readonly password: string;
}
