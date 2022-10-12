import { UserEntity } from '../../database/entities/user.entity';
export type ValidReferrer = {
  referrerUser: UserEntity;
  isValid: boolean;
};
