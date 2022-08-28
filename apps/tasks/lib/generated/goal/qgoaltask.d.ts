import { IQDateField, IQNumberField } from '@airport/tarmaq-query';
import { AirEntityGraph, AirEntityEId, AirEntityEUpdateColumns, AirEntityEUpdateProperties, AirEntityESelect, QAirEntityQId, QAirEntityQRelation, QAirEntity } from '@airport/holding-pattern';
import { GoalGraph, GoalEOptionalId, GoalESelect, QGoalQRelation } from './qgoal';
import { TaskGraph, TaskEOptionalId, TaskESelect, QTaskQRelation } from '../task/qtask';
import { IGoalTask } from './goaltask';
/**
 * SELECT - All fields and relations (optional).
 */
export interface GoalTaskESelect extends AirEntityESelect, GoalTaskEOptionalId {
    goal?: GoalESelect;
    task?: TaskESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface GoalTaskEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface GoalTaskEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface GoalTaskEUpdateProperties extends AirEntityEUpdateProperties {
    goal?: GoalEOptionalId;
    task?: TaskEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface GoalTaskGraph extends GoalTaskEOptionalId, AirEntityGraph {
    goal?: GoalGraph;
    task?: TaskGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface GoalTaskEUpdateColumns extends AirEntityEUpdateColumns {
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
export interface GoalTaskECreateProperties extends Partial<GoalTaskEId>, GoalTaskEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface GoalTaskECreateColumns extends GoalTaskEId, GoalTaskEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
export interface QGoalTask<IQE extends QGoalTask = any> extends QAirEntity<IQE | QGoalTask> {
    goal: QGoalQRelation;
    task: QTaskQRelation;
}
export interface QGoalTaskQId extends QAirEntityQId {
}
export interface QGoalTaskQRelation extends QAirEntityQRelation<IGoalTask, QGoalTask>, QGoalTaskQId {
}
//# sourceMappingURL=qgoaltask.d.ts.map