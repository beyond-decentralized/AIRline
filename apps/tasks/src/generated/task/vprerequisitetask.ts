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
	TaskVDescriptor,
} from './vtask';
import {
	Task,
} from '../../ddl/task/Task';
import {
	IPrerequisiteTask,
} from './prerequisitetask';



////////////////////
//  API INTERFACE //
////////////////////

export interface PrerequisiteTaskVDescriptor<T>
    extends AirEntityVDescriptor<T> {
	// Id Properties
	
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	prerequisiteTask?: TaskVDescriptor<Task>
	requiringTask?: TaskVDescriptor<Task>

}


