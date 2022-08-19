import { AirEntityVDescriptor } from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import { TaskVDescriptor } from './vtask';
import { Task } from '../ddl/Task';
export interface PrerequisiteTaskVDescriptor<T> extends AirEntityVDescriptor<T> {
    prerequisiteTask?: TaskVDescriptor<Task>;
    requiringTask?: TaskVDescriptor<Task>;
}
//# sourceMappingURL=vprerequisitetask.d.ts.map