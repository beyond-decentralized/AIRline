import { AirEntity } from "@airport/holding-pattern";
import { Entity, ManyToOne, Table } from "@airport/tarmaq-entity";
import { Task } from "./Task";

@Entity()
@Table({ name: "SUBTASKS" })
export class Subtask
    extends AirEntity {

    @ManyToOne()
    supertask: Task

    @ManyToOne()
    subtask: Task

}