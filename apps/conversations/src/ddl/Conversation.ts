import { AirEntity } from "@airport/holding-pattern";
import { Entity, ManyToOne, OneToMany, Table } from "@airport/tarmaq-entity";
import { Comment } from "./Comment";
import { ConversationGroup } from "./ConversationGroup";
import { Moderator } from "./Moderator";
import { Participant } from "./Participant";

@Entity()
@Table({ name: 'CONVERSATIONS' })
export class Conversation
    extends AirEntity {

    @ManyToOne()
    group: ConversationGroup

    @OneToMany({ mappedBy: "conversation" })
    participants: Participant[] = []

    @OneToMany({ mappedBy: "conversation" })
    moderators: Moderator[] = []

    @OneToMany({ mappedBy: "conversation" })
    comments: Comment[] = []

}
