import { IQDateField, IQNumberField, IQStringField, IQAirEntityOneToManyRelation } from '@airport/tarmaq-query';
import { AirEntityGraph, AirEntityEId, AirEntityEUpdateColumns, AirEntityEUpdateProperties, AirEntityESelect, QAirEntityQId, QAirEntityQRelation, QAirEntity } from '@airport/holding-pattern';
import { TopicGraph, TopicEOptionalId, TopicESelect, QTopicQRelation } from '@airline/topics';
import { GoalConversationGraph, GoalConversationESelect, QGoalConversation } from './qgoalconversation';
import { IGoalConversation } from './goalconversation';
import { GoalTaskGraph, GoalTaskESelect, QGoalTask } from './qgoaltask';
import { IGoalTask } from './goaltask';
import { IGoal } from './goal';
/**
 * SELECT - All fields and relations (optional).
 */
export interface GoalESelect extends AirEntityESelect, GoalEOptionalId {
    name?: string | IQStringField;
    description?: string | IQStringField;
    status?: number | IQNumberField;
    importance?: number | IQNumberField;
    urgency?: number | IQNumberField;
    topic?: TopicESelect;
    goalConversations?: GoalConversationESelect;
    goalTasks?: GoalTaskESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface GoalEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface GoalEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface GoalEUpdateProperties extends AirEntityEUpdateProperties {
    name?: string | IQStringField;
    description?: string | IQStringField;
    status?: number | IQNumberField;
    importance?: number | IQNumberField;
    urgency?: number | IQNumberField;
    topic?: TopicEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface GoalGraph extends GoalEOptionalId, AirEntityGraph {
    name?: string | IQStringField;
    description?: string | IQStringField;
    status?: number | IQNumberField;
    importance?: number | IQNumberField;
    urgency?: number | IQNumberField;
    topic?: TopicGraph;
    goalConversations?: GoalConversationGraph[];
    goalTasks?: GoalTaskGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface GoalEUpdateColumns extends AirEntityEUpdateColumns {
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
export interface GoalECreateProperties extends Partial<GoalEId>, GoalEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface GoalECreateColumns extends GoalEId, GoalEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
export interface QGoal<IQE extends QGoal = any> extends QAirEntity<IQE | QGoal> {
    name: IQStringField;
    description: IQStringField;
    status: IQNumberField;
    importance: IQNumberField;
    urgency: IQNumberField;
    topic: QTopicQRelation;
    goalConversations: IQAirEntityOneToManyRelation<IGoalConversation, QGoalConversation>;
    goalTasks: IQAirEntityOneToManyRelation<IGoalTask, QGoalTask>;
}
export interface QGoalQId extends QAirEntityQId {
}
export interface QGoalQRelation extends QAirEntityQRelation<IGoal, QGoal>, QGoalQId {
}
//# sourceMappingURL=qgoal.d.ts.map