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
	GoalConversationGraph,
	GoalConversationEId,
	GoalConversationEOptionalId,
	GoalConversationEUpdateProperties,
	GoalConversationESelect,
	QGoalConversation,
	QGoalConversationQId,
	QGoalConversationQRelation,
} from './QGoalConversation';
import {
	IGoalConversation,
} from '../../entity/goal/IGoalConversation';
import {
	GoalTaskGraph,
	GoalTaskEId,
	GoalTaskEOptionalId,
	GoalTaskEUpdateProperties,
	GoalTaskESelect,
	QGoalTask,
	QGoalTaskQId,
	QGoalTaskQRelation,
} from './QGoalTask';
import {
	IGoalTask,
} from '../../entity/goal/IGoalTask';
import {
	IGoal,
} from '../../entity/goal/IGoal';


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface GoalESelect
    extends AirEntityESelect, GoalEOptionalId {
	// Non-Id Properties
	name?: string | IQStringField;
	description?: string | IQStringField;
	status?: number | IQNumberField;
	importance?: number | IQNumberField;
	urgency?: number | IQNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	topic?: TopicESelect;
	goalConversations?: GoalConversationESelect;
	goalTasks?: GoalTaskESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface GoalEId
    extends AirEntityEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface GoalEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface GoalEUpdateProperties
	extends AirEntityEUpdateProperties {
	// Non-Id Properties
	name?: string | IQStringField;
	description?: string | IQStringField;
	status?: number | IQNumberField;
	importance?: number | IQNumberField;
	urgency?: number | IQNumberField;

	// Non-Id Relations - _localIds only & no OneToMany's
	topic?: TopicEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface GoalGraph
	extends GoalEOptionalId, AirEntityGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties
	name?: string | IQStringField;
	description?: string | IQStringField;
	status?: number | IQNumberField;
	importance?: number | IQNumberField;
	urgency?: number | IQNumberField;

	// Relations
	topic?: TopicGraph;
	goalConversations?: GoalConversationGraph[];
	goalTasks?: GoalTaskGraph[];

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface GoalEUpdateColumns
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
	IMPORTANCE?: number | IQNumberField;
	URGENCY?: number | IQNumberField;
	TOPIC_RID_1?: number | IQNumberField;
	TOPIC_AID_1?: number | IQNumberField;
	TOPIC_ARID_1?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface GoalECreateProperties
extends Partial<GoalEId>, GoalEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface GoalECreateColumns
extends GoalEId, GoalEUpdateColumns {
}


///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
export interface QGoal<IQE extends QGoal = any> extends QAirEntity<IQE | QGoal>
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	name: IQStringField;
	description: IQStringField;
	status: IQNumberField;
	importance: IQNumberField;
	urgency: IQNumberField;

	// Non-Id Relations
	topic: QTopicQRelation;
	goalConversations: IQAirEntityOneToManyRelation<IGoalConversation, QGoalConversation>;
	goalTasks: IQAirEntityOneToManyRelation<IGoalTask, QGoalTask>;

}

// Entity Id Interface
export interface QGoalQId extends QAirEntityQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QGoalQRelation
	extends QAirEntityQRelation<IGoal, QGoal>, QGoalQId {
}