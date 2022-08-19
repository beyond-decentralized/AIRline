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
	TopicVDescriptor,
	Topic,
} from '@airline/topics/lib/to_be_generated/runtime-index';
import {
	ParticipantVDescriptor,
} from './vparticipant';
import {
	Participant,
} from '../ddl/Participant';
import {
	ModeratorVDescriptor,
} from './vmoderator';
import {
	Moderator,
} from '../ddl/Moderator';
import {
	CommentVDescriptor,
} from './vcomment';
import {
	Comment,
} from '../ddl/Comment';
import {
	IConversation,
} from './conversation';



////////////////////
//  API INTERFACE //
////////////////////

export interface ConversationVDescriptor<T>
    extends AirEntityVDescriptor<T> {
	// Id Properties
	
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	topic?: TopicVDescriptor<Topic>
	participants?: ParticipantVDescriptor<Participant>
	moderators?: ModeratorVDescriptor<Moderator>
	comments?: CommentVDescriptor<Comment>

}


