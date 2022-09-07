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
	ISubtask,
} from './subtask';



////////////////////
//  API INTERFACE //
////////////////////

export interface SubtaskVDescriptor<T>
    extends AirEntityVDescriptor<T> {
	// Id Properties
	
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	supertask?: TaskVDescriptor<Task>
	subtask?: TaskVDescriptor<Task>

}


