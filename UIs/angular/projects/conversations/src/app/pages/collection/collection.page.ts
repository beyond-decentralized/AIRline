import { Collection, CollectionConversation, Conversation, Participant } from '@airline/conversations';
import { UserAccount } from '@airport/travel-document-checkpoint';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, distinctUntilChanged, map, mergeMap } from 'rxjs';
import { CollectionsService } from '../../services/collections.service';
import { ConversationService } from '../../services/conversation.service';
import { SessionStateService } from '../../services/session-state.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'cvr-collection',
  templateUrl: './collection.page.html',
  styleUrls: ['./collection.page.css'],
})
export class CollectionPage implements OnDestroy, OnInit {

  newConversation: Conversation = new Conversation()
  collection = toSignal(this.route.params.pipe(
    map(params => params['collectionId']),
    distinctUntilChanged(),
    mergeMap(collectionId =>
      this.collectionsService.loadCollection(collectionId)),
    map(collection => {
      this.newConversation.collection = collection
      return collection
    })
  ))
  loggedInUserAccount: UserAccount = null as any
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

  async ngOnInit() {
    this.loggedInUserAccount = await this.sessionStateService.getLoggedInUserAccount()
    this.setupDefaultUserAccountsForConversation()
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
    this.newConversation.collection = this.collection() as Collection
    this.setupDefaultUserAccountsForConversation()
  }

  setupDefaultUserAccountsForConversation() {
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
