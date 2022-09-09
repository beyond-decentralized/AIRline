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
} from './VComment';
import {
	Comment,
} from '../../ddl/Comment';
import {
	ICommentReference,
} from '../entity/ICommentReference';



////////////////////
//  API INTERFACE //
////////////////////

export interface CommentReferenceVDescriptor<T>
    extends AirEntityVDescriptor<T> {
	// Id Properties
	
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	reference?: CommentVDescriptor<Comment>
	referredFrom?: CommentVDescriptor<Comment>

}


