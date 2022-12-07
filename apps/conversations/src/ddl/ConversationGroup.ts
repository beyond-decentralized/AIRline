import { Topic } from "@airline/topics";
import { AirEntity } from "@airport/holding-pattern";
import { Column, Entity, ManyToOne, OneToMany, Table } from "@airport/tarmaq-entity";
import { Conversation } from "./Conversation";

@Entity()
@Table({ name: 'CONVERSATION_GROUPS' })
export class ConversationGroup
    extends AirEntity {

    @Column({ name: 'NAME' })
    name: string

    @ManyToOne()
    topic: Topic

    @OneToMany({ mappedBy: "group" })
    conversations: Conversation[] = []

}
