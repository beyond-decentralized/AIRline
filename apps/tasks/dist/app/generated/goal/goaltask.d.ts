import { IAirEntity } from '@airport/holding-pattern';
import { IGoal } from './goal';
import { ITask } from '../task/task';
export interface IGoalTask extends IAirEntity {
    goal?: IGoal;
    task?: ITask;
}
//# sourceMappingURL=goaltask.d.ts.map