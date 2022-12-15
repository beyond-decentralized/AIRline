import { Injectable } from '@angular/core';
import { Collection, CollectionApi, Conversation } from '@airline/conversations';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  collectionApi = new CollectionApi()

  constructor() { }

  async getCollectionsByTopic(): Promise<Collection[][]> {
    const collectionsByTopic: Collection[][] = []

    try {
      const collections = await this.collectionApi.findAll()
      const collectionMapByTopicId: { [topicId: string]: Collection[] } = {}

      for (const collection of collections) {
        const topicId = collection.topic
          ? collection.topic.id as string : 'null'
        let conversationsForTopic = collectionMapByTopicId[topicId]
        if (!conversationsForTopic) {
          conversationsForTopic = []
          collectionMapByTopicId[topicId] = conversationsForTopic
        }
        conversationsForTopic.push(collection)
      }
      let collectionsWithNoTopic: Collection[] | null = null
      for (let topicId in collectionMapByTopicId) {
        if (topicId === 'null') {
          collectionsWithNoTopic = collectionMapByTopicId[topicId]
        } else {
          collectionsByTopic.push(collectionMapByTopicId[topicId])
        }
      }
      if (collectionsWithNoTopic) {
        collectionsByTopic.push(collectionsWithNoTopic)
      }
    } catch (e) {
      console.error(e)
      alert('Error retrieving Conversations')
    }

    return collectionsByTopic
  }

  async loadCollection(
    id: string,
    // newConversation: Conversation
  ): Promise<Collection> {

    let collection: Collection = null as any;
    try {
      collection = await this.collectionApi.loadWithDetails(id)
      // newConversation.collection = collection
    } catch (e: any) {
      console.error(e)
      alert(e.message)
    }

    return collection;
  }
}
