import { RequestManager } from "@airport/arrivals-n-departures";
import { Api } from "@airport/check-in";
import { Inject, Injected } from "@airport/direction-indicator";
import { UserAccount } from "@airport/travel-document-checkpoint";
import { ConversationDao } from "../dao/ConversationDao";
import { Conversation } from "../ddl/Conversation";
import { ConversationGroup } from "../ddl/ConversationGroup";
import { Participant } from "../ddl/Participant";

@Injected()
export class ConversationApi {

    @Inject()
    conversationDao: ConversationDao

    @Inject()
    requestManager: RequestManager

    @Api()
    async create(
        conversationGroup: ConversationGroup,
        userAccounts?: UserAccount[]
    ): Promise<Conversation> {
        const conversation = new Conversation()
        conversation.group = conversationGroup

        if (!userAccounts) {
            userAccounts = []
        }
        if (!userAccounts.length) {
            userAccounts.push(this.requestManager.userAccount)
        }

        conversation.participants = []
        for (const userAccount of userAccounts) {
            const participant = new Participant()
            participant.conversation = conversation
            participant.userAccount = userAccount
            conversation.participants.push(participant)
        }

        conversationGroup.conversations.push(conversation)
        conversation.repository = conversationGroup.repository

        await this.conversationDao.save(conversation)

        return conversation
    }

    @Api()
    async save(
        conversation: Conversation
    ): Promise<void> {
        await this.conversationDao.save(conversation)
    }

    @Api()
    async loadWithDetails(
        conversationId: string
    ): Promise<Conversation> {
        return await this.conversationDao.loadWithDetails(conversationId)
    }

}