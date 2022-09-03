import { IQDateField, IQNumberField, IQStringField, IQAirEntityOneToManyRelation } from '@airport/tarmaq-query';
import { AirEntityGraph, AirEntityEId, AirEntityEUpdateColumns, AirEntityEUpdateProperties, AirEntityESelect, QAirEntityQId, QAirEntityQRelation, QAirEntity } from '@airport/holding-pattern';
import { TopicGraph, TopicEOptionalId, TopicESelect, QTopicQRelation } from '@airline/topics';
import { GoalTaskGraph, GoalTaskESelect, QGoalTask } from '../goal/qgoaltask';
import { IGoalTask } from '../goal/goaltask';
import { TaskConversationGraph, TaskConversationESelect, QTaskConversation } from './qtaskconversation';
import { ITaskConversation } from './taskconversation';
import { TaskAssigneeGraph, TaskAssigneeESelect, QTaskAssignee } from './qtaskassignee';
import { ITaskAssignee } from './taskassignee';
import { SubtaskGraph, SubtaskESelect, QSubtask } from './qsubtask';
import { ISubtask } from './subtask';
import { PrerequisiteTaskGraph, PrerequisiteTaskESelect, QPrerequisiteTask } from './qprerequisitetask';
import { IPrerequisiteTask } from './prerequisitetask';
import { ITask } from './task';
/**
 * SELECT - All fields and relations (optional).
 */
export interface TaskESelect extends AirEntityESelect, TaskEOptionalId {
    name?: string | IQStringField;
    description?: string | IQStringField;
    status?: number | IQNumberField;
    durationUnit?: number | IQNumberField;
    durationLength?: number | IQNumberField;
    startDate?: Date | IQDateField;
    dueDate?: Date | IQDateField;
    importance?: number | IQNumberField;
    urgency?: number | IQNumberField;
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
export interface TaskEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface TaskEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface TaskEUpdateProperties extends AirEntityEUpdateProperties {
    name?: string | IQStringField;
    description?: string | IQStringField;
    status?: number | IQNumberField;
    durationUnit?: number | IQNumberField;
    durationLength?: number | IQNumberField;
    startDate?: Date | IQDateField;
    dueDate?: Date | IQDateField;
    importance?: number | IQNumberField;
    urgency?: number | IQNumberField;
    topic?: TopicEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface TaskGraph extends TaskEOptionalId, AirEntityGraph {
    name?: string | IQStringField;
    description?: string | IQStringField;
    status?: number | IQNumberField;
    durationUnit?: number | IQNumberField;
    durationLength?: number | IQNumberField;
    startDate?: Date | IQDateField;
    dueDate?: Date | IQDateField;
    importance?: number | IQNumberField;
    urgency?: number | IQNumberField;
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
export interface TaskEUpdateColumns extends AirEntityEUpdateColumns {
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
export interface TaskECreateProperties extends Partial<TaskEId>, TaskEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface TaskECreateColumns extends TaskEId, TaskEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
export interface QTask<IQE extends QTask = any> extends QAirEntity<IQE | QTask> {
    name: IQStringField;
    description: IQStringField;
    status: IQNumberField;
    durationUnit: IQNumberField;
    durationLength: IQNumberField;
    startDate: IQDateField;
    dueDate: IQDateField;
    importance: IQNumberField;
    urgency: IQNumberField;
    topic: QTopicQRelation;
    goalTasks: IQAirEntityOneToManyRelation<IGoalTask, QGoalTask>;
    taskConversations: IQAirEntityOneToManyRelation<ITaskConversation, QTaskConversation>;
    assignees: IQAirEntityOneToManyRelation<ITaskAssignee, QTaskAssignee>;
    superasks: IQAirEntityOneToManyRelation<ISubtask, QSubtask>;
    subtasks: IQAirEntityOneToManyRelation<ISubtask, QSubtask>;
    prerequisiteTasks: IQAirEntityOneToManyRelation<IPrerequisiteTask, QPrerequisiteTask>;
    requiringTasks: IQAirEntityOneToManyRelation<ISubtask, QSubtask>;
}
export interface QTaskQId extends QAirEntityQId {
}
export interface QTaskQRelation extends QAirEntityQRelation<ITask, QTask>, QTaskQId {
}
//# sourceMappingURL=qtask.d.ts.map