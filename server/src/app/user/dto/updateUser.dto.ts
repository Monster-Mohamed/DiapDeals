export class UpdateUserDto {
  readonly referrerEmail: string;

  zip_code: number;

  readonly phone_number: string;

  readonly gender: 'male' | 'female';

  readonly date_of_birth: Date;
}
