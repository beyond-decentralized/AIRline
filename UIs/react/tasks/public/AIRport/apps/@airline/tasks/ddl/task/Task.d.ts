import { Topic } from "@airline/topics";
import { AirEntity } from "@airport/holding-pattern";
import { GoalTask } from "../goal/GoalTask";
import { PrerequisiteTask } from "./PrerequisiteTask";
import { Subtask } from "./Subtask";
import { TaskAssignee } from "./TaskAssignee";
import { TaskConversation } from "./TaskConversation";
import { TaskDurationUnit } from "./TaskDurationUnit";
import { TaskStatus } from "./TaskStatus";
export declare class Task extends AirEntity {
    name: string;
    description: string;
    status: TaskStatus;
    durationUnit: TaskDurationUnit;
    durationLength: number;
    startDate: Date;
    dueDate: Date;
    importance: number;
    urgency: number;
    topic: Topic;
    goalTasks: GoalTask[];
    taskConversations: TaskConversation[];
    assignees: TaskAssignee[];
    superasks: Subtask[];
    subtasks: Subtask[];
    prerequisiteTasks: PrerequisiteTask[];
    requiringTasks: Subtask[];
}
//# sourceMappingURL=Task.d.ts.map