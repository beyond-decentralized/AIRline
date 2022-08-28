import { Goal, GoalConversation } from "../../ddl/ddl";
import { BaseGoalConversationDao } from "../../generated/baseDaos";
export declare class GoalConversationDao extends BaseGoalConversationDao {
    loadConversationForGoal(task: Goal | string): Promise<GoalConversation>;
}
//# sourceMappingURL=GoalConversationDao.d.ts.map