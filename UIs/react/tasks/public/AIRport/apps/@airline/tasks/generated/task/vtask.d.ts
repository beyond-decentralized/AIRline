import { IVDateField, IVNumberField, IVStringField } from '@airbridge/validate';
import { AirEntityVDescriptor } from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import { TopicVDescriptor, Topic } from '@airline/topics/dist/app/bundle';
import { GoalTaskVDescriptor } from '../goal/vgoaltask';
import { GoalTask } from '../../ddl/goal/GoalTask';
import { TaskConversationVDescriptor } from './vtaskconversation';
import { TaskConversation } from '../../ddl/task/TaskConversation';
import { TaskAssigneeVDescriptor } from './vtaskassignee';
import { TaskAssignee } from '../../ddl/task/TaskAssignee';
import { SubtaskVDescriptor } from './vsubtask';
import { Subtask } from '../../ddl/task/Subtask';
import { PrerequisiteTaskVDescriptor } from './vprerequisitetask';
import { PrerequisiteTask } from '../../ddl/task/PrerequisiteTask';
export interface TaskVDescriptor<T> extends AirEntityVDescriptor<T> {
    name?: string | IVStringField;
    description?: string | IVStringField;
    status?: number | IVNumberField;
    durationUnit?: number | IVNumberField;
    durationLength?: number | IVNumberField;
    startDate?: Date | IVDateField;
    dueDate?: Date | IVDateField;
    importance?: number | IVNumberField;
    urgency?: number | IVNumberField;
    topic?: TopicVDescriptor<Topic>;
    goalTasks?: GoalTaskVDescriptor<GoalTask>;
    taskConversations?: TaskConversationVDescriptor<TaskConversation>;
    assignees?: TaskAssigneeVDescriptor<TaskAssignee>;
    superasks?: SubtaskVDescriptor<Subtask>;
    subtasks?: SubtaskVDescriptor<Subtask>;
    prerequisiteTasks?: PrerequisiteTaskVDescriptor<PrerequisiteTask>;
    requiringTasks?: SubtaskVDescriptor<Subtask>;
}
//# sourceMappingURL=vtask.d.ts.map