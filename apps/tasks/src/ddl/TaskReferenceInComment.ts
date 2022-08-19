import { Comment } from "@airline/conversations";
import { AirEntity } from "@airport/holding-pattern";
import { Entity, ManyToOne, Table } from "@airport/tarmaq-entity";
import { Task } from "./Task";

@Entity()
@Table({ name: 'TASK_REFERENCES_IN_COMMENTS' })
export class TaskReferenceInComment
    extends AirEntity {

    @ManyToOne({ optional: false })
    comment: Comment;

    @ManyToOne({ optional: false })
    task: Task;

}
