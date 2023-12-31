import { BeforeInsert, Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt'
import { BaseEntity } from "../../config/base.entity";

@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 50 })
    firstName: string;

    @Column({ type: 'varchar', length: 50 })
    lastName: string;

    @Column({ type: 'varchar', length: 50, unique: true })
    username: string;

    @Index({ unique: true })
    @Column({ type: 'varchar', length: 50, unique: true })
    email: string;

    @Column({type: 'date', nullable: true})
    dateOfBirth: Date;

    @Column({ type: 'varchar', length: 250 })
    password: string;

    @Column({ type: 'varchar', nullable: true })
    lastPassword: string

    @BeforeInsert()
    async hashPassword() {
        const salt = await bcrypt.genSalt()
        this.password = await bcrypt.hash(this.password, salt);
    }

}
