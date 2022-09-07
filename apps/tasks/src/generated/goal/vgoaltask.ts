import {
	IEntityVDescriptor,
	IVBooleanField,
	IVDateField,
	IVNumberField,
	IVStringField,
	IVUntypedField,
} from '@airbridge/validate';
import {
	AirEntityVDescriptor,
} from '@airport/holding-pattern/dist/app/bundle';
import {
	GoalVDescriptor,
} from './vgoal';
import {
	Goal,
} from '../../ddl/goal/Goal';
import {
	TaskVDescriptor,
} from '../task/vtask';
import {
	Task,
} from '../../ddl/task/Task';
import {
	IGoalTask,
} from './goaltask';



////////////////////
//  API INTERFACE //
////////////////////

export interface GoalTaskVDescriptor<T>
    extends AirEntityVDescriptor<T> {
	// Id Properties
	
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	goal?: GoalVDescriptor<Goal>
	task?: TaskVDescriptor<Task>

}


