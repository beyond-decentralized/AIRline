import {
	IAirEntity,
} from '@airport/holding-pattern';
import {
	ITask,
} from './task';
import {
	IConversation,
} from '@airline/conversations';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface ITaskConversation extends IAirEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	task?: ITask;
	conversation?: IConversation;

	// Transient Properties

	// Public Methods
	
}


