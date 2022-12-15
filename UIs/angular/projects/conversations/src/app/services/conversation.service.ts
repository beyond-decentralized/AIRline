import { Conversation, ConversationApi } from '@airline/conversations';
import { UserAccount } from '@airport/travel-document-checkpoint';
import { Injectable } from '@angular/core';
import { SessionStateService } from './session-state.service';

@Injectable({
  providedIn: 'root'
})
export class ConversationService {

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
      alert(e.message)
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

  async loadConversation(
    id: string
  ): Promise<Conversation> {
    let conversation: Conversation = null as any
    try {
      conversation = await this.conversationApi.loadWithDetails(id)
    } catch (e: any) {
      console.error(e)
      alert(e.message)
    }

    return conversation
  }
}
