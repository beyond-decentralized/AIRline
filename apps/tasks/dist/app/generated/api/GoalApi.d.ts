import { Conversation } from '@airline/conversations';
import { Topic } from '@airline/topics';
import { Goal } from '../../ddl/goal/Goal';
export declare class GoalApi {
    constructor();
    goalApi: GoalApi;
    findAll(): Promise<Goal[]>;
    loadConversationForGoal(goalId: Goal | string): Promise<Conversation>;
    findAllForTopic(topic: Topic | string): Promise<Goal[]>;
    save(goal: Goal): Promise<void>;
}
//# sourceMappingURL=GoalApi.d.ts.map