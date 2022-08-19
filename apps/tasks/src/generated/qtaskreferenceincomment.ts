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
	CommentGraph,
	CommentEId,
	CommentEOptionalId,
	CommentEUpdateProperties,
	CommentESelect,
	QComment,
	QCommentQId,
	QCommentQRelation,
	IComment,
} from '@airline/conversations';
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
	ITaskReferenceInComment,
} from './taskreferenceincomment';


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface TaskReferenceInCommentESelect
    extends AirEntityESelect, TaskReferenceInCommentEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	comment?: CommentESelect;
	task?: TaskESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface TaskReferenceInCommentEId
    extends AirEntityEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface TaskReferenceInCommentEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface TaskReferenceInCommentEUpdateProperties
	extends AirEntityEUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - _localIds only & no OneToMany's
	comment?: CommentEOptionalId;
	task?: TaskEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface TaskReferenceInCommentGraph
	extends TaskReferenceInCommentEOptionalId, AirEntityGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties

	// Relations
	comment?: CommentGraph;
	task?: TaskGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface TaskReferenceInCommentEUpdateColumns
	extends AirEntityEUpdateColumns {
	// Non-Id Columns
	AGE_SUITABILITY?: number | IQNumberField;
	CREATED_AT?: Date | IQDateField;
	SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
	ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
	ORIGINAL_REPOSITORY_LID?: number | IQNumberField;
	ORIGINAL_ACTOR_LID?: number | IQNumberField;
	COMMENTS_RID_1?: number | IQNumberField;
	COMMENTS_AID_1?: number | IQNumberField;
	COMMENTS_ARID_1?: number | IQNumberField;
	TASKS_RID_1?: number | IQNumberField;
	TASKS_AID_1?: number | IQNumberField;
	TASKS_ARID_1?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface TaskReferenceInCommentECreateProperties
extends Partial<TaskReferenceInCommentEId>, TaskReferenceInCommentEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface TaskReferenceInCommentECreateColumns
extends TaskReferenceInCommentEId, TaskReferenceInCommentEUpdateColumns {
}


///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
export interface QTaskReferenceInComment<IQE extends QTaskReferenceInComment = any> extends QAirEntity<IQE | QTaskReferenceInComment>
{
	// Id Fields

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	comment: QCommentQRelation;
	task: QTaskQRelation;

}

// Entity Id Interface
export interface QTaskReferenceInCommentQId extends QAirEntityQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QTaskReferenceInCommentQRelation
	extends QAirEntityQRelation<ITaskReferenceInComment, QTaskReferenceInComment>, QTaskReferenceInCommentQId {
}