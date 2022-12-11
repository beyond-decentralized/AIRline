import { RequestManager } from "@airport/arrivals-n-departures";
import { Api } from "@airport/check-in";
import { Inject, Injected } from "@airport/direction-indicator";
import { RepositoryApi } from "@airport/holding-pattern";
import { UserAccount } from "@airport/travel-document-checkpoint";
import { ConversationDao } from "../dao/ConversationDao";
import { ConversationGroupConversationDao } from "../dao/ConversationGroupConversationDao";
import { Conversation } from "../ddl/Conversation";
import { ConversationGroup } from "../ddl/ConversationGroup";
import { ConversationGroupConversation } from "../ddl/ConversationGroupConversation";
import { Moderator } from "../ddl/Moderator";
import { Participant } from "../ddl/Participant";

@Injected()
export class ConversationApi {

    @Inject()
    conversationDao: ConversationDao

    @Inject()
    conversationGroupConversationDao: ConversationGroupConversationDao

    @Inject()
    requestManager: RequestManager

    @Inject()
    repositoryApi: RepositoryApi

    @Api()
    async create(
        conversationGroup: ConversationGroup,
        participantUserAccounts: UserAccount[],
        moderatorUserAccounts: UserAccount[]
    ): Promise<Conversation> {
        const conversation = new Conversation()
        conversation.conversationGroup = conversationGroup

        if (!participantUserAccounts) {
            participantUserAccounts = []
        }
        if (!participantUserAccounts.length) {
            participantUserAccounts.push(this.requestManager.userAccount)
        }

        conversation.participants = []
        const participantUserNames = []
        for (const participantUserAccount of participantUserAccounts) {
            const participant = new Participant()
            participant.conversation = conversation
            participant.userAccount = participantUserAccount
            conversation.participants.push(participant)
            participantUserNames.push(participantUserAccount.username)
        }
        if (moderatorUserAccounts) {
            for (const moderatorUserAccount of moderatorUserAccounts) {
                const moderator = new Moderator()
                moderator.conversation = conversation
                moderator.userAccount = moderatorUserAccount
                conversation.moderators.push(moderator)
            }
        }
        conversation.conversationGroup = conversationGroup

        const repository = await this.repositoryApi.create(
            'Conversation: ' + participantUserNames.join(', '),
            conversationGroup.repository,
            'Conversations'
        )
        conversation.repository = repository
        await this.conversationDao.save(conversation)

        await this.repositoryApi
            .setUiEntryUri('http://localhost:3002/conversation/' + conversation.id, repository)

        const conversationGroupConversation = new ConversationGroupConversation()
        conversationGroupConversation.conversationGroup = conversationGroup
        conversationGroupConversation.conversation = conversation
        conversationGroup.conversationGroupConversations.push(conversationGroupConversation)
        conversationGroupConversation.repository = conversationGroup.repository
        this.conversationGroupConversationDao.save(conversationGroupConversation)

        return conversation
    }

    @Api()
    async save(
        conversation: Conversation,
        participantUserAccounts: UserAccount[],
        moderatorUserAccounts: UserAccount[]
    ): Promise<void> {
        // TODO: implement Participant and Moderator checks and conversion
        await this.conversationDao.save(conversation)
    }

    @Api()
    async loadWithDetails(
        conversationId: string
    ): Promise<Conversation> {
        return await this.conversationDao.loadWithDetails(conversationId)
    }

}