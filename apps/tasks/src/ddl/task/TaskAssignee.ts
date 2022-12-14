import { AirEntity } from "@airport/final-approach";
import { Entity, JoinColumn, ManyToOne, Table } from "@airport/tarmaq-entity";
import { UserAccount } from "@airport/travel-document-checkpoint"
import { Task } from "./Task";

@Entity()
@Table({ name: 'TASK_ASSIGNEES' })
export class TaskAssignee
    extends AirEntity {

    @ManyToOne({ optional: false })
    task: Task

    @ManyToOne({ optional: false })
    @JoinColumn({ name: "ASSIGNED_TO_USER_ACCOUNT_LID", referencedColumnName: "USER_ACCOUNT_LID" })
    userAccount: UserAccount

}