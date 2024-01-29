import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Generated,
  OneToMany,
} from 'typeorm';
import { Tags } from './tags.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @CreateDateColumn({ type: 'timestamp' })
  createTime: Date;

  @Generated('uuid')
  uuid: string;

  @Column({ type: 'text' })
  desc: string;

  @OneToMany(() => Tags, (tags) => tags.user)
  tags: Tags[];
}
