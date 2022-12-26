import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class questions {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  question: string;

  @Column()
  ans: string;

  @Column()
  timer: number;
}
