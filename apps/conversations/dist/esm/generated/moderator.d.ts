import { IAirEntity } from '@airport/holding-pattern';
import { IConversation } from './conversation';
import { IUserAccount } from '@airport/travel-document-checkpoint';
export interface IModerator extends IAirEntity {
    conversation?: IConversation;
    userAccount?: IUserAccount;
}
//# sourceMappingURL=moderator.d.ts.map