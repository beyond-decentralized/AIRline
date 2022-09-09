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
	GoalGraph,
	GoalEId,
	GoalEOptionalId,
	GoalEUpdateProperties,
	GoalESelect,
	QGoal,
	QGoalQId,
	QGoalQRelation,
} from './QGoal';
import {
	IGoal,
} from '../../entity/goal/IGoal';
import {
	ConversationGraph,
	ConversationEId,
	ConversationEOptionalId,
	ConversationEUpdateProperties,
	ConversationESelect,
	QConversation,
	QConversationQId,
	QConversationQRelation,
	IConversation,
} from '@airline/conversations';
import {
	IGoalConversation,
} from '../../entity/goal/IGoalConversation';


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface GoalConversationESelect
    extends AirEntityESelect, GoalConversationEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	goal?: GoalESelect;
	conversation?: ConversationESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface GoalConversationEId
    extends AirEntityEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface GoalConversationEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface GoalConversationEUpdateProperties
	extends AirEntityEUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - _localIds only & no OneToMany's
	goal?: GoalEOptionalId;
	conversation?: ConversationEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface GoalConversationGraph
	extends GoalConversationEOptionalId, AirEntityGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties

	// Relations
	goal?: GoalGraph;
	conversation?: ConversationGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface GoalConversationEUpdateColumns
	extends AirEntityEUpdateColumns {
	// Non-Id Columns
	AGE_SUITABILITY?: number | IQNumberField;
	CREATED_AT?: Date | IQDateField;
	SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
	ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
	ORIGINAL_REPOSITORY_LID?: number | IQNumberField;
	ORIGINAL_ACTOR_LID?: number | IQNumberField;
	GOALS_RID_1?: number | IQNumberField;
	GOALS_AID_1?: number | IQNumberField;
	GOALS_ARID_1?: number | IQNumberField;
	CONVERSATIONS_RID_1?: number | IQNumberField;
	CONVERSATIONS_AID_1?: number | IQNumberField;
	CONVERSATIONS_ARID_1?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface GoalConversationECreateProperties
extends Partial<GoalConversationEId>, GoalConversationEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface GoalConversationECreateColumns
extends GoalConversationEId, GoalConversationEUpdateColumns {
}


///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
export interface QGoalConversation<IQE extends QGoalConversation = any> extends QAirEntity<IQE | QGoalConversation>
{
	// Id Fields

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	goal: QGoalQRelation;
	conversation: QConversationQRelation;

}

// Entity Id Interface
export interface QGoalConversationQId extends QAirEntityQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QGoalConversationQRelation
	extends QAirEntityQRelation<IGoalConversation, QGoalConversation>, QGoalConversationQId {
}