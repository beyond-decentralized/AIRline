import { Conversation, ConversationApi } from "@airline/conversations";
import { Topic } from "@airline/topics";
import { Api } from "@airport/check-in";
import { Inject, Injected } from "@airport/direction-indicator";
import { TaskConversationDao } from "../../dao/task/TaskConversationDao";
import { TaskDao } from "../../dao/task/TaskDao";
import { TaskConversation } from "../../ddl/task/TaskConversation";
import { Goal } from "../../ddl/goal/Goal";
import { Task } from "../../ddl/task/Task";
import { RepositoryApi } from "@airport/holding-pattern";
import { GoalTask } from "../../ddl/ddl";
import { GoalTaskDao } from "../../dao/dao";

@Injected()
export class TaskApi {

    @Inject()
    conversationApi: ConversationApi

    @Inject()
    goalTaskDao: GoalTaskDao

    @Inject()
    taskConversationDao: TaskConversationDao

    @Inject()
    taskDao: TaskDao

    @Inject()
    repositoryApi: RepositoryApi

    @Api()
    async findAll(): Promise<Task[]> {
        return await this.taskDao.findAllWithGoal()
    }

    @Api()
    async findAllForGoal(
        goal: Goal | string
    ): Promise<Task[]> {
        return await this.taskDao.findAllForGoalWithGoal(goal)
    }

    @Api()
    async findAllForTopic(
        topic: Topic | string
    ): Promise<Task[]> {
        return await this.taskDao.findAllForTopicWithGoal(topic)
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

        task.repository = conversation.repository
        await this.taskDao.save(task)

        if (isNewTask) {
            const goalTask: GoalTask = new GoalTask()
            goalTask.task = task
            goalTask.goal = task.goal
            goalTask.repository = task.goal.repository
            this.goalTaskDao.save(goalTask)

            conversation.repository.uiEntryUri = 'http://localhost:3002/task/' + task.id
            await this.conversationApi.save(conversation)
        }
    }

}
