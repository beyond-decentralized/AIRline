import { Topic } from "@airline/topics";
import { Api } from "@airport/air-traffic-control";
import { Inject, Injected } from "@airport/direction-indicator";
import { Repository, RepositoryApi } from "@airport/holding-pattern";
import { CollectionDao } from "../dao/CollectionDao";
import { Collection } from "../ddl/Collection";

@Injected()
export class CollectionApi {

    @Inject()
    collectionDao: CollectionDao

    @Inject()
    repositoryApi: RepositoryApi

    @Api()
    async findAll(): Promise<Collection[]> {
        return await this.collectionDao.findAll()
    }

    @Api()
    async findAllForTopic(
        topic: Topic | string
    ): Promise<Collection[]> {
        return await this.collectionDao.findAllForTopic(topic)
    }

    @Api()
    async create(
        name: string,
        repository?: Repository
    ): Promise<Collection> {
        const collection = new Collection()
        collection.name = name

        if (!repository) {
            repository = await this.repositoryApi.create(collection.name)
            collection.repository = repository
        }

        await this.collectionDao.save(collection)

        if (!repository) {
            await this.repositoryApi.setUiEntryUri(
                'http://localhost:3002/collection/' + collection.id,
                collection.repository
            )
        }

        return collection
    }

    @Api()
    async save(
        collection: Collection
    ): Promise<void> {
        await this.collectionDao.save(collection)
    }

    @Api()
    async loadWithDetails(
        collectionId: string
    ): Promise<Collection> {
        return await this.collectionDao.loadWithDetails(collectionId)
    }

}