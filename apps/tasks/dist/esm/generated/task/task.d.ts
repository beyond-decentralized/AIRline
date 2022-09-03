import { IAirEntity } from '@airport/holding-pattern';
import { ITopic } from '@airline/topics';
import { IGoalTask } from '../goal/goaltask';
import { ITaskConversation } from './taskconversation';
import { ITaskAssignee } from './taskassignee';
import { ISubtask } from './subtask';
import { IPrerequisiteTask } from './prerequisitetask';
export interface ITask extends IAirEntity {
    name?: string;
    description?: string;
    status?: number;
    durationUnit?: number;
    durationLength?: number;
    startDate?: Date;
    dueDate?: Date;
    importance?: number;
    urgency?: number;
    topic?: ITopic;
    goalTasks?: IGoalTask[];
    taskConversations?: ITaskConversation[];
    assignees?: ITaskAssignee[];
    superasks?: ISubtask[];
    subtasks?: ISubtask[];
    prerequisiteTasks?: IPrerequisiteTask[];
    requiringTasks?: ISubtask[];
}
//# sourceMappingURL=task.d.ts.map