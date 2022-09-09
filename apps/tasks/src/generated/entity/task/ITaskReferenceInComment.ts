import {
	IAirEntity,
} from '@airport/holding-pattern';
import {
	IComment,
} from '@airline/conversations';
import {
	ITask,
} from './ITask';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface ITaskReferenceInComment extends IAirEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	comment?: IComment;
	task?: ITask;

	// Transient Properties

	// Public Methods
	
}


