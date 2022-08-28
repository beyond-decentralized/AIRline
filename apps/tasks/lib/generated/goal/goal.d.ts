import { IAirEntity } from '@airport/holding-pattern';
import { ITopic } from '@airline/topics';
import { IGoalConversation } from './goalconversation';
import { IGoalTask } from './goaltask';
export interface IGoal extends IAirEntity {
    name?: string;
    description?: string;
    status?: number;
    importance?: number;
    urgency?: number;
    topic?: ITopic;
    goalConversations?: IGoalConversation[];
    goalTasks?: IGoalTask[];
}
//# sourceMappingURL=goal.d.ts.map