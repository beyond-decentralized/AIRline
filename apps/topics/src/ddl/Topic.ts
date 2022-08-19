import { AirEntity } from "@airport/holding-pattern";
import { Entity, ManyToOne, Table } from "@airport/tarmaq-entity";
import { Theme } from "./Theme";

@Entity()
@Table({ name: 'TOPIC' })
export class Topic
    extends AirEntity {

    name: string

    @ManyToOne({ optional: true })
    theme: Theme

}
