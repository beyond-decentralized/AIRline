import { IAirEntity } from '@airport/holding-pattern';
import { IComment } from '@airline/conversations';
import { ITask } from './task';
export interface ITaskReferenceInComment extends IAirEntity {
    comment?: IComment;
    task?: ITask;
}
//# sourceMappingURL=taskreferenceincomment.d.ts.map