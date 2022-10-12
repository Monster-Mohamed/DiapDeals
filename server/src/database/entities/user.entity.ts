import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { hash } from "bcrypt";
import { PointEntity } from "./point.entity";

@Entity({ name: "users" })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column({ nullable: true })
  zip_code: number;

  @Column({ nullable: true })
  state: string;

  @Column({ nullable: true })
  country: string;

  @Column({ nullable: true })
  gender: "male" | "female";

  @Column({ nullable: true })
  date_of_birth: Date;

  @Column({ default: "" })
  phone_number: string;

  @Column({ default: false })
  isEmailConfirmed: boolean;

  @Column({ default: "" })
  first_name: string;

  @Column({ default: "" })
  last_name: string;

  @Column({ default: "" })
  image: string;

  @Column({ default: "" })
  referrerEmail: string;

  @Column({ select: false })
  password: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await hash(this.password, 10);
  }

  @OneToOne(() => PointEntity, (points) => points.user, { eager: true })
  points: PointEntity;
}
