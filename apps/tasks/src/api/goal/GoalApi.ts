import { Conversation, ConversationApi } from "@airline/conversations";
import { Topic } from "@airline/topics";
import { Api } from "@airport/check-in";
import { Inject, Injected } from "@airport/direction-indicator";
import { RepositoryApi } from "@airport/holding-pattern"
import { GoalConversationDao } from "../../dao/goal/GoalConversationDao";
import { GoalDao } from "../../dao/goal/GoalDao";
import { GoalConversation } from "../../ddl/ddl";
import { Goal } from "../../ddl/goal/Goal";

@Injected()
export class GoalApi {

    @Inject()
    conversationApi: ConversationApi

    @Inject()
    goalConversationDao: GoalConversationDao

    @Inject()
    goalDao: GoalDao

    @Inject()
    repositoryApi: RepositoryApi

    @Api()
    async findAll(): Promise<Goal[]> {
        return await this.goalDao.findAll()
    }

    @Api()
    async loadConversationForGoal(
        goalId: Goal | string
    ): Promise<Conversation> {
        const goalConversation = await this.goalConversationDao
            .loadConversationForGoal(goalId)

        return goalConversation.conversation
    }

    @Api()
    async findAllForTopic(
        topic: Topic | string
    ): Promise<Goal[]> {
        return await this.goalDao.findAllForTopic(topic)
    }

    @Api()
    async save(
        goal: Goal
    ): Promise<void> {
        if (!goal.id) {
            goal.goalConversations = []
            const taskConversation = new GoalConversation()
            taskConversation.goal = goal
            goal.goalConversations.push(taskConversation)

            const conversation = new Conversation()
            conversation.name = 'Goal: ' + goal.name
            taskConversation.conversation = conversation

            const repository = await this.repositoryApi.create(conversation.name)
            goal.repository = repository
        }
        await this.conversationApi.save(goal.goalConversations[0].conversation);
        await this.goalDao.save(goal);
    }
}