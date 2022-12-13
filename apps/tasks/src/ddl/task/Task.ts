import { Collection } from "@airline/conversations";
import { Topic } from "@airline/topics";
import { AirEntity } from "@airport/holding-pattern";
import { Column, DbNumber, Entity, ManyToOne, OneToMany, Table } from "@airport/tarmaq-entity";
import { Goal } from "../goal/Goal";
import { PrerequisiteTask } from "./PrerequisiteTask";
import { Subtask } from "./Subtask";
import { TaskAssignee } from "./TaskAssignee";
import { TaskDurationUnit } from "./TaskDurationUnit";
import { TaskStatus } from "./TaskStatus";

@Entity()
@Table({ name: 'TASKS' })
export class Task
    extends AirEntity {

    @Column({ name: "NAME" })
    name: string

    @Column({ name: "DESCRIPTION", nullable: true })
    description: string

    @Column({ name: "STATUS" })
    @DbNumber()
    status: TaskStatus

    @Column({ name: "DURATION_UNIT" })
    @DbNumber()
    durationUnit: TaskDurationUnit

    @Column({ name: "DURATION_LENGTH" })
    durationLength: number

    @Column({ name: "START_DATE", nullable: true })
    startDate: Date

    @Column({ name: "DUE_DATE", nullable: true })
    dueDate: Date

    @Column({ name: "IMPORTANCE", nullable: true })
    importance: number

    @Column({ name: "URGENCY", nullable: true })
    urgency: number

    @ManyToOne()
    topic: Topic

    @ManyToOne()
    goal: Goal

    @ManyToOne()
    collection: Collection

    @OneToMany({ mappedBy: 'task' })
    assignees: TaskAssignee[]

    @OneToMany({ mappedBy: 'subtask' })
    superasks: Subtask[]

    @OneToMany({ mappedBy: 'superask' })
    subtasks: Subtask[]

    @OneToMany({ mappedBy: 'requiringTask' })
    prerequisiteTasks: PrerequisiteTask[]

    @OneToMany({ mappedBy: 'prerequisiteTask' })
    requiringTasks: Subtask[]

}
