import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class User {
  static findAll(): User[] | PromiseLike<User[]> {
    throw new Error('Method not implemented.');
  }
  static findOne(arg0: { where: { id: string } }): Promise<User> {
    throw new Error('Method not implemented.');
  }
  destroy() {
    throw new Error('Method not implemented.');
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  emailId: string;

  @Column({ default: false })
  isAdmin: boolean;
}
