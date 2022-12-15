import { Collection } from '@airline/conversations';
import { Component, OnInit } from '@angular/core';
import { CollectionsService } from '../../services/collections.service';

@Component({
  selector: 'cvr-collections',
  templateUrl: './collections.page.html',
  styleUrls: ['./collections.page.css'],
})
export class CollectionsPage implements OnInit {

  collectionsByTopic: Collection[][] = null as any;

  constructor(
    private collectionsService: CollectionsService
  ) { }

  ngOnInit() {
    this.reloadCollectionsByTopic()
  }

  reloadCollectionsByTopic(): void {
    this.loadCollectionsByTopic().then()
  }

  async loadCollectionsByTopic(): Promise<void> {
    this.collectionsByTopic = await this.collectionsService
      .getCollectionsByTopic()
  }

  identifyCollections(
    _index: number,
    collectionsForTopic: Collection[]
  ) {
    return collectionsForTopic[0].id;
  }

  identifyCollection(
    _index: number,
    collectionsForTopic: Collection
  ) {
    return collectionsForTopic.id;
  }

}
