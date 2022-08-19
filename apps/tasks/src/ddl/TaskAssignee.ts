import { AirEntity } from "@airport/holding-pattern";
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
    @JoinColumn({ name: "ASSIGNED_TO_GUID", referencedColumnName: "USER_ACCOUNT_GUID" })
    userAccount: UserAccount

}