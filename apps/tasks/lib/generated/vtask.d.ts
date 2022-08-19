import { IVBooleanField, IVDateField, IVNumberField, IVStringField } from '@airbridge/validate';
import { AirEntityVDescriptor } from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import { TaskConversationVDescriptor } from './vtaskconversation';
import { TaskConversation } from '../ddl/TaskConversation';
import { TaskAssigneeVDescriptor } from './vtaskassignee';
import { TaskAssignee } from '../ddl/TaskAssignee';
import { SubtaskVDescriptor } from './vsubtask';
import { Subtask } from '../ddl/Subtask';
import { PrerequisiteTaskVDescriptor } from './vprerequisitetask';
import { PrerequisiteTask } from '../ddl/PrerequisiteTask';
export interface TaskVDescriptor<T> extends AirEntityVDescriptor<T> {
    name?: string | IVStringField;
    description?: string | IVStringField;
    state?: number | IVNumberField;
    durationUnit?: number | IVNumberField;
    durationLength?: number | IVNumberField;
    startDate?: Date | IVDateField;
    dueDate?: Date | IVDateField;
    isGoal?: boolean | IVBooleanField;
    importance?: number | IVNumberField;
    urgency?: number | IVNumberField;
    taskConversations?: TaskConversationVDescriptor<TaskConversation>;
    assignees?: TaskAssigneeVDescriptor<TaskAssignee>;
    superasks?: SubtaskVDescriptor<Subtask>;
    subtasks?: SubtaskVDescriptor<Subtask>;
    prerequisiteTasks?: PrerequisiteTaskVDescriptor<PrerequisiteTask>;
    requiringTasks?: SubtaskVDescriptor<Subtask>;
}
//# sourceMappingURL=vtask.d.ts.map