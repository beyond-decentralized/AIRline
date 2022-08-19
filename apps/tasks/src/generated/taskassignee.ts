import {
	IAirEntity,
} from '@airport/holding-pattern';
import {
	ITask,
} from './task';
import {
	IUserAccount,
} from '@airport/travel-document-checkpoint';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface ITaskAssignee extends IAirEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	task?: ITask;
	userAccount?: IUserAccount;

	// Transient Properties

	// Public Methods
	
}


