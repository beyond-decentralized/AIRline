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
	IParticipant,
} from './participant';


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface ParticipantESelect
    extends AirEntityESelect, ParticipantEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	conversation?: ConversationESelect;
	moderator?: UserAccountESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface ParticipantEId
    extends AirEntityEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface ParticipantEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface ParticipantEUpdateProperties
	extends AirEntityEUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - _localIds only & no OneToMany's
	conversation?: ConversationEOptionalId;
	moderator?: UserAccountEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface ParticipantGraph
	extends ParticipantEOptionalId, AirEntityGraph {
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
export interface ParticipantEUpdateColumns
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
export interface ParticipantECreateProperties
extends Partial<ParticipantEId>, ParticipantEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface ParticipantECreateColumns
extends ParticipantEId, ParticipantEUpdateColumns {
}


///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
export interface QParticipant<IQE extends QParticipant = any> extends QAirEntity<IQE | QParticipant>
{
	// Id Fields

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	conversation: QConversationQRelation;
	moderator: QUserAccountQRelation;

}

// Entity Id Interface
export interface QParticipantQId extends QAirEntityQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QParticipantQRelation
	extends QAirEntityQRelation<IParticipant, QParticipant>, QParticipantQId {
}