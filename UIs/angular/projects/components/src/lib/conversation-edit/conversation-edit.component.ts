import { Conversation } from '@airline/conversations';
import { IUserAccount } from '@airport/ground-control';
import { UserAccount } from '@airport/travel-document-checkpoint';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'air-conversation-edit',
  templateUrl: './conversation-edit.component.html',
  styleUrls: ['./conversation-edit.component.css'],
})
export class ConversationEditComponent implements OnInit {

  @ViewChild(IonModal)
  modal: IonModal = null as any

  @Input()
  conversation: Conversation = null as any

  moderatorUserAccounts: UserAccount[] = []

  @Input()
  parent: {
    saveConversation(
      conversation: Conversation,
      moderatorUserAccounts: UserAccount[],
      participantUserAccounts: UserAccount[]
    ): void
  } = null as any

  @Input()
  set collectionUsers(collectionUsers: IUserAccount[]) {
    this.moderatorUserAccounts = collectionUsers
    this.participantUserAccounts = collectionUsers
    this.setModeratorUserAccounts.emit(this.moderatorUserAccounts)
    this.setParticipantUserAccounts.emit(this.participantUserAccounts)
  }

  participantUserAccounts: UserAccount[] = []

  @Input()
  triggerId: string = null as any

  saveOnClose = false

  @Output()
  setModeratorUserAccounts = new EventEmitter<IUserAccount[]>()

  @Output()
  setParticipantUserAccounts = new EventEmitter<IUserAccount[]>()

  constructor() { }

  ngOnInit() { }

  dismiss(e: Event): void {
    if (this.saveOnClose) {
      this.parent.saveConversation(
        this.conversation,
        this.moderatorUserAccounts,
        this.participantUserAccounts
      )
    }
  }

  cancel(): void {
    this.modal.dismiss(null, 'cancel')
  }

  save(): void {
    this.saveOnClose = true
    this.modal.dismiss(null, 'save')
  }

  identifyUserAccount(
    _index: number,
    userAccount: UserAccount
  ) {
    return userAccount.accountPublicSigningKey
  }

}
