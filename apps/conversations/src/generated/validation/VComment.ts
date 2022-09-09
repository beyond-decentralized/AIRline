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
	ConversationVDescriptor,
} from './VConversation';
import {
	Conversation,
} from '../../ddl/Conversation';
import {
	Comment,
} from '../../ddl/Comment';
import {
	ModeratorVDescriptor,
} from './VModerator';
import {
	Moderator,
} from '../../ddl/Moderator';
import {
	CommentReferenceVDescriptor,
} from './VCommentReference';
import {
	CommentReference,
} from '../../ddl/CommentReference';
import {
	TakeBackRequestVDescriptor,
} from './VTakeBackRequest';
import {
	TakeBackRequest,
} from '../../ddl/TakeBackRequest';
import {
	IComment,
} from '../entity/IComment';



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


