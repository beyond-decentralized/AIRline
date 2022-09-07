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
	ConversationVDescriptor,
} from './vconversation';
import {
	Conversation,
} from '../ddl/Conversation';
import {
	Comment,
} from '../ddl/Comment';
import {
	ModeratorVDescriptor,
} from './vmoderator';
import {
	Moderator,
} from '../ddl/Moderator';
import {
	CommentReferenceVDescriptor,
} from './vcommentreference';
import {
	CommentReference,
} from '../ddl/CommentReference';
import {
	TakeBackRequestVDescriptor,
} from './vtakebackrequest';
import {
	TakeBackRequest,
} from '../ddl/TakeBackRequest';
import {
	IComment,
} from './comment';



////////////////////
//  API INTERFACE //
////////////////////

export interface CommentVDescriptor<T>
    extends AirEntityVDescriptor<T> {
	// Id Properties
	
	// Non-Id Properties
	text?: string | IVStringField;
	takenBack?: boolean | IVBooleanField;
	takenBackDttm?: Date | IVDateField;
	censored?: boolean | IVBooleanField;
	sensoredDttm?: Date | IVDateField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	conversation?: ConversationVDescriptor<Conversation>
	source?: CommentVDescriptor<Comment>
	censoredBy?: ModeratorVDescriptor<Moderator>
	replies?: CommentVDescriptor<Comment>
	references?: CommentReferenceVDescriptor<CommentReference>
	referredFrom?: CommentVDescriptor<Comment>
	madeTakeBackRequest?: TakeBackRequestVDescriptor<TakeBackRequest>
	takeBackRequests?: TakeBackRequestVDescriptor<TakeBackRequest>

}


