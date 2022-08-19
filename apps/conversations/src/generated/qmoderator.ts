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
} from './qconversation';
import {
	IConversation,
} from './conversation';
import {
	UserAccountGraph,
	UserAccountEId,
	UserAccountEOptionalId,
	UserAccountEUpdateProperties,
	UserAccountESelect,
	QUserAccount,
	QUserAccountQId,
	QUserAccountQRelation,
	IUserAccount,
} from '@airport/travel-document-checkpoint';
import {
	IModerator,
} from './moderator';


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface ModeratorESelect
    extends AirEntityESelect, ModeratorEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	conversation?: ConversationESelect;
	moderator?: UserAccountESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface ModeratorEId
    extends AirEntityEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface ModeratorEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface ModeratorEUpdateProperties
	extends AirEntityEUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - _localIds only & no OneToMany's
	conversation?: ConversationEOptionalId;
	moderator?: UserAccountEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface ModeratorGraph
	extends ModeratorEOptionalId, AirEntityGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties

	// Relations
	conversation?: ConversationGraph;
	moderator?: UserAccountGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface ModeratorEUpdateColumns
	extends AirEntityEUpdateColumns {
	// Non-Id Columns
	AGE_SUITABILITY?: number | IQNumberField;
	CREATED_AT?: Date | IQDateField;
	SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
	ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
	ORIGINAL_REPOSITORY_LID?: number | IQNumberField;
	ORIGINAL_ACTOR_LID?: number | IQNumberField;
	CONVERSATIONS_RID_1?: number | IQNumberField;
	CONVERSATIONS_AID_1?: number | IQNumberField;
	CONVERSATIONS_ARID_1?: number | IQNumberField;
	USER_ACCOUNT_GUID?: string | IQStringField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface ModeratorECreateProperties
extends Partial<ModeratorEId>, ModeratorEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface ModeratorECreateColumns
extends ModeratorEId, ModeratorEUpdateColumns {
}


///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
export interface QModerator<IQE extends QModerator = any> extends QAirEntity<IQE | QModerator>
{
	// Id Fields

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	conversation: QConversationQRelation;
	moderator: QUserAccountQRelation;

}

// Entity Id Interface
export interface QModeratorQId extends QAirEntityQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QModeratorQRelation
	extends QAirEntityQRelation<IModerator, QModerator>, QModeratorQId {
}