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
} from '@airport/holding-pattern/dist/app/bundle';
import {
	GoalVDescriptor,
} from './vgoal';
import {
	Goal,
} from '../../ddl/goal/Goal';
import {
	ConversationVDescriptor,
	Conversation,
} from '@airline/conversations/dist/app/bundle';
import {
	IGoalConversation,
} from './goalconversation';



////////////////////
//  API INTERFACE //
////////////////////

export interface GoalConversationVDescriptor<T>
    extends AirEntityVDescriptor<T> {
	// Id Properties
	
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	goal?: GoalVDescriptor<Goal>
	conversation?: ConversationVDescriptor<Conversation>

}


