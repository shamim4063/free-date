import { BaseEntity } from "src/config/base.entity";
import { Column, Entity, Index, OneToMany } from "typeorm";
import { ClientUser } from "../client-user/entities/client-user.entity";

@Entity("Client", { schema: "client" })
export class Client extends BaseEntity {
  @Column({ type: "varchar", length: 50 })
  name: string;

  @Index({ unique: true })
  @Column({ type: "varchar", length: 50, unique: true })
  url: string;

  @Column({ type: "varchar", nullable: true })
  bannerPath: string;

  @Column({ type: "varchar", nullable: true })
  logo: string;

  @OneToMany(() => ClientUser, (clientUser) => clientUser.client)
  users: ClientUser[];
}
