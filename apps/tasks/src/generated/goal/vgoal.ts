import {
	IEntityVDescriptor,
	IVBooleanField,
	IVDateField,
	IVNumberField,
	IVStringField,
	IVUntypedField,
} from '@airbridge/validate';
import {
	AirEntityVDescriptor,
} from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import {
	TopicVDescriptor,
	Topic,
} from '@airline/topics/lib/to_be_generated/runtime-index';
import {
	GoalConversationVDescriptor,
} from './vgoalconversation';
import {
	GoalConversation,
} from '../../ddl/goal/GoalConversation';
import {
	GoalTaskVDescriptor,
} from './vgoaltask';
import {
	GoalTask,
} from '../../ddl/goal/GoalTask';
import {
	IGoal,
} from './goal';



////////////////////
//  API INTERFACE //
////////////////////

export interface GoalVDescriptor<T>
    extends AirEntityVDescriptor<T> {
	// Id Properties
	
	// Non-Id Properties
	name?: string | IVStringField;
	description?: string | IVStringField;
	status?: number | IVNumberField;
	importance?: number | IVNumberField;
	urgency?: number | IVNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	topic?: TopicVDescriptor<Topic>
	goalConversations?: GoalConversationVDescriptor<GoalConversation>
	goalTasks?: GoalTaskVDescriptor<GoalTask>

}


