import { IQBooleanField, IQDateField, IQNumberField, IQStringField, IQAirEntityOneToManyRelation } from '@airport/tarmaq-query';
import { AirEntityGraph, AirEntityEId, AirEntityEUpdateColumns, AirEntityEUpdateProperties, AirEntityESelect, QAirEntityQId, QAirEntityQRelation, QAirEntity } from '@airport/holding-pattern';
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
    state?: number | IQNumberField;
    durationUnit?: number | IQNumberField;
    durationLength?: number | IQNumberField;
    startDate?: Date | IQDateField;
    dueDate?: Date | IQDateField;
    isGoal?: boolean | IQBooleanField;
    importance?: number | IQNumberField;
    urgency?: number | IQNumberField;
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
    state?: number | IQNumberField;
    durationUnit?: number | IQNumberField;
    durationLength?: number | IQNumberField;
    startDate?: Date | IQDateField;
    dueDate?: Date | IQDateField;
    isGoal?: boolean | IQBooleanField;
    importance?: number | IQNumberField;
    urgency?: number | IQNumberField;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface TaskGraph extends TaskEOptionalId, AirEntityGraph {
    name?: string | IQStringField;
    description?: string | IQStringField;
    state?: number | IQNumberField;
    durationUnit?: number | IQNumberField;
    durationLength?: number | IQNumberField;
    startDate?: Date | IQDateField;
    dueDate?: Date | IQDateField;
    isGoal?: boolean | IQBooleanField;
    importance?: number | IQNumberField;
    urgency?: number | IQNumberField;
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
    IS_GOAL?: boolean | IQBooleanField;
    IMPORTANCE?: number | IQNumberField;
    URGENCY?: number | IQNumberField;
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
    state: IQNumberField;
    durationUnit: IQNumberField;
    durationLength: IQNumberField;
    startDate: IQDateField;
    dueDate: IQDateField;
    isGoal: IQBooleanField;
    importance: IQNumberField;
    urgency: IQNumberField;
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