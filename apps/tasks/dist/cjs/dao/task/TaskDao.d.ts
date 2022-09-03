import { Topic } from "@airline/topics";
import { Goal } from "../../ddl/goal/Goal";
import { Task } from "../../ddl/task/Task";
import { BaseTaskDao } from "../../generated/baseDaos";
export declare class TaskDao extends BaseTaskDao {
    findById(taskUuId: string): Promise<Task>;
    findAllForGoal(goal: Goal | string): Promise<Task[]>;
    findAllForTopic(topic: Topic | string): Promise<Task[]>;
}
//# sourceMappingURL=TaskDao.d.ts.map