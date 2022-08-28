import {
	IAirEntity,
} from '@airport/holding-pattern';
import {
	ITask,
} from './task';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPrerequisiteTask extends IAirEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	prerequisiteTask?: ITask;
	requiringTask?: ITask;

	// Transient Properties

	// Public Methods
	
}


