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
	TaskGraph,
	TaskEId,
	TaskEOptionalId,
	TaskEUpdateProperties,
	TaskESelect,
	QTask,
	QTaskQId,
	QTaskQRelation,
} from './qtask';
import {
	ITask,
} from './task';
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
	ITaskConversation,
} from './taskconversation';


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface TaskConversationESelect
    extends AirEntityESelect, TaskConversationEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	task?: TaskESelect;
	conversation?: ConversationESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface TaskConversationEId
    extends AirEntityEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface TaskConversationEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface TaskConversationEUpdateProperties
	extends AirEntityEUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - _localIds only & no OneToMany's
	task?: TaskEOptionalId;
	conversation?: ConversationEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface TaskConversationGraph
	extends TaskConversationEOptionalId, AirEntityGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties

	// Relations
	task?: TaskGraph;
	conversation?: ConversationGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface TaskConversationEUpdateColumns
	extends AirEntityEUpdateColumns {
	// Non-Id Columns
	AGE_SUITABILITY?: number | IQNumberField;
	CREATED_AT?: Date | IQDateField;
	SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
	ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
	ORIGINAL_REPOSITORY_LID?: number | IQNumberField;
	ORIGINAL_ACTOR_LID?: number | IQNumberField;
	TASKS_RID_1?: number | IQNumberField;
	TASKS_AID_1?: number | IQNumberField;
	TASKS_ARID_1?: number | IQNumberField;
	CONVERSATIONS_RID_1?: number | IQNumberField;
	CONVERSATIONS_AID_1?: number | IQNumberField;
	CONVERSATIONS_ARID_1?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface TaskConversationECreateProperties
extends Partial<TaskConversationEId>, TaskConversationEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface TaskConversationECreateColumns
extends TaskConversationEId, TaskConversationEUpdateColumns {
}


///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
export interface QTaskConversation<IQE extends QTaskConversation = any> extends QAirEntity<IQE | QTaskConversation>
{
	// Id Fields

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	task: QTaskQRelation;
	conversation: QConversationQRelation;

}

// Entity Id Interface
export interface QTaskConversationQId extends QAirEntityQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QTaskConversationQRelation
	extends QAirEntityQRelation<ITaskConversation, QTaskConversation>, QTaskConversationQId {
}