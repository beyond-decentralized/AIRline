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
	ConversationGraph,
	ConversationEId,
	ConversationEOptionalId,
	ConversationEUpdateProperties,
	ConversationESelect,
	QConversation,
	QConversationQId,
	QConversationQRelation,
} from './QConversation';
import {
	IConversation,
} from '../entity/IConversation';
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
	CommentReferenceGraph,
	CommentReferenceEId,
	CommentReferenceEOptionalId,
	CommentReferenceEUpdateProperties,
	CommentReferenceESelect,
	QCommentReference,
	QCommentReferenceQId,
	QCommentReferenceQRelation,
} from './QCommentReference';
import {
	ICommentReference,
} from '../entity/ICommentReference';
import {
	TakeBackRequestGraph,
	TakeBackRequestEId,
	TakeBackRequestEOptionalId,
	TakeBackRequestEUpdateProperties,
	TakeBackRequestESelect,
	QTakeBackRequest,
	QTakeBackRequestQId,
	QTakeBackRequestQRelation,
} from './QTakeBackRequest';
import {
	ITakeBackRequest,
} from '../entity/ITakeBackRequest';
import {
	IComment,
} from '../entity/IComment';


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface CommentESelect
    extends AirEntityESelect, CommentEOptionalId {
	// Non-Id Properties
	text?: string | IQStringField;
	takenBack?: boolean | IQBooleanField;
	takenBackDttm?: Date | IQDateField;
	censored?: boolean | IQBooleanField;
	sensoredDttm?: Date | IQDateField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	conversation?: ConversationESelect;
	source?: CommentESelect;
	censoredBy?: ModeratorESelect;
	replies?: CommentESelect;
	references?: CommentReferenceESelect;
	referredFrom?: CommentESelect;
	madeTakeBackRequest?: TakeBackRequestESelect;
	takeBackRequests?: TakeBackRequestESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface CommentEId
    extends AirEntityEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface CommentEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface CommentEUpdateProperties
	extends AirEntityEUpdateProperties {
	// Non-Id Properties
	text?: string | IQStringField;
	takenBack?: boolean | IQBooleanField;
	takenBackDttm?: Date | IQDateField;
	censored?: boolean | IQBooleanField;
	sensoredDttm?: Date | IQDateField;

	// Non-Id Relations - _localIds only & no OneToMany's
	conversation?: ConversationEOptionalId;
	source?: CommentEOptionalId;
	censoredBy?: ModeratorEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface CommentGraph
	extends CommentEOptionalId, AirEntityGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties
	text?: string | IQStringField;
	takenBack?: boolean | IQBooleanField;
	takenBackDttm?: Date | IQDateField;
	censored?: boolean | IQBooleanField;
	sensoredDttm?: Date | IQDateField;

	// Relations
	conversation?: ConversationGraph;
	source?: CommentGraph;
	censoredBy?: ModeratorGraph;
	replies?: CommentGraph[];
	references?: CommentReferenceGraph[];
	referredFrom?: CommentGraph[];
	madeTakeBackRequest?: TakeBackRequestGraph[];
	takeBackRequests?: TakeBackRequestGraph[];

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface CommentEUpdateColumns
	extends AirEntityEUpdateColumns {
	// Non-Id Columns
	AGE_SUITABILITY?: number | IQNumberField;
	CREATED_AT?: Date | IQDateField;
	SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
	ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
	ORIGINAL_REPOSITORY_LID?: number | IQNumberField;
	ORIGINAL_ACTOR_LID?: number | IQNumberField;
	TEXT?: string | IQStringField;
	TAKEN_BACK?: boolean | IQBooleanField;
	TAKEN_BACK_DTTM?: Date | IQDateField;
	SENSORED?: boolean | IQBooleanField;
	SENSORED_DTTM?: Date | IQDateField;
	CONVERSATIONS_RID_1?: number | IQNumberField;
	CONVERSATIONS_AID_1?: number | IQNumberField;
	CONVERSATIONS_ARID_1?: number | IQNumberField;
	COMMENTS_RID_1?: number | IQNumberField;
	COMMENTS_AID_1?: number | IQNumberField;
	COMMENTS_ARID_1?: number | IQNumberField;
	MODERATORS_RID_1?: number | IQNumberField;
	MODERATORS_AID_1?: number | IQNumberField;
	MODERATORS_ARID_1?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface CommentECreateProperties
extends Partial<CommentEId>, CommentEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface CommentECreateColumns
extends CommentEId, CommentEUpdateColumns {
}


///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
export interface QComment<IQE extends QComment = any> extends QAirEntity<IQE | QComment>
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	text: IQStringField;
	takenBack: IQBooleanField;
	takenBackDttm: IQDateField;
	censored: IQBooleanField;
	sensoredDttm: IQDateField;

	// Non-Id Relations
	conversation: QConversationQRelation;
	source: QCommentQRelation;
	censoredBy: QModeratorQRelation;
	replies: IQAirEntityOneToManyRelation<IComment, QComment>;
	references: IQAirEntityOneToManyRelation<ICommentReference, QCommentReference>;
	referredFrom: IQAirEntityOneToManyRelation<IComment, QComment>;
	madeTakeBackRequest: IQAirEntityOneToManyRelation<ITakeBackRequest, QTakeBackRequest>;
	takeBackRequests: IQAirEntityOneToManyRelation<ITakeBackRequest, QTakeBackRequest>;

}

// Entity Id Interface
export interface QCommentQId extends QAirEntityQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QCommentQRelation
	extends QAirEntityQRelation<IComment, QComment>, QCommentQId {
}