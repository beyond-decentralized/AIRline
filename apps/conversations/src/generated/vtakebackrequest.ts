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
} from './vcomment';
import {
	Comment,
} from '../ddl/Comment';
import {
	ITakeBackRequest,
} from './takebackrequest';



////////////////////
//  API INTERFACE //
////////////////////

export interface TakeBackRequestVDescriptor<T>
    extends AirEntityVDescriptor<T> {
	// Id Properties
	
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	forComment?: CommentVDescriptor<Comment>
	viaComment?: CommentVDescriptor<Comment>

}


