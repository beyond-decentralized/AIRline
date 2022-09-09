import {
	IAirEntity,
} from '@airport/holding-pattern';
import {
	IGoal,
} from './IGoal';
import {
	IConversation,
} from '@airline/conversations';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IGoalConversation extends IAirEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	goal?: IGoal;
	conversation?: IConversation;

	// Transient Properties

	// Public Methods
	
}


