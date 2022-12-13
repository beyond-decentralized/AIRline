import { Topic } from "@airline/topics";
import { AirEntity } from "@airport/holding-pattern";
import { Column, Entity, ManyToOne, OneToMany, Table } from "@airport/tarmaq-entity";
import { CollectionConversation } from "./CollectionConversation";

@Entity()
@Table({ name: 'COLLECTIONS' })
export class Collection
    extends AirEntity {

    @Column({ name: 'NAME' })
    name: string

    @ManyToOne()
    topic: Topic

    @OneToMany({ mappedBy: "collection" })
    collectionConversations: CollectionConversation[] = []

}
