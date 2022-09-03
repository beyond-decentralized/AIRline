import { AirEntityVDescriptor } from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import { GoalVDescriptor } from './vgoal';
import { Goal } from '../../ddl/goal/Goal';
import { ConversationVDescriptor, Conversation } from '@airline/conversations/lib/to_be_generated/runtime-index';
export interface GoalConversationVDescriptor<T> extends AirEntityVDescriptor<T> {
    goal?: GoalVDescriptor<Goal>;
    conversation?: ConversationVDescriptor<Conversation>;
}
//# sourceMappingURL=vgoalconversation.d.ts.map