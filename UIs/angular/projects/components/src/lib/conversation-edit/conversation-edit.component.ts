import { Conversation } from '@airline/conversations';
import { UserAccount } from '@airport/travel-document-checkpoint';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
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
  conversation: Conversation | null = null

  @Input()
  moderatorUserAccounts: UserAccount[] = []

  @Input()
  onWillDismiss: (e: Event) => void = null as any

  @Input()
  participantUserAccounts: UserAccount[] = []

  @Input()
  triggerId: string = null as any

  constructor() { }

  ngOnInit() { }

  cancel(): void {
    this.modal.dismiss(null, 'cancel')
  }

  save(): void {
    this.modal.dismiss(null, 'save')
  }

  identifyUserAccount(
    _index: number,
    userAccount: UserAccount
  ) {
    return userAccount.GUID
  }

}
