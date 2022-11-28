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

    // Meant to be updated by other apps to include the actual
    // types of conversations utilized by depending Apps
    @Column({ name: 'TYPE' })
    @DbString()
    type: 'GOAL' | 'TASK' | string

    // Denormalized since the Conversation App is not aware of apps that use it
    @Column({ name: 'TYPED_ENTITY_ID' })
    typedEntityId: string

    @ManyToOne()
    topic: Topic

    @OneToMany({ mappedBy: "conversation" })
    participants: Participant[] = []

    @OneToMany({ mappedBy: "conversation" })
    moderators: Moderator[] = []

    @OneToMany({ mappedBy: "conversation" })
    comments: Comment[] = []

}
