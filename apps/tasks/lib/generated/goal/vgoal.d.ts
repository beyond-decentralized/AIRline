import { IVNumberField, IVStringField } from '@airbridge/validate';
import { AirEntityVDescriptor } from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import { TopicVDescriptor, Topic } from '@airline/topics/lib/to_be_generated/runtime-index';
import { GoalConversationVDescriptor } from './vgoalconversation';
import { GoalConversation } from '../../ddl/goal/GoalConversation';
import { GoalTaskVDescriptor } from './vgoaltask';
import { GoalTask } from '../../ddl/goal/GoalTask';
export interface GoalVDescriptor<T> extends AirEntityVDescriptor<T> {
    name?: string | IVStringField;
    description?: string | IVStringField;
    status?: number | IVNumberField;
    importance?: number | IVNumberField;
    urgency?: number | IVNumberField;
    topic?: TopicVDescriptor<Topic>;
    goalConversations?: GoalConversationVDescriptor<GoalConversation>;
    goalTasks?: GoalTaskVDescriptor<GoalTask>;
}
//# sourceMappingURL=vgoal.d.ts.map