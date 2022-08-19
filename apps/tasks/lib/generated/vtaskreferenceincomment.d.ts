import { AirEntityVDescriptor } from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import { CommentVDescriptor, Comment } from '@airline/conversations/lib/to_be_generated/runtime-index';
import { TaskVDescriptor } from './vtask';
import { Task } from '../ddl/Task';
export interface TaskReferenceInCommentVDescriptor<T> extends AirEntityVDescriptor<T> {
    comment?: CommentVDescriptor<Comment>;
    task?: TaskVDescriptor<Task>;
}
//# sourceMappingURL=vtaskreferenceincomment.d.ts.map