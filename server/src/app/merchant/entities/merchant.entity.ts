import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'merchants' })
export class Merchant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
