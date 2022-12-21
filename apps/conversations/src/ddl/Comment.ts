import { AirEntity } from "@airport/final-approach";
import { Column, Entity, ManyToOne, OneToMany, Table } from "@airport/tarmaq-entity";
import { CommentReference } from "./CommentReference";
import { Conversation } from "./Conversation";
import { Moderator } from "./Moderator";
import { TakeBackRequest } from "./TakeBackRequest";

@Entity()
@Table({ name: 'COMMENTS' })
export class Comment
    extends AirEntity {

    @Column({ name: "TEXT", nullable: false })
    text: string

    @Column({ name: "TAKEN_BACK" })
    takenBack: boolean

    @Column({ name: "TAKEN_BACK_DTTM" })
    takenBackDttm: Date

    @Column({ name: "SENSORED" })
    censored: boolean

    @Column({ name: "SENSORED_DTTM" })
    sensoredDttm: Date

    @ManyToOne({ optional: false })
    conversation: Conversation

    @ManyToOne()
    source: Comment

    @ManyToOne()
    censoredBy: Moderator

    @OneToMany({ mappedBy: 'source' })
    replies: Comment[]

    @OneToMany({ mappedBy: 'referredFrom' })
    references: CommentReference[]

    @OneToMany({ mappedBy: 'reference' })
    referredFrom: Comment[]

    @OneToMany({ mappedBy: 'viaComment' })
    madeTakeBackRequest: TakeBackRequest[]

    @OneToMany({ mappedBy: 'forComment' })
    takeBackRequests: TakeBackRequest[]

}
