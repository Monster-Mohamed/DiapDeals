import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('images')
export class Image {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  path: string;
}
