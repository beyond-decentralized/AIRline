import { Conversation, ConversationApi } from "@airline/conversations";
import { Topic } from "@airline/topics";
import { GoalConversationDao } from "../../dao/goal/GoalConversationDao";
import { GoalDao } from "../../dao/goal/GoalDao";
import { Goal } from "../../ddl/goal/Goal";
export declare class GoalApi {
    conversationApi: ConversationApi;
    goalConversationDao: GoalConversationDao;
    goalDao: GoalDao;
    findAll(): Promise<Goal[]>;
    loadConversationForGoal(goalId: Goal | string): Promise<Conversation>;
    findAllForTopic(topic: Topic | string): Promise<Goal[]>;
    save(goal: Goal): Promise<void>;
}
//# sourceMappingURL=GoalApi.d.ts.map