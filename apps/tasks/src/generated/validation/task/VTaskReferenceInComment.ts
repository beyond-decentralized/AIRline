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
	CommentVDescriptor,
	Comment,
} from '@airline/conversations/dist/app/bundle';
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


