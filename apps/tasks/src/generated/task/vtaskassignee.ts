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
} from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import {
	TaskVDescriptor,
} from './vtask';
import {
	Task,
} from '../../ddl/task/Task';
import {
	UserAccountVDescriptor,
	UserAccount,
} from '@airport/travel-document-checkpoint/lib/to_be_generated/runtime-index';
import {
	ITaskAssignee,
} from './taskassignee';



////////////////////
//  API INTERFACE //
////////////////////

export interface TaskAssigneeVDescriptor<T>
    extends AirEntityVDescriptor<T> {
	// Id Properties
	
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	task?: TaskVDescriptor<Task>
	userAccount?: UserAccountVDescriptor<UserAccount>

}


