import {
	IAirEntity,
} from '@airport/holding-pattern';
import {
	IConversation,
} from './IConversation';
import {
	IModerator,
} from './IModerator';
import {
	ICommentReference,
} from './ICommentReference';
import {
	ITakeBackRequest,
} from './ITakeBackRequest';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IComment extends IAirEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	text?: string;
	takenBack?: boolean;
	takenBackDttm?: Date;
	censored?: boolean;
	sensoredDttm?: Date;

	// Non-Id Relations
	conversation?: IConversation;
	source?: IComment;
	censoredBy?: IModerator;
	replies?: IComment[];
	references?: ICommentReference[];
	referredFrom?: IComment[];
	madeTakeBackRequest?: ITakeBackRequest[];
	takeBackRequests?: ITakeBackRequest[];

	// Transient Properties

	// Public Methods
	
}


