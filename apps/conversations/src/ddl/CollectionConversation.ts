import { AirEntity } from "@airport/final-approach";
import { Entity, ManyToOne, Table } from "@airport/tarmaq-entity";
import { Collection } from "./Collection";
import { Conversation } from "./Conversation";

@Entity()
@Table({ name: 'COLLECTION_CONVERSATIONS' })
export class CollectionConversation
    extends AirEntity {

    @ManyToOne()
    collection: Collection

    @ManyToOne()
    conversation: Conversation

}
