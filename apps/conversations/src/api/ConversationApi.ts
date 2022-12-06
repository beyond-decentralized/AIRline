import { Topic } from "@airline/topics";
import { RequestManager } from "@airport/arrivals-n-departures";
import { Api } from "@airport/check-in";
import { Inject, Injected } from "@airport/direction-indicator";
import { RepositoryApi } from "@airport/holding-pattern";
import { ConversationDao } from "../dao/ConversationDao";
import { Conversation } from "../ddl/Conversation";
import { Participant } from "../ddl/Participant";

@Injected()
export class ConversationApi {

    @Inject()
    conversationDao: ConversationDao

    @Inject()
    requestManager: RequestManager

    @Inject()
    repositoryApi: RepositoryApi

    @Api()
    async findAll(): Promise<Conversation[]> {
        return await this.conversationDao.findAll()
    }

    @Api()
    async findAllForTopic(
        topic: Topic | string
    ): Promise<Conversation[]> {
        return await this.conversationDao.findAllForTopic(topic)
    }

    @Api()
    async save(
        conversation: Conversation
    ): Promise<void> {
        let noExistingRepository = false
        const isNewConversation = !conversation.id
        if (isNewConversation) {
            conversation.participants = []
            const participant = new Participant()
            participant.conversation = conversation
            participant.userAccount = this.requestManager.userAccount
            conversation.participants.push(participant)

            noExistingRepository = !conversation.repository
            if (noExistingRepository) {
                const repository = await this.repositoryApi.create(conversation.name)
                conversation.repository = repository
            }
        }

        await this.conversationDao.save(conversation)

        // if (isNewConversation && noExistingRepository) {
            await this.repositoryApi.setUiEntryUri(
                'http://localhost:3002/conversation/' + conversation.id,
                conversation.repository
            )
        // }
    }

    @Api()
    async loadWithDetails(
        conversationId: string
    ): Promise<Conversation> {
        return await this.conversationDao.loadWithDetails(conversationId)
    }

}