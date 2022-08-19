import { AirEntityVDescriptor } from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import { TaskVDescriptor } from './vtask';
import { Task } from '../ddl/Task';
import { UserAccountVDescriptor, UserAccount } from '@airport/travel-document-checkpoint/lib/to_be_generated/runtime-index';
export interface TaskAssigneeVDescriptor<T> extends AirEntityVDescriptor<T> {
    task?: TaskVDescriptor<Task>;
    userAccount?: UserAccountVDescriptor<UserAccount>;
}
//# sourceMappingURL=vtaskassignee.d.ts.map