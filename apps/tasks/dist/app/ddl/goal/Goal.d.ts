import { Topic } from "@airline/topics";
import { AirEntity } from "@airport/holding-pattern";
import { GoalConversation } from "./GoalConversation";
import { GoalStatus } from "./GoalStatus";
import { GoalTask } from "./GoalTask";
export declare class Goal extends AirEntity {
    name: string;
    description: string;
    status: GoalStatus;
    importance: number;
    urgency: number;
    topic: Topic;
    goalConversations: GoalConversation[];
    goalTasks: GoalTask[];
}
//# sourceMappingURL=Goal.d.ts.map