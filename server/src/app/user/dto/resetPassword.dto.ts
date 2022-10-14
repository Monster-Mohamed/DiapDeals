import { Matches } from "class-validator";
import { Match } from "../../global/decorators/match.decorator";

export class ResetPasswordDto {
  @Matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})")
  readonly password: string;

  @Match(ResetPasswordDto, (s) => s.password, {
    message: "password confirm does not match the password",
  })
  readonly passwordConfirm: string;
}
