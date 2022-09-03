import { IQDateField, IQNumberField } from '@airport/tarmaq-query';
import { AirEntityGraph, AirEntityEId, AirEntityEUpdateColumns, AirEntityEUpdateProperties, AirEntityESelect, QAirEntityQId, QAirEntityQRelation, QAirEntity } from '@airport/holding-pattern';
import { TaskGraph, TaskEOptionalId, TaskESelect, QTaskQRelation } from './qtask';
import { ISubtask } from './subtask';
/**
 * SELECT - All fields and relations (optional).
 */
export interface SubtaskESelect extends AirEntityESelect, SubtaskEOptionalId {
    supertask?: TaskESelect;
    subtask?: TaskESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface SubtaskEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface SubtaskEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface SubtaskEUpdateProperties extends AirEntityEUpdateProperties {
    supertask?: TaskEOptionalId;
    subtask?: TaskEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface SubtaskGraph extends SubtaskEOptionalId, AirEntityGraph {
    supertask?: TaskGraph;
    subtask?: TaskGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface SubtaskEUpdateColumns extends AirEntityEUpdateColumns {
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
export interface SubtaskECreateProperties extends Partial<SubtaskEId>, SubtaskEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface SubtaskECreateColumns extends SubtaskEId, SubtaskEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
export interface QSubtask<IQE extends QSubtask = any> extends QAirEntity<IQE | QSubtask> {
    supertask: QTaskQRelation;
    subtask: QTaskQRelation;
}
export interface QSubtaskQId extends QAirEntityQId {
}
export interface QSubtaskQRelation extends QAirEntityQRelation<ISubtask, QSubtask>, QSubtaskQId {
}
//# sourceMappingURL=qsubtask.d.ts.map