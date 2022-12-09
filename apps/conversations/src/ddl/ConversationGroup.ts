import { Topic } from "@airline/topics";
import { AirEntity } from "@airport/holding-pattern";
import { Column, Entity, ManyToOne, OneToMany, Table } from "@airport/tarmaq-entity";
import { ConversationGroupConversation } from "./ConversationGroupConversation";

@Entity()
@Table({ name: 'CONVERSATION_GROUPS' })
export class ConversationGroup
    extends AirEntity {

    @Column({ name: 'NAME' })
    name: string

    @ManyToOne()
    topic: Topic

    @OneToMany({ mappedBy: "conversationGroup" })
    conversationGroupConversations: ConversationGroupConversation[] = []

}
