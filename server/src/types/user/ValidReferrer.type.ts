import { UserEntity } from "../../app/user/user.entity";
export type ValidReferrer = {
  referrerUser: UserEntity;
  isValid: boolean;
};
