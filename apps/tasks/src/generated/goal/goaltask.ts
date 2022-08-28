import {
	IAirEntity,
} from '@airport/holding-pattern';
import {
	IGoal,
} from './goal';
import {
	ITask,
} from '../task/task';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IGoalTask extends IAirEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	goal?: IGoal;
	task?: ITask;

	// Transient Properties

	// Public Methods
	
}


