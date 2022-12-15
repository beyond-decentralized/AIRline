import { SessionStateApi } from '@airport/session-state';
import { UserAccount } from '@airport/travel-document-checkpoint';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStateService {

  sessionStateApi = new SessionStateApi()

  currentlyLoggedInUserAccount: UserAccount = null as any

  constructor() { }

  async getLoggedInUserAccount(): Promise<UserAccount> {
    try {
      if (this.currentlyLoggedInUserAccount) {
        return this.currentlyLoggedInUserAccount
      }
      this.currentlyLoggedInUserAccount = await this.sessionStateApi.getLoggedInUser()
    } catch (e) {
      console.error(e)
      alert('Error retrieving logged in user')
    }

    return this.currentlyLoggedInUserAccount
  }
}
