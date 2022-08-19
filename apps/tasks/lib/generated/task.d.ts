import { IAirEntity } from '@airport/holding-pattern';
import { ITaskConversation } from './taskconversation';
import { ITaskAssignee } from './taskassignee';
import { ISubtask } from './subtask';
import { IPrerequisiteTask } from './prerequisitetask';
export interface ITask extends IAirEntity {
    name?: string;
    description?: string;
    state?: number;
    durationUnit?: number;
    durationLength?: number;
    startDate?: Date;
    dueDate?: Date;
    isGoal?: boolean;
    importance?: number;
    urgency?: number;
    taskConversations?: ITaskConversation[];
    assignees?: ITaskAssignee[];
    superasks?: ISubtask[];
    subtasks?: ISubtask[];
    prerequisiteTasks?: IPrerequisiteTask[];
    requiringTasks?: ISubtask[];
}
//# sourceMappingURL=task.d.ts.map