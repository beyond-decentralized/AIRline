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
	ConversationVDescriptor,
} from './VConversation';
import {
	Conversation,
} from '../../ddl/Conversation';
import {
	UserAccountVDescriptor,
	UserAccount,
} from '@airport/travel-document-checkpoint';
import {
	IModerator,
} from '../entity/IModerator';



////////////////////
//  API INTERFACE //
////////////////////

export interface ModeratorVDescriptor<T>
    extends AirEntityVDescriptor<T> {
	// Id Properties
	
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	conversation?: ConversationVDescriptor<Conversation>
	userAccount?: UserAccountVDescriptor<UserAccount>

}


