import { AirEntity } from "@airport/final-approach";
import { Column, Entity, ManyToOne, Table } from "@airport/tarmaq-entity";
import { Theme } from "./Theme";

@Entity()
@Table({ name: 'TOPIC' })
export class Topic
    extends AirEntity {

    @Column({ name: 'NAME', nullable: false })
    name: string

    @ManyToOne({ optional: true })
    theme: Theme

}
