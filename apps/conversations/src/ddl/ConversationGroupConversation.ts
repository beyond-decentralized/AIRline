import { AirEntity } from "@airport/holding-pattern";
import { Entity, ManyToOne, Table } from "@airport/tarmaq-entity";
import { ConversationGroup } from "./ConversationGroup";
import { Conversation } from "./Conversation";

@Entity()
@Table({ name: 'CONVERSATION_GROUP_CONVERSATIONS' })
export class ConversationGroupConversation
    extends AirEntity {

    @ManyToOne()
    conversationGroup: ConversationGroup

    @ManyToOne()
    conversation: Conversation

}
