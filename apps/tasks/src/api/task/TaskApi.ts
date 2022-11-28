import { Conversation, ConversationApi } from "@airline/conversations";
import { Topic } from "@airline/topics";
import { Api } from "@airport/check-in";
import { Inject, Injected } from "@airport/direction-indicator";
import { TaskConversationDao } from "../../dao/task/TaskConversationDao";
import { TaskDao } from "../../dao/task/TaskDao";
import { TaskConversation } from "../../ddl/task/TaskConversation";
import { Goal } from "../../ddl/goal/Goal";
import { Task } from "../../ddl/task/Task";

@Injected()
export class TaskApi {

    @Inject()
    conversationApi: ConversationApi

    @Inject()
    taskConversationDao: TaskConversationDao

    @Inject()
    taskDao: TaskDao

    @Api()
    async findAll(): Promise<Task[]> {
        return await this.taskDao.findAll()
    }

    @Api()
    async findAllForGoal(
        goal: Goal | string
    ): Promise<Task[]> {
        return await this.taskDao.findAllForGoal(goal)
    }

    @Api()
    async findAllForTopic(
        topic: Topic | string
    ): Promise<Task[]> {
        return await this.taskDao.findAllForTopic(topic)
    }

    @Api()
    async save(
        task: Task
    ): Promise<void> {
        const isNewTask = !task.id
        let conversation: Conversation
        if (isNewTask) {
            task.taskConversations = []
            const taskConversation = new TaskConversation()
            taskConversation.task = task
            task.taskConversations.push(taskConversation)

            conversation = new Conversation()
            conversation.name = 'Task: ' + task.name
            taskConversation.conversation = conversation

            await this.conversationApi.save(conversation)
        }

        await this.taskDao.save(task)

        if (isNewTask) {
            conversation.type = 'TASK'
            conversation.typedEntityId = task.id
            await this.conversationApi.save(conversation)
        }
    }

}
