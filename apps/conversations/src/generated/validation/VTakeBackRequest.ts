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
	ITakeBackRequest,
} from '../entity/ITakeBackRequest';



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


