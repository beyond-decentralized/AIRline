import { AirEntity } from "@airport/final-approach";
import { Entity, OneToMany, Table } from "@airport/tarmaq-entity";
import { Topic } from "./Topic";

@Entity()
@Table({ name: 'THEME' })
export class Theme
    extends AirEntity {

    name: string

    @OneToMany({ mappedBy: 'theme' })
    topics: Topic[]

}
