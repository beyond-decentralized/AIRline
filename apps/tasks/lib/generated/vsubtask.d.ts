import { AirEntityVDescriptor } from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import { TaskVDescriptor } from './vtask';
import { Task } from '../ddl/Task';
export interface SubtaskVDescriptor<T> extends AirEntityVDescriptor<T> {
    supertask?: TaskVDescriptor<Task>;
    subtask?: TaskVDescriptor<Task>;
}
//# sourceMappingURL=vsubtask.d.ts.map