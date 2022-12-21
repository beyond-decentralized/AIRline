import { Collection } from "@airline/conversations";
import { Topic } from "@airline/topics";
import { AirEntity } from "@airport/final-approach";
import { Column, DbNumber, Entity, ManyToOne, OneToMany, Table } from "@airport/tarmaq-entity";
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
    status: GoalStatus = GoalStatus.FUTURE

    @Column({ name: "IMPORTANCE", nullable: false })
    importance: number = 3

    @Column({ name: "URGENCY", nullable: false })
    urgency: number = 3

    @ManyToOne()
    topic: Topic

    @ManyToOne()
    collection: Collection

    // Link in the Goal Repository (instead of OneToMany directly to Task,
    // which are in different repositories)
    @OneToMany({ mappedBy: 'goal' })
    goalTasks: GoalTask[]

}
