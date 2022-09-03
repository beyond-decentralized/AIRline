import { IAirEntity } from '@airport/holding-pattern';
import { ITask } from './task';
export interface ISubtask extends IAirEntity {
    supertask?: ITask;
    subtask?: ITask;
}
//# sourceMappingURL=subtask.d.ts.map