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
	CommentVDescriptor,
	Comment,
} from '@airline/conversations/lib/to_be_generated/runtime-index';
import {
	TaskVDescriptor,
} from './vtask';
import {
	Task,
} from '../ddl/Task';
import {
	ITaskReferenceInComment,
} from './taskreferenceincomment';



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


