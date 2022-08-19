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
	ITaskAssignee,
} from './taskassignee';


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface TaskAssigneeESelect
    extends AirEntityESelect, TaskAssigneeEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	task?: TaskESelect;
	userAccount?: UserAccountESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface TaskAssigneeEId
    extends AirEntityEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface TaskAssigneeEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface TaskAssigneeEUpdateProperties
	extends AirEntityEUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - _localIds only & no OneToMany's
	task?: TaskEOptionalId;
	userAccount?: UserAccountEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface TaskAssigneeGraph
	extends TaskAssigneeEOptionalId, AirEntityGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties

	// Relations
	task?: TaskGraph;
	userAccount?: UserAccountGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface TaskAssigneeEUpdateColumns
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
	ASSIGNED_TO_GUID?: string | IQStringField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface TaskAssigneeECreateProperties
extends Partial<TaskAssigneeEId>, TaskAssigneeEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface TaskAssigneeECreateColumns
extends TaskAssigneeEId, TaskAssigneeEUpdateColumns {
}


///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
export interface QTaskAssignee<IQE extends QTaskAssignee = any> extends QAirEntity<IQE | QTaskAssignee>
{
	// Id Fields

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	task: QTaskQRelation;
	userAccount: QUserAccountQRelation;

}

// Entity Id Interface
export interface QTaskAssigneeQId extends QAirEntityQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QTaskAssigneeQRelation
	extends QAirEntityQRelation<ITaskAssignee, QTaskAssignee>, QTaskAssigneeQId {
}