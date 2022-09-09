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
	TaskVDescriptor,
} from './VTask';
import {
	Task,
} from '../../../ddl/task/Task';
import {
	ConversationVDescriptor,
	Conversation,
} from '@airline/conversations';
import {
	ITaskConversation,
} from '../../entity/task/ITaskConversation';



////////////////////
//  API INTERFACE //
////////////////////

export interface TaskConversationVDescriptor<T>
    extends AirEntityVDescriptor<T> {
	// Id Properties
	
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	task?: TaskVDescriptor<Task>
	conversation?: ConversationVDescriptor<Conversation>

}


