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
} from './qgoal';
import {
	IGoal,
} from './goal';
import {
	TaskGraph,
	TaskEId,
	TaskEOptionalId,
	TaskEUpdateProperties,
	TaskESelect,
	QTask,
	QTaskQId,
	QTaskQRelation,
} from '../task/qtask';
import {
	ITask,
} from '../task/task';
import {
	IGoalTask,
} from './goaltask';


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface GoalTaskESelect
    extends AirEntityESelect, GoalTaskEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	goal?: GoalESelect;
	task?: TaskESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface GoalTaskEId
    extends AirEntityEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface GoalTaskEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface GoalTaskEUpdateProperties
	extends AirEntityEUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - _localIds only & no OneToMany's
	goal?: GoalEOptionalId;
	task?: TaskEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface GoalTaskGraph
	extends GoalTaskEOptionalId, AirEntityGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties

	// Relations
	goal?: GoalGraph;
	task?: TaskGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface GoalTaskEUpdateColumns
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
	TASKS_RID_1?: number | IQNumberField;
	TASKS_AID_1?: number | IQNumberField;
	TASKS_ARID_1?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface GoalTaskECreateProperties
extends Partial<GoalTaskEId>, GoalTaskEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface GoalTaskECreateColumns
extends GoalTaskEId, GoalTaskEUpdateColumns {
}


///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
export interface QGoalTask<IQE extends QGoalTask = any> extends QAirEntity<IQE | QGoalTask>
{
	// Id Fields

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	goal: QGoalQRelation;
	task: QTaskQRelation;

}

// Entity Id Interface
export interface QGoalTaskQId extends QAirEntityQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QGoalTaskQRelation
	extends QAirEntityQRelation<IGoalTask, QGoalTask>, QGoalTaskQId {
}