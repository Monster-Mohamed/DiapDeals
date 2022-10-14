import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('images')
export class Image {
  @PrimaryGeneratedColumn()
  public id: number;
 
  @Column()
  filename: string;
 
  @Column()
  path: string;
 
  @Column()
  mimetype: string;
}
