import {
	IAirEntity,
} from '@airport/holding-pattern';
import {
	ITopic,
} from '@airline/topics';
import {
	IParticipant,
} from './participant';
import {
	IModerator,
} from './moderator';
import {
	IComment,
} from './comment';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IConversation extends IAirEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	name?: string;

	// Non-Id Relations
	topic?: ITopic;
	participants?: IParticipant[];
	moderators?: IModerator[];
	comments?: IComment[];

	// Transient Properties

	// Public Methods
	
}


