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
} from './QTask';
import {
	ITask,
} from '../../entity/task/ITask';
import {
	IPrerequisiteTask,
} from '../../entity/task/IPrerequisiteTask';


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PrerequisiteTaskESelect
    extends AirEntityESelect, PrerequisiteTaskEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	prerequisiteTask?: TaskESelect;
	requiringTask?: TaskESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PrerequisiteTaskEId
    extends AirEntityEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PrerequisiteTaskEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PrerequisiteTaskEUpdateProperties
	extends AirEntityEUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - _localIds only & no OneToMany's
	prerequisiteTask?: TaskEOptionalId;
	requiringTask?: TaskEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PrerequisiteTaskGraph
	extends PrerequisiteTaskEOptionalId, AirEntityGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties

	// Relations
	prerequisiteTask?: TaskGraph;
	requiringTask?: TaskGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PrerequisiteTaskEUpdateColumns
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
export interface PrerequisiteTaskECreateProperties
extends Partial<PrerequisiteTaskEId>, PrerequisiteTaskEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PrerequisiteTaskECreateColumns
extends PrerequisiteTaskEId, PrerequisiteTaskEUpdateColumns {
}


///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
export interface QPrerequisiteTask<IQE extends QPrerequisiteTask = any> extends QAirEntity<IQE | QPrerequisiteTask>
{
	// Id Fields

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	prerequisiteTask: QTaskQRelation;
	requiringTask: QTaskQRelation;

}

// Entity Id Interface
export interface QPrerequisiteTaskQId extends QAirEntityQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QPrerequisiteTaskQRelation
	extends QAirEntityQRelation<IPrerequisiteTask, QPrerequisiteTask>, QPrerequisiteTaskQId {
}