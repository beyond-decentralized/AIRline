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
} from '@airport/holding-pattern';
import {
	CommentVDescriptor,
	Comment,
} from '@airline/conversations';
import {
	TaskVDescriptor,
} from './VTask';
import {
	Task,
} from '../../../ddl/task/Task';
import {
	ITaskReferenceInComment,
} from '../../entity/task/ITaskReferenceInComment';



////////////////////
//  API INTERFACE //
////////////////////

export interface TaskReferenceInCommentVDescriptor<T>
    extends AirEntityVDescriptor<T> {
	// Id Properties
	
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	comment?: CommentVDescriptor<Comment>
	task?: TaskVDescriptor<Task>

}


