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
} from '@airport/holding-pattern';
import {
	TopicVDescriptor,
	Topic,
} from '@airline/topics';
import {
	GoalConversationVDescriptor,
} from './VGoalConversation';
import {
	GoalConversation,
} from '../../../ddl/goal/GoalConversation';
import {
	GoalTaskVDescriptor,
} from './VGoalTask';
import {
	GoalTask,
} from '../../../ddl/goal/GoalTask';
import {
	IGoal,
} from '../../entity/goal/IGoal';



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


