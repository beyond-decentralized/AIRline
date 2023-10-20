import { Collection, CollectionConversation, Conversation, Participant } from '@airline/conversations';
import { UserAccount } from '@airport/travel-document-checkpoint';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, filter, map, mergeMap } from 'rxjs';
import { CollectionsService } from '../../services/collections.service';
import { ConversationService } from '../../services/conversation.service';
import { SessionStateService } from '../../services/session-state.service';

@Component({
  selector: 'cvr-collection',
  templateUrl: './collection.page.html',
  styleUrls: ['./collection.page.css'],
})
export class CollectionPage implements OnDestroy, OnInit {

  newConversation: Conversation = new Conversation()
  collection: Collection = null as any
  lastRouteParams: Record<string, any> = {};
  collection$: Observable<Collection> = this.route.params.pipe(
    filter((params) => {
      const routeParamKeys = Object.keys(params)
      const lastRouterParamKeys = Object.keys(this.lastRouteParams)
      try {
        if (routeParamKeys.length !== lastRouterParamKeys.length) {
          return true;
        }
        for(const routeParamKey of routeParamKeys) {
          if(params[routeParamKey] !== this.lastRouteParams[routeParamKey]) {
            return true
          }
        }
        for(const lastRouteParamKey of lastRouterParamKeys) {
          if(params[lastRouteParamKey] !== this.lastRouteParams[lastRouteParamKey]) {
            return true
          }
        }
        return false
      } finally {
        this.lastRouteParams = params
      }
    }),
    mergeMap(params =>
      this.collectionsService.loadCollection(params['collectionId'])),
    map(collection => {
      this.collection = collection
      this.newConversation.collection = collection
      return collection
    })
  )
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
    this.newConversation.collection = this.collection
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
