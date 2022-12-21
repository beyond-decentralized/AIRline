import { AirEntity } from "@airport/final-approach";
import { Entity, ManyToOne, Table } from "@airport/tarmaq-entity";
import { Task } from "./Task";

@Entity()
@Table({ name: "PREREQUISITE_TASKS" })
export class PrerequisiteTask
    extends AirEntity {

    @ManyToOne()
    prerequisiteTask: Task

    @ManyToOne()
    requiringTask: Task

}