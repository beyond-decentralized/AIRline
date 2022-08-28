import { Topic } from "@airline/topics";
import { AirEntity } from "@airport/holding-pattern";
import { Column, DbNumber, Entity, ManyToOne, OneToMany, Table } from "@airport/tarmaq-entity";
import { GoalConversation } from "./GoalConversation";
import { GoalStatus } from "./GoalStatus";
import { GoalTask } from "./GoalTask";

@Entity()
@Table({ name: 'GOALS' })
export class Goal
    extends AirEntity {

    @Column({ name: "NAME", nullable: false })
    name: string

    @Column({ name: "DESCRIPTION" })
    description: string

    @Column({ name: "STATUS", nullable: false })
    @DbNumber()
    status: GoalStatus

    @Column({ name: "IMPORTANCE", nullable: true })
    importance: number

    @Column({ name: "URGENCY", nullable: true })
    urgency: number

    @ManyToOne()
    topic: Topic

    @OneToMany({ mappedBy: 'goal' })
    goalConversations: GoalConversation[]

    @OneToMany({ mappedBy: 'goal' })
    goalTasks: GoalTask[]

}
