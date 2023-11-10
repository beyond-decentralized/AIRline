import { Injectable } from '@angular/core';
import { Collection, CollectionApi } from '@airline/conversations';
import { Observable, concatMap, from, groupBy, map, mergeMap, of, tap, toArray } from 'rxjs';
import { AirEntity_GUID, IUserAccount } from '@airport/ground-control';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  collectionApi = new CollectionApi()

  constructor() { }

  getCollectionsByTopic(): Observable<Collection[][]> {
    let collectionsByTopic$: Observable<Collection[][]> = of([]) as any;
    try {
      collectionsByTopic$ = this.collectionApi.searchAll().pipe(
        concatMap(collections => from(collections)),
        groupBy(collection => collection.topic
          ? collection.topic.id as string
          : 'null'),
        mergeMap(group => group.pipe(toArray())),
        toArray(),
        map(collectionsByTopics => collectionsByTopics.sort((a, b) => {
          let topicAName = a[0].topic.name
          let topicBName = b[0].topic.name
          if (topicAName === 'null') {
            return -1
          }
          if (topicBName === 'null') {
            return 1
          }
          if (topicAName < topicBName)
            return -1;
          if (topicBName > topicAName)
            return 1;
          return 0;
        })
        )
      )
    } catch (e) {
      console.error(e)
    }

    return collectionsByTopic$
  }

  searchCollection(
    collectionGUID: AirEntity_GUID,
    // newConversation: Conversation
  ): Observable<Collection> {
    return this.collectionApi.loadWithDetails(collectionGUID)
  }

  searchCollectionUsers(
    collectionGUID: AirEntity_GUID
  ): Observable<IUserAccount[]> {
    return this.collectionApi.searchCollectionUsers(
      collectionGUID)
  }
}
