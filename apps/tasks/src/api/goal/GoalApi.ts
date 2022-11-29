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
    async findAllForTopic(
        topic: Topic | string
    ): Promise<Goal[]> {
        return await this.goalDao.findAllForTopic(topic)
    }

    @Api()
    async save(
        goal: Goal
    ): Promise<void> {
        const isNewGoal = !goal.id
        let conversation: Conversation
        if (isNewGoal) {
            goal.goalConversations = []
            const goalConversation = new GoalConversation()
            goalConversation.goal = goal
            goal.goalConversations.push(goalConversation)

            conversation = new Conversation()
            conversation.name = 'Goal: ' + goal.name
            goalConversation.conversation = conversation

            const repository = await this.repositoryApi.create(conversation.name)
            goal.repository = repository

            await this.conversationApi.save(conversation)
        }

        await this.goalDao.save(goal)

        if (isNewGoal) {
            goal.repository.startUiUrl = 'http://localhost:3003/goal/' + goal.id
            await this.goalDao.save(goal)
        }
    }

}
