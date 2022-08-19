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
	ISubtask,
} from './subtask';


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface SubtaskESelect
    extends AirEntityESelect, SubtaskEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	supertask?: TaskESelect;
	subtask?: TaskESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface SubtaskEId
    extends AirEntityEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface SubtaskEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface SubtaskEUpdateProperties
	extends AirEntityEUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - _localIds only & no OneToMany's
	supertask?: TaskEOptionalId;
	subtask?: TaskEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface SubtaskGraph
	extends SubtaskEOptionalId, AirEntityGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties

	// Relations
	supertask?: TaskGraph;
	subtask?: TaskGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface SubtaskEUpdateColumns
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
	TASKS_RID_2?: number | IQNumberField;
	TASKS_AID_2?: number | IQNumberField;
	TASKS_ARID_2?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface SubtaskECreateProperties
extends Partial<SubtaskEId>, SubtaskEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface SubtaskECreateColumns
extends SubtaskEId, SubtaskEUpdateColumns {
}


///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
export interface QSubtask<IQE extends QSubtask = any> extends QAirEntity<IQE | QSubtask>
{
	// Id Fields

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	supertask: QTaskQRelation;
	subtask: QTaskQRelation;

}

// Entity Id Interface
export interface QSubtaskQId extends QAirEntityQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QSubtaskQRelation
	extends QAirEntityQRelation<ISubtask, QSubtask>, QSubtaskQId {
}