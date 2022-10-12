import { IsEmail, Matches } from "class-validator";
import { Match } from "../decorators/match.decorator";

export class RegisterUserDto {
  @IsEmail({}, { message: "Please enter a valid email address" })
  readonly email: string;

  @Matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})")
  readonly password: string;

  @Match(RegisterUserDto, (s) => s.password, {
    message: "password confirm does not match the password",
  })
  
  readonly passwordConfirm: string;

  readonly image: string;

  readonly referrerEmail: string;

  readonly zip_code: number;

  readonly state: string;

  readonly country: string;

  readonly phone_number: number;

  readonly gender: "male" | "female";

  readonly date_of_birth: Date;

  readonly first_name: string;

  readonly last_name: string;
}
