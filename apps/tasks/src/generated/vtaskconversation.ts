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
	TaskVDescriptor,
} from './vtask';
import {
	Task,
} from '../ddl/Task';
import {
	ConversationVDescriptor,
	Conversation,
} from '@airline/conversations/lib/to_be_generated/runtime-index';
import {
	ITaskConversation,
} from './taskconversation';



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


