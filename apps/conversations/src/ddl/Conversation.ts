import { Topic } from "@airline/topics";
import { AirEntity } from "@airport/holding-pattern";
import { Column, DbString, Entity, ManyToOne, OneToMany, Table } from "@airport/tarmaq-entity";
import { Comment } from "./Comment";
import { Moderator } from "./Moderator";
import { Participant } from "./Participant";

@Entity()
@Table({ name: 'CONVERSATIONS' })
export class Conversation
    extends AirEntity {

    @Column({ name: 'NAME' })
    name: string

    @ManyToOne()
    topic: Topic

    @OneToMany({ mappedBy: "conversation" })
    participants: Participant[] = []

    @OneToMany({ mappedBy: "conversation" })
    moderators: Moderator[] = []

    @OneToMany({ mappedBy: "conversation" })
    comments: Comment[] = []

}
