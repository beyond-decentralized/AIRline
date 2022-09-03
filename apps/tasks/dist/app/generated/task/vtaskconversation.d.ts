import { AirEntityVDescriptor } from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import { TaskVDescriptor } from './vtask';
import { Task } from '../../ddl/task/Task';
import { ConversationVDescriptor, Conversation } from '@airline/conversations/lib/to_be_generated/runtime-index';
export interface TaskConversationVDescriptor<T> extends AirEntityVDescriptor<T> {
    task?: TaskVDescriptor<Task>;
    conversation?: ConversationVDescriptor<Conversation>;
}
//# sourceMappingURL=vtaskconversation.d.ts.map