import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 30 })
    firstName: string;

    @Column({ type: 'varchar', length: 30 })
    lastName: string;

    @Column({ type: 'varchar', length: 15 })
    username: string;
  
    @Column({ type: 'varchar', length: 40 })
    email: string;

    @Column({ type: 'varchar' })
    password: string;

    @Column({type: 'date'})
    createdDate: Date
   
}
