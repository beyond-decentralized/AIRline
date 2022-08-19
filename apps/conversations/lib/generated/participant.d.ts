import { IAirEntity } from '@airport/holding-pattern';
import { IConversation } from './conversation';
import { IUserAccount } from '@airport/travel-document-checkpoint';
export interface IParticipant extends IAirEntity {
    conversation?: IConversation;
    moderator?: IUserAccount;
}
//# sourceMappingURL=participant.d.ts.map