import { Topic } from "@airline/topics";
import { Api } from "@airport/air-traffic-control";
import { Inject, Injected } from "@airport/direction-indicator";
import { Repository, RepositoryApi } from "@airport/holding-pattern";
import { CollectionDao } from "../dao/CollectionDao";
import { Collection } from "../ddl/Collection";
import { Observable, map } from "rxjs";

@Injected()
export class CollectionApi {

    @Inject()
    collectionDao: CollectionDao

    @Inject()
    repositoryApi: RepositoryApi

    @Api()
    searchAll(): Observable<Collection[]> {
        return this.collectionDao.searchAll().pipe(
            map(collections => {
                console.log(`CollectionApi returned ${collections.length} collections`)

                return collections
            })
        )
    }

    @Api()
    searchAllForTopic(
        topic: Topic | string
    ): Observable<Collection[]> {
        return this.collectionDao.searchAllForTopic(topic)
    }

    @Api()
    async create(
        name: string,
        repository?: Repository
    ): Promise<Collection> {
        const collection = new Collection()
        collection.name = name

        if (!repository) {
            repository = await this.repositoryApi.create(collection.name, true)
            collection.repository = repository
        }

        await this.collectionDao.save(collection)

        if (!repository) {
            await this.repositoryApi.setUiEntryUri(
                'localhost:3002/collection/' + collection.id,
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
    loadWithDetails(
        collectionId: string
    ): Observable<Collection> {
        return this.collectionDao.loadWithDetails(collectionId)
    }

}