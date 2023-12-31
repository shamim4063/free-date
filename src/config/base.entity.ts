import { BeforeInsert, BeforeUpdate, Column, PrimaryGeneratedColumn } from "typeorm";

export abstract class BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'timestamp', nullable: true })
    createdDate: Date;

    @Column({ type: 'int', nullable: true })
    createdBy: number;

    @Column({ type: 'timestamp', nullable: true })
    updatedDate: Date

    @Column({ type: 'int', nullable: true })
    updatedBy: number;

    @BeforeInsert()
    async createLog() {
        this.createdDate = new Date();
        this.createdBy = 1;
    }

    @BeforeUpdate()
    async updateLog() {
        this.updatedDate = new Date();
        this.updatedBy = 1;
    }
}