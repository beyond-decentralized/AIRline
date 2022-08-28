import { AirEntityVDescriptor } from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import { GoalVDescriptor } from './vgoal';
import { Goal } from '../../ddl/goal/Goal';
import { TaskVDescriptor } from '../task/vtask';
import { Task } from '../../ddl/task/Task';
export interface GoalTaskVDescriptor<T> extends AirEntityVDescriptor<T> {
    goal?: GoalVDescriptor<Goal>;
    task?: TaskVDescriptor<Task>;
}
//# sourceMappingURL=vgoaltask.d.ts.map