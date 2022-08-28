import {
	IAirEntity,
} from '@airport/holding-pattern';
import {
	ITask,
} from './task';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface ISubtask extends IAirEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	supertask?: ITask;
	subtask?: ITask;

	// Transient Properties

	// Public Methods
	
}


