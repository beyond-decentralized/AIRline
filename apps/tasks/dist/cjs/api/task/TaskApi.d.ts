import { Conversation, ConversationApi } from "@airline/conversations";
import { Topic } from "@airline/topics";
import { TaskConversationDao } from "../../dao/task/TaskConversationDao";
import { TaskDao } from "../../dao/task/TaskDao";
import { Goal } from "../../ddl/goal/Goal";
import { Task } from "../../ddl/task/Task";
export declare class TaskApi {
    conversationApi: ConversationApi;
    taskConversationDao: TaskConversationDao;
    taskDao: TaskDao;
    findAll(): Promise<Task[]>;
    loadConversationForTask(taskId: string | Task): Promise<Conversation>;
    findAllForGoal(goal: Goal | string): Promise<Task[]>;
    findAllForTopic(topic: Topic | string): Promise<Task[]>;
    save(task: Task): Promise<void>;
}
//# sourceMappingURL=TaskApi.d.ts.map