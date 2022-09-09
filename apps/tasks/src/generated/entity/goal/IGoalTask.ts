import {
	IAirEntity,
} from '@airport/holding-pattern';
import {
	IGoal,
} from './IGoal';
import {
	ITask,
} from '../task/ITask';



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


