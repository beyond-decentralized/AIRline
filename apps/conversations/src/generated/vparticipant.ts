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
	ConversationVDescriptor,
} from './vconversation';
import {
	Conversation,
} from '../ddl/Conversation';
import {
	UserAccountVDescriptor,
	UserAccount,
} from '@airport/travel-document-checkpoint/lib/to_be_generated/runtime-index';
import {
	IParticipant,
} from './participant';



////////////////////
//  API INTERFACE //
////////////////////

export interface ParticipantVDescriptor<T>
    extends AirEntityVDescriptor<T> {
	// Id Properties
	
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	conversation?: ConversationVDescriptor<Conversation>
	userAccount?: UserAccountVDescriptor<UserAccount>

}


