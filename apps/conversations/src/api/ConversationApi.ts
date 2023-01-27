import { Inject, Injected } from "@airport/direction-indicator";
import { RepositoryApi } from "@airport/holding-pattern";
import { UserAccount } from "@airport/travel-document-checkpoint";
import { ConversationDao } from "../dao/ConversationDao";
import { CollectionConversationDao } from "../dao/CollectionConversationDao";
import { Conversation } from "../ddl/Conversation";
import { Collection } from "../ddl/Collection";
import { CollectionConversation } from "../ddl/CollectionConversation";
import { Moderator } from "../ddl/Moderator";
import { Participant } from "../ddl/Participant";
import { RequestManager } from "@airport/tower";
import { Api } from "@airport/air-traffic-control";

@Injected()
export class ConversationApi {

    @Inject()
    conversationDao: ConversationDao

    @Inject()
    collectionConversationDao: CollectionConversationDao

    @Inject()
    requestManager: RequestManager

    @Inject()
    repositoryApi: RepositoryApi

    @Api()
    async create(
        collection: Collection,
        participantUserAccounts: UserAccount[],
        moderatorUserAccounts: UserAccount[]
    ): Promise<Conversation> {
        const conversation = new Conversation()
        conversation.collection = collection

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
        conversation.collection = collection

        const repository = await this.repositoryApi.create(
            'Conversation: ' + participantUserNames.join(', ')
        )
        conversation.repository = repository
        await this.conversationDao.save(conversation)

        await this.repositoryApi
            .setUiEntryUri('http://localhost:3002/conversation/' + conversation.id, repository)

        const collectionConversation = new CollectionConversation()
        collectionConversation.collection = collection
        collectionConversation.conversation = conversation
        collection.collectionConversations.push(collectionConversation)
        collectionConversation.repository = collection.repository
        this.collectionConversationDao.save(collectionConversation)

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