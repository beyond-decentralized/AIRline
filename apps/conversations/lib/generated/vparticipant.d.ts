import { AirEntityVDescriptor } from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import { ConversationVDescriptor } from './vconversation';
import { Conversation } from '../ddl/Conversation';
import { UserAccountVDescriptor, UserAccount } from '@airport/travel-document-checkpoint/lib/to_be_generated/runtime-index';
export interface ParticipantVDescriptor<T> extends AirEntityVDescriptor<T> {
    conversation?: ConversationVDescriptor<Conversation>;
    userAccount?: UserAccountVDescriptor<UserAccount>;
}
//# sourceMappingURL=vparticipant.d.ts.map