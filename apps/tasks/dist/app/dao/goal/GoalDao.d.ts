import { Topic } from "@airline/topics";
import { Goal } from "../../ddl/goal/Goal";
import { BaseGoalDao } from "../../generated/baseDaos";
export declare class GoalDao extends BaseGoalDao {
    findAll(): Promise<Goal[]>;
    findById(goalUuId: string | Goal): Promise<Goal>;
    findAllForTopic(topic: Topic | string): Promise<Goal[]>;
}
//# sourceMappingURL=GoalDao.d.ts.map