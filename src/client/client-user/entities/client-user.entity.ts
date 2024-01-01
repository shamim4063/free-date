import { BaseEntity } from "src/config/base.entity";
import { BeforeInsert, Column, Entity, Index, ManyToOne, Table } from "typeorm";
import * as bcrypt from "bcrypt";
import { Client } from "src/client/entities/client.entity";

@Entity("ClientUser", { schema: "client" })
export class ClientUser extends BaseEntity {
  @Column({ type: "varchar", length: 50 })
  firstName: string;

  @Column({ type: "varchar", length: 50 })
  lastName: string;

  @Index({ unique: true })
  @Column({ type: "varchar", length: 50, unique: true })
  email: string;

  @Column({ type: "bool", nullable: false, default: false })
  isVerified: boolean;

  @Column({ type: "varchar", length: 250 })
  password: string;

  @Column({ type: "varchar", nullable: true })
  lastPassword: string;

  @ManyToOne(() => Client, (client) => client.users)
  client: Client;

  @BeforeInsert()
  async hashPassword() {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
  }
}
