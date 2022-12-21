import { AirEntity } from "@airport/final-approach";
import { Entity, ManyToOne, Table } from "@airport/tarmaq-entity";
import { Goal } from "./Goal";
import { Task } from "../task/Task";

@Entity()
@Table({ name: 'GOAL_TASKS' })
export class GoalTask
    extends AirEntity {

    @ManyToOne()
    goal: Goal

    @ManyToOne()
    task: Task

}
