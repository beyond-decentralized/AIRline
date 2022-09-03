import { IQDateField, IQNumberField, IQStringField } from '@airport/tarmaq-query';
import { AirEntityGraph, AirEntityEId, AirEntityEUpdateColumns, AirEntityEUpdateProperties, AirEntityESelect, QAirEntityQId, QAirEntityQRelation, QAirEntity } from '@airport/holding-pattern';
import { TaskGraph, TaskEOptionalId, TaskESelect, QTaskQRelation } from './qtask';
import { UserAccountGraph, UserAccountEOptionalId, UserAccountESelect, QUserAccountQRelation } from '@airport/travel-document-checkpoint';
import { ITaskAssignee } from './taskassignee';
/**
 * SELECT - All fields and relations (optional).
 */
export interface TaskAssigneeESelect extends AirEntityESelect, TaskAssigneeEOptionalId {
    task?: TaskESelect;
    userAccount?: UserAccountESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface TaskAssigneeEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface TaskAssigneeEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface TaskAssigneeEUpdateProperties extends AirEntityEUpdateProperties {
    task?: TaskEOptionalId;
    userAccount?: UserAccountEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface TaskAssigneeGraph extends TaskAssigneeEOptionalId, AirEntityGraph {
    task?: TaskGraph;
    userAccount?: UserAccountGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface TaskAssigneeEUpdateColumns extends AirEntityEUpdateColumns {
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
export interface TaskAssigneeECreateProperties extends Partial<TaskAssigneeEId>, TaskAssigneeEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface TaskAssigneeECreateColumns extends TaskAssigneeEId, TaskAssigneeEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
export interface QTaskAssignee<IQE extends QTaskAssignee = any> extends QAirEntity<IQE | QTaskAssignee> {
    task: QTaskQRelation;
    userAccount: QUserAccountQRelation;
}
export interface QTaskAssigneeQId extends QAirEntityQId {
}
export interface QTaskAssigneeQRelation extends QAirEntityQRelation<ITaskAssignee, QTaskAssignee>, QTaskAssigneeQId {
}
//# sourceMappingURL=qtaskassignee.d.ts.map