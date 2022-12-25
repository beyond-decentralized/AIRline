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
  self: CollectionPage = this

  constructor(
    private collectionsService: CollectionsService,
    private conversationService: ConversationService,
    private route: ActivatedRoute,
    private sessionStateService: SessionStateService
  ) { }

  ngOnInit() {
    this.queryParamsSubscription = this.route.params
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

  saveConversation(
    conversation: Conversation,
    conversationModeratorUserAccounts: UserAccount[],
    conversationParticipantUserAccounts: UserAccount[]
  ) {
    this.addConversationAsync(
      conversation,
      conversationModeratorUserAccounts,
      conversationParticipantUserAccounts
    ).then()
  }

  private async addConversationAsync(
    conversation: Conversation,
    conversationModeratorUserAccounts: UserAccount[],
    conversationParticipantUserAccounts: UserAccount[]
  ): Promise<void> {
    await this.conversationService.saveConversation(
      conversation,
      conversationModeratorUserAccounts,
      conversationParticipantUserAccounts
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
