import {
	IAirEntity,
} from '@airport/holding-pattern';
import {
	IComment,
} from './comment';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface ITakeBackRequest extends IAirEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	forComment?: IComment;
	viaComment?: IComment;

	// Transient Properties

	// Public Methods
	
}


