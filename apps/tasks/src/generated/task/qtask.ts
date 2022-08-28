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
	TopicGraph,
	TopicEId,
	TopicEOptionalId,
	TopicEUpdateProperties,
	TopicESelect,
	QTopic,
	QTopicQId,
	QTopicQRelation,
	ITopic,
} from '@airline/topics';
import {
	GoalTaskGraph,
	GoalTaskEId,
	GoalTaskEOptionalId,
	GoalTaskEUpdateProperties,
	GoalTaskESelect,
	QGoalTask,
	QGoalTaskQId,
	QGoalTaskQRelation,
} from '../goal/qgoaltask';
import {
	IGoalTask,
} from '../goal/goaltask';
import {
	TaskConversationGraph,
	TaskConversationEId,
	TaskConversationEOptionalId,
	TaskConversationEUpdateProperties,
	TaskConversationESelect,
	QTaskConversation,
	QTaskConversationQId,
	QTaskConversationQRelation,
} from './qtaskconversation';
import {
	ITaskConversation,
} from './taskconversation';
import {
	TaskAssigneeGraph,
	TaskAssigneeEId,
	TaskAssigneeEOptionalId,
	TaskAssigneeEUpdateProperties,
	TaskAssigneeESelect,
	QTaskAssignee,
	QTaskAssigneeQId,
	QTaskAssigneeQRelation,
} from './qtaskassignee';
import {
	ITaskAssignee,
} from './taskassignee';
import {
	SubtaskGraph,
	SubtaskEId,
	SubtaskEOptionalId,
	SubtaskEUpdateProperties,
	SubtaskESelect,
	QSubtask,
	QSubtaskQId,
	QSubtaskQRelation,
} from './qsubtask';
import {
	ISubtask,
} from './subtask';
import {
	PrerequisiteTaskGraph,
	PrerequisiteTaskEId,
	PrerequisiteTaskEOptionalId,
	PrerequisiteTaskEUpdateProperties,
	PrerequisiteTaskESelect,
	QPrerequisiteTask,
	QPrerequisiteTaskQId,
	QPrerequisiteTaskQRelation,
} from './qprerequisitetask';
import {
	IPrerequisiteTask,
} from './prerequisitetask';
import {
	ITask,
} from './task';


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface TaskESelect
    extends AirEntityESelect, TaskEOptionalId {
	// Non-Id Properties
	name?: string | IQStringField;
	description?: string | IQStringField;
	status?: number | IQNumberField;
	durationUnit?: number | IQNumberField;
	durationLength?: number | IQNumberField;
	startDate?: Date | IQDateField;
	dueDate?: Date | IQDateField;
	importance?: number | IQNumberField;
	urgency?: number | IQNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	topic?: TopicESelect;
	goalTasks?: GoalTaskESelect;
	taskConversations?: TaskConversationESelect;
	assignees?: TaskAssigneeESelect;
	superasks?: SubtaskESelect;
	subtasks?: SubtaskESelect;
	prerequisiteTasks?: PrerequisiteTaskESelect;
	requiringTasks?: SubtaskESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface TaskEId
    extends AirEntityEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface TaskEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface TaskEUpdateProperties
	extends AirEntityEUpdateProperties {
	// Non-Id Properties
	name?: string | IQStringField;
	description?: string | IQStringField;
	status?: number | IQNumberField;
	durationUnit?: number | IQNumberField;
	durationLength?: number | IQNumberField;
	startDate?: Date | IQDateField;
	dueDate?: Date | IQDateField;
	importance?: number | IQNumberField;
	urgency?: number | IQNumberField;

	// Non-Id Relations - _localIds only & no OneToMany's
	topic?: TopicEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface TaskGraph
	extends TaskEOptionalId, AirEntityGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties
	name?: string | IQStringField;
	description?: string | IQStringField;
	status?: number | IQNumberField;
	durationUnit?: number | IQNumberField;
	durationLength?: number | IQNumberField;
	startDate?: Date | IQDateField;
	dueDate?: Date | IQDateField;
	importance?: number | IQNumberField;
	urgency?: number | IQNumberField;

	// Relations
	topic?: TopicGraph;
	goalTasks?: GoalTaskGraph[];
	taskConversations?: TaskConversationGraph[];
	assignees?: TaskAssigneeGraph[];
	superasks?: SubtaskGraph[];
	subtasks?: SubtaskGraph[];
	prerequisiteTasks?: PrerequisiteTaskGraph[];
	requiringTasks?: SubtaskGraph[];

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface TaskEUpdateColumns
	extends AirEntityEUpdateColumns {
	// Non-Id Columns
	AGE_SUITABILITY?: number | IQNumberField;
	CREATED_AT?: Date | IQDateField;
	SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
	ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
	ORIGINAL_REPOSITORY_LID?: number | IQNumberField;
	ORIGINAL_ACTOR_LID?: number | IQNumberField;
	NAME?: string | IQStringField;
	DESCRIPTION?: string | IQStringField;
	STATUS?: number | IQNumberField;
	DURATION_UNIT?: number | IQNumberField;
	DURATION_LENGTH?: number | IQNumberField;
	START_DATE?: Date | IQDateField;
	DUE_DATE?: Date | IQDateField;
	IMPORTANCE?: number | IQNumberField;
	URGENCY?: number | IQNumberField;
	TOPIC_RID_1?: number | IQNumberField;
	TOPIC_AID_1?: number | IQNumberField;
	TOPIC_ARID_1?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface TaskECreateProperties
extends Partial<TaskEId>, TaskEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface TaskECreateColumns
extends TaskEId, TaskEUpdateColumns {
}


///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
export interface QTask<IQE extends QTask = any> extends QAirEntity<IQE | QTask>
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	name: IQStringField;
	description: IQStringField;
	status: IQNumberField;
	durationUnit: IQNumberField;
	durationLength: IQNumberField;
	startDate: IQDateField;
	dueDate: IQDateField;
	importance: IQNumberField;
	urgency: IQNumberField;

	// Non-Id Relations
	topic: QTopicQRelation;
	goalTasks: IQAirEntityOneToManyRelation<IGoalTask, QGoalTask>;
	taskConversations: IQAirEntityOneToManyRelation<ITaskConversation, QTaskConversation>;
	assignees: IQAirEntityOneToManyRelation<ITaskAssignee, QTaskAssignee>;
	superasks: IQAirEntityOneToManyRelation<ISubtask, QSubtask>;
	subtasks: IQAirEntityOneToManyRelation<ISubtask, QSubtask>;
	prerequisiteTasks: IQAirEntityOneToManyRelation<IPrerequisiteTask, QPrerequisiteTask>;
	requiringTasks: IQAirEntityOneToManyRelation<ISubtask, QSubtask>;

}

// Entity Id Interface
export interface QTaskQId extends QAirEntityQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QTaskQRelation
	extends QAirEntityQRelation<ITask, QTask>, QTaskQId {
}