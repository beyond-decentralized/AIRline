import { AirEntity } from "@airport/holding-pattern";
import { PrerequisiteTask } from "./PrerequisiteTask";
import { Subtask } from "./Subtask";
import { TaskAssignee } from "./TaskAssignee";
import { TaskConversation } from "./TaskConversation";
import { TaskDurationUnit } from "./TaskDurationUnit";
import { TaskStatus } from "./TaskStatus";
export declare class Task extends AirEntity {
    name: string;
    description: string;
    state: TaskStatus;
    durationUnit: TaskDurationUnit;
    durationLength: number;
    startDate: Date;
    dueDate: Date;
    isGoal: boolean;
    importance: number;
    urgency: number;
    taskConversations: TaskConversation[];
    assignees: TaskAssignee[];
    superasks: Subtask[];
    subtasks: Subtask[];
    prerequisiteTasks: PrerequisiteTask[];
    requiringTasks: Subtask[];
}
//# sourceMappingURL=Task.d.ts.map