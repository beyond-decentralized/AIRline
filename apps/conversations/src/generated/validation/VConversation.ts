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
	TopicVDescriptor,
	Topic,
} from '@airline/topics';
import {
	ParticipantVDescriptor,
} from './VParticipant';
import {
	Participant,
} from '../../ddl/Participant';
import {
	ModeratorVDescriptor,
} from './VModerator';
import {
	Moderator,
} from '../../ddl/Moderator';
import {
	CommentVDescriptor,
} from './VComment';
import {
	Comment,
} from '../../ddl/Comment';
import {
	IConversation,
} from '../entity/IConversation';



////////////////////
//  API INTERFACE //
////////////////////

export interface ConversationVDescriptor<T>
    extends AirEntityVDescriptor<T> {
	// Id Properties
	
	// Non-Id Properties
	name?: string | IVStringField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	topic?: TopicVDescriptor<Topic>
	participants?: ParticipantVDescriptor<Participant>
	moderators?: ModeratorVDescriptor<Moderator>
	comments?: CommentVDescriptor<Comment>

}


