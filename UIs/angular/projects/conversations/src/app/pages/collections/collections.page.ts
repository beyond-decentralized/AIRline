import { Collection } from '@airline/conversations';
import { Component, OnInit } from '@angular/core';
import { CollectionsService } from '../../services/collections.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'cvr-collections',
  templateUrl: './collections.page.html',
  styleUrls: ['./collections.page.css'],
})
export class CollectionsPage {

  collectionsByTopic$: Observable<Collection[][]> = this.collectionsService
    .getCollectionsByTopic();

  constructor(
    private collectionsService: CollectionsService
  ) { }

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
