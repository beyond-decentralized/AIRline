import { Task, TaskConversation } from "../../ddl/ddl";
import { BaseTaskConversationDao } from "../../generated/baseDaos";
export declare class TaskConversationDao extends BaseTaskConversationDao {
    loadConversationForTask(task: Task | string): Promise<TaskConversation>;
}
//# sourceMappingURL=TaskConversationDao.d.ts.map