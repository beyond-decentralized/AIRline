import { AirEntity } from "@airport/holding-pattern";
import { Entity, ManyToOne, OneToMany, Table } from "@airport/tarmaq-entity";
import { Comment } from "./Comment";
import { Collection } from "./Collection";
import { Moderator } from "./Moderator";
import { Participant } from "./Participant";

@Entity()
@Table({ name: 'CONVERSATIONS' })
export class Conversation
    extends AirEntity {

    @ManyToOne()
    collection: Collection

    @OneToMany({ mappedBy: "conversation" })
    participants: Participant[] = []

    @OneToMany({ mappedBy: "conversation" })
    moderators: Moderator[] = []

    @OneToMany({ mappedBy: "conversation" })
    comments: Comment[] = []

}
