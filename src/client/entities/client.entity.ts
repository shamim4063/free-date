import { BaseEntity } from "src/config/base.entity";
import { Column, Entity, Index } from "typeorm";

@Entity({schema: 'client'})
export class Client extends BaseEntity{
    @Column({ type: 'varchar', length: 50 })
    name: string;

    @Index({ unique: true })
    @Column({ type: 'varchar', length: 50, unique: true })
    url: string;

    @Column({type: 'varchar', nullable: true})
    bannerPath: string

    @Column({type: 'varchar', nullable: true})
    logo: string
}
