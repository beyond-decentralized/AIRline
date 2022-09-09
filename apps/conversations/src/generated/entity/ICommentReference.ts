import {
	IAirEntity,
} from '@airport/holding-pattern';
import {
	IComment,
} from './IComment';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface ICommentReference extends IAirEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	reference?: IComment;
	referredFrom?: IComment;

	// Transient Properties

	// Public Methods
	
}


