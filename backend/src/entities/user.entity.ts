import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user', { schema: 'prm_2023' })
export class User {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'username', length: 20 })
  username: string;

  @Column('varchar', { name: 'fullname', length: 50 })
  fullname: string;

  @Column('varchar', { name: 'description', nullable: true, length: 250 })
  description: string | null;

  @Column('datetime', {
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;
}
