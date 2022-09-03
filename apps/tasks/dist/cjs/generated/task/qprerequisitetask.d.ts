import { IQDateField, IQNumberField } from '@airport/tarmaq-query';
import { AirEntityGraph, AirEntityEId, AirEntityEUpdateColumns, AirEntityEUpdateProperties, AirEntityESelect, QAirEntityQId, QAirEntityQRelation, QAirEntity } from '@airport/holding-pattern';
import { TaskGraph, TaskEOptionalId, TaskESelect, QTaskQRelation } from './qtask';
import { IPrerequisiteTask } from './prerequisitetask';
/**
 * SELECT - All fields and relations (optional).
 */
export interface PrerequisiteTaskESelect extends AirEntityESelect, PrerequisiteTaskEOptionalId {
    prerequisiteTask?: TaskESelect;
    requiringTask?: TaskESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PrerequisiteTaskEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface PrerequisiteTaskEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PrerequisiteTaskEUpdateProperties extends AirEntityEUpdateProperties {
    prerequisiteTask?: TaskEOptionalId;
    requiringTask?: TaskEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PrerequisiteTaskGraph extends PrerequisiteTaskEOptionalId, AirEntityGraph {
    prerequisiteTask?: TaskGraph;
    requiringTask?: TaskGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface PrerequisiteTaskEUpdateColumns extends AirEntityEUpdateColumns {
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
export interface PrerequisiteTaskECreateProperties extends Partial<PrerequisiteTaskEId>, PrerequisiteTaskEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PrerequisiteTaskECreateColumns extends PrerequisiteTaskEId, PrerequisiteTaskEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
export interface QPrerequisiteTask<IQE extends QPrerequisiteTask = any> extends QAirEntity<IQE | QPrerequisiteTask> {
    prerequisiteTask: QTaskQRelation;
    requiringTask: QTaskQRelation;
}
export interface QPrerequisiteTaskQId extends QAirEntityQId {
}
export interface QPrerequisiteTaskQRelation extends QAirEntityQRelation<IPrerequisiteTask, QPrerequisiteTask>, QPrerequisiteTaskQId {
}
//# sourceMappingURL=qprerequisitetask.d.ts.map