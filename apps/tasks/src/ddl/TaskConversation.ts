import { Conversation } from "@airline/conversations";
import { AirEntity } from "@airport/holding-pattern";
import { Entity, ManyToOne, Table } from "@airport/tarmaq-entity";
import { Task } from "./Task";

@Entity()
@Table({ name: "TASK_CONVERSATIONS" })
export class TaskConversation
    extends AirEntity {

    @ManyToOne({ optional: false })
    task: Task

    @ManyToOne({ optional: false })
    conversation: Conversation

}