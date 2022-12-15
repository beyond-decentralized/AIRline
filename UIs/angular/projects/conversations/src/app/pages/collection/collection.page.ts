import { Collection, CollectionConversation, Conversation, Participant } from '@airline/conversations';
import { UserAccount } from '@airport/travel-document-checkpoint';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CollectionsService } from '../../services/collections.service';
import { ConversationService } from '../../services/conversation.service';
import { SessionStateService } from '../../services/session-state.service';

@Component({
  selector: 'cvr-collection',
  templateUrl: './collection.page.html',
  styleUrls: ['./collection.page.css'],
})
export class CollectionPage implements OnDestroy, OnInit {

  collection: Collection = null as any
  loggedInUserAccount: UserAccount = null as any
  newConversation: Conversation = new Conversation()
  newConversationModeratorUserAccounts: UserAccount[] = []
  newConversationParticipantUserAccounts: UserAccount[] = []
  queryParamsSubscription: Subscription = null as any

  constructor(
    private collectionsService: CollectionsService,
    private conversationService: ConversationService,
    private route: ActivatedRoute,
    private sessionStateService: SessionStateService
  ) { }

  ngOnInit() {
    this.queryParamsSubscription = this.route.queryParams
      .subscribe(params => {
        Promise.all([
          this.collectionsService.loadCollection(params['collectionId']),
          this.sessionStateService.getLoggedInUserAccount()
        ]).then(([collection, loggedInUserAccount]) => {
          this.collection = collection
          this.loggedInUserAccount = loggedInUserAccount
          this.setupNewConversationState()
        })
        this.collectionsService.loadCollection(params['collectionId'])
          .then(collection => {
            this.collection = collection
          })
      })
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe()
  }

  addConversation(_event: Event) {
    this.addConversationAsync().then()
  }

  async addConversationAsync(): Promise<void> {
    await this.conversationService.saveConversation(
      this.newConversation,
      this.newConversationParticipantUserAccounts,
      this.newConversationModeratorUserAccounts
    )
    this.setupNewConversationState()
  }

  setupNewConversationState(): void {
    this.newConversation = new Conversation()
    this.newConversation.collection = this.collection
    this.newConversationModeratorUserAccounts
      = [this.loggedInUserAccount]
    this.newConversationParticipantUserAccounts
      = [this.loggedInUserAccount]
  }

  identifyCollectionConverstation(
    _indexA: number,
    collectionConversation: CollectionConversation
  ) {
    return collectionConversation.id
  }

  identifyParticipant(
    _indexA: number,
    participant: Participant
  ) {
    return participant.id
  }
}
