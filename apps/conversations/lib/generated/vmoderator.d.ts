import { AirEntityVDescriptor } from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import { ConversationVDescriptor } from './vconversation';
import { Conversation } from '../ddl/Conversation';
import { UserAccountVDescriptor, UserAccount } from '@airport/travel-document-checkpoint/lib/to_be_generated/runtime-index';
export interface ModeratorVDescriptor<T> extends AirEntityVDescriptor<T> {
    conversation?: ConversationVDescriptor<Conversation>;
    moderator?: UserAccountVDescriptor<UserAccount>;
}
//# sourceMappingURL=vmoderator.d.ts.map