import {
	IAirEntity,
} from '@airport/holding-pattern';
import {
	IConversation,
} from './conversation';
import {
	IUserAccount,
} from '@airport/travel-document-checkpoint';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IModerator extends IAirEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	conversation?: IConversation;
	userAccount?: IUserAccount;

	// Transient Properties

	// Public Methods
	
}


