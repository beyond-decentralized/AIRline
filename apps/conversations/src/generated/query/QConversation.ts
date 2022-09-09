import {
	IQEntityInternal,
	IEntityIdProperties,
	IEntityCascadeGraph,
	IEntityUpdateColumns,
	IEntityUpdateProperties,
	IEntitySelectProperties,
	IQBooleanField,
	IQDateField,
	IQNumberField,
	IQOneToManyRelation,
	IQStringField,
	IQUntypedField,
	IQEntity,
	IQRelation,
	IQAirEntityOneToManyRelation,
	IQAirEntityRelation,
	RawDelete,
	RawUpdate,
} from '@airport/tarmaq-query';
import {
	AirEntityGraph,
	AirEntityEId,
	AirEntityEUpdateColumns,
	AirEntityEUpdateProperties,
	AirEntityESelect,
	QAirEntityQId,
	QAirEntityQRelation,
	QAirEntity,
} from '@airport/holding-pattern';
import {
	TopicGraph,
	TopicEId,
	TopicEOptionalId,
	TopicEUpdateProperties,
	TopicESelect,
	QTopic,
	QTopicQId,
	QTopicQRelation,
	ITopic,
} from '@airline/topics';
import {
	ParticipantGraph,
	ParticipantEId,
	ParticipantEOptionalId,
	ParticipantEUpdateProperties,
	ParticipantESelect,
	QParticipant,
	QParticipantQId,
	QParticipantQRelation,
} from './QParticipant';
import {
	IParticipant,
} from '../entity/IParticipant';
import {
	ModeratorGraph,
	ModeratorEId,
	ModeratorEOptionalId,
	ModeratorEUpdateProperties,
	ModeratorESelect,
	QModerator,
	QModeratorQId,
	QModeratorQRelation,
} from './QModerator';
import {
	IModerator,
} from '../entity/IModerator';
import {
	CommentGraph,
	CommentEId,
	CommentEOptionalId,
	CommentEUpdateProperties,
	CommentESelect,
	QComment,
	QCommentQId,
	QCommentQRelation,
} from './QComment';
import {
	IComment,
} from '../entity/IComment';
import {
	IConversation,
} from '../entity/IConversation';


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface ConversationESelect
    extends AirEntityESelect, ConversationEOptionalId {
	// Non-Id Properties
	name?: string | IQStringField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	topic?: TopicESelect;
	participants?: ParticipantESelect;
	moderators?: ModeratorESelect;
	comments?: CommentESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface ConversationEId
    extends AirEntityEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface ConversationEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface ConversationEUpdateProperties
	extends AirEntityEUpdateProperties {
	// Non-Id Properties
	name?: string | IQStringField;

	// Non-Id Relations - _localIds only & no OneToMany's
	topic?: TopicEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface ConversationGraph
	extends ConversationEOptionalId, AirEntityGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties
	name?: string | IQStringField;

	// Relations
	topic?: TopicGraph;
	participants?: ParticipantGraph[];
	moderators?: ModeratorGraph[];
	comments?: CommentGraph[];

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface ConversationEUpdateColumns
	extends AirEntityEUpdateColumns {
	// Non-Id Columns
	AGE_SUITABILITY?: number | IQNumberField;
	CREATED_AT?: Date | IQDateField;
	SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
	ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
	ORIGINAL_REPOSITORY_LID?: number | IQNumberField;
	ORIGINAL_ACTOR_LID?: number | IQNumberField;
	NAME?: string | IQStringField;
	TOPIC_RID_1?: number | IQNumberField;
	TOPIC_AID_1?: number | IQNumberField;
	TOPIC_ARID_1?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface ConversationECreateProperties
extends Partial<ConversationEId>, ConversationEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface ConversationECreateColumns
extends ConversationEId, ConversationEUpdateColumns {
}


///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
export interface QConversation<IQE extends QConversation = any> extends QAirEntity<IQE | QConversation>
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	name: IQStringField;

	// Non-Id Relations
	topic: QTopicQRelation;
	participants: IQAirEntityOneToManyRelation<IParticipant, QParticipant>;
	moderators: IQAirEntityOneToManyRelation<IModerator, QModerator>;
	comments: IQAirEntityOneToManyRelation<IComment, QComment>;

}

// Entity Id Interface
export interface QConversationQId extends QAirEntityQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QConversationQRelation
	extends QAirEntityQRelation<IConversation, QConversation>, QConversationQId {
}