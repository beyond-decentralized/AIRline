import { Comment, CommentApi, Conversation, ConversationApi } from '@airline/conversations';
import { UserAccount } from '@airport/travel-document-checkpoint';
import { Injectable } from '@angular/core';
import { SessionStateService } from './session-state.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConversationService {

  commentApi = new CommentApi()
  conversationApi = new ConversationApi()

  constructor(
    private sessionStateService: SessionStateService
  ) { }

  async saveConversation(
    conversation: Conversation,
    participantUserAccounts: UserAccount[],
    moderatorUserAccounts: UserAccount[]
  ): Promise<void> {
    try {
      if (conversation.id) {
        await this.conversationApi.save(
          conversation,
          participantUserAccounts,
          moderatorUserAccounts
        )
      } else {
        await this.conversationApi.create(
          conversation.collection,
          participantUserAccounts,
          moderatorUserAccounts
        )
      }
    } catch (e: any) {
      console.error(e)
    }
  }

  async populateConversationDetails(
    conversation: Conversation,
  ): Promise<{
    moderatorUserAccounts: (UserAccount | null)[],
    participantUserAccounts: (UserAccount | null)[]
  }> {
    if (!conversation.id) {
      const loggedInUserAccount = await this.sessionStateService
        .getLoggedInUserAccount()
      return {
        moderatorUserAccounts: [loggedInUserAccount],
        participantUserAccounts: [loggedInUserAccount]
      }
    }

    return {
      moderatorUserAccounts: conversation.moderators.map(moderator => moderator.userAccount),
      participantUserAccounts: conversation.participants.map(participant => participant.userAccount)
    }
  }

  searchConversation(
    id: string
  ): Observable<Conversation> {
    let conversation$: Observable<Conversation> = of(null) as any
    try {
      conversation$ = this.conversationApi.loadWithDetails(id)
    } catch (e: any) {
      console.error(e)
    }

    return conversation$
  }

  searchComments(
    id: string
  ): Observable<Comment[]> {
    let comments$: Observable<Comment[]> = of([]) as any
    try {
      comments$ = this.commentApi.searchAllForConversation(id)
    } catch(e: any) {
      console.error(e)
    }

    return comments$
  }
}
