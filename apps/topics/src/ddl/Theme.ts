import { AirEntity } from "@airport/final-approach";
import { Column, Entity, OneToMany, Table } from "@airport/tarmaq-entity";
import { Topic } from "./Topic";

@Entity()
@Table({ name: 'THEME' })
export class Theme
    extends AirEntity {

    @Column({ name: 'NAME', nullable: false })
    name: string

    @OneToMany({ mappedBy: 'theme' })
    topics: Topic[]

}
