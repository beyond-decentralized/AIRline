import { Topic } from "@airline/topics";
import { Api } from "@airport/check-in";
import { Inject, Injected } from "@airport/direction-indicator";
import { Repository, RepositoryApi } from "@airport/holding-pattern";
import { ConversationGroupDao } from "../dao/ConversationGroupDao";
import { ConversationGroup } from "../ddl/ConversationGroup";

@Injected()
export class ConversationGroupApi {

    @Inject()
    conversationGroupDao: ConversationGroupDao

    @Inject()
    repositoryApi: RepositoryApi

    @Api()
    async findAll(): Promise<ConversationGroup[]> {
        return await this.conversationGroupDao.findAll()
    }

    @Api()
    async findAllForTopic(
        topic: Topic | string
    ): Promise<ConversationGroup[]> {
        return await this.conversationGroupDao.findAllForTopic(topic)
    }

    @Api()
    async create(
        name: string,
        repository?: Repository
    ): Promise<ConversationGroup> {
        const conversationGroup = new ConversationGroup()
        conversationGroup.name = name

        if (!repository) {
            repository = await this.repositoryApi.create(conversationGroup.name)
            conversationGroup.repository = repository
        }

        await this.conversationGroupDao.save(conversationGroup)

        if (!repository) {
            await this.repositoryApi.setUiEntryUri(
                'http://localhost:3002/conversationGroup/' + conversationGroup.id,
                conversationGroup.repository
            )
        }

        return conversationGroup
    }

    @Api()
    async save(
        conversationGroup: ConversationGroup
    ): Promise<void> {
        await this.conversationGroupDao.save(conversationGroup)
    }

    @Api()
    async loadWithDetails(
        conversationGroupId: string
    ): Promise<ConversationGroup> {
        return await this.conversationGroupDao.loadWithDetails(conversationGroupId)
    }

}