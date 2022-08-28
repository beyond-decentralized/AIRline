import { Topic } from "@airline/topics";
import { RequestManager } from "@airport/arrivals-n-departures";
import { Api } from "@airport/check-in";
import { Inject, Injected } from "@airport/direction-indicator";
import { ConversationDao } from "../dao/ConversationDao";
import { Conversation } from "../ddl/Conversation";
import { Participant } from "../ddl/Participant";

@Injected()
export class ConversationApi {

    @Inject()
    conversationDao: ConversationDao

    @Inject()
    requestManager: RequestManager

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
        if (!conversation.id) {
            conversation.participants = []
            const participant = new Participant()
            participant.conversation = conversation
            participant.userAccount = this.requestManager.userAccount
            conversation.participants.push(participant)
        }
        await this.conversationDao.save(conversation)
    }

}