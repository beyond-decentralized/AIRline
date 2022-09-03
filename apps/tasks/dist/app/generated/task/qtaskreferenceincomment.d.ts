import { IQDateField, IQNumberField } from '@airport/tarmaq-query';
import { AirEntityGraph, AirEntityEId, AirEntityEUpdateColumns, AirEntityEUpdateProperties, AirEntityESelect, QAirEntityQId, QAirEntityQRelation, QAirEntity } from '@airport/holding-pattern';
import { CommentGraph, CommentEOptionalId, CommentESelect, QCommentQRelation } from '@airline/conversations';
import { TaskGraph, TaskEOptionalId, TaskESelect, QTaskQRelation } from './qtask';
import { ITaskReferenceInComment } from './taskreferenceincomment';
/**
 * SELECT - All fields and relations (optional).
 */
export interface TaskReferenceInCommentESelect extends AirEntityESelect, TaskReferenceInCommentEOptionalId {
    comment?: CommentESelect;
    task?: TaskESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface TaskReferenceInCommentEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface TaskReferenceInCommentEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface TaskReferenceInCommentEUpdateProperties extends AirEntityEUpdateProperties {
    comment?: CommentEOptionalId;
    task?: TaskEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface TaskReferenceInCommentGraph extends TaskReferenceInCommentEOptionalId, AirEntityGraph {
    comment?: CommentGraph;
    task?: TaskGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface TaskReferenceInCommentEUpdateColumns extends AirEntityEUpdateColumns {
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
export interface TaskReferenceInCommentECreateProperties extends Partial<TaskReferenceInCommentEId>, TaskReferenceInCommentEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface TaskReferenceInCommentECreateColumns extends TaskReferenceInCommentEId, TaskReferenceInCommentEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
export interface QTaskReferenceInComment<IQE extends QTaskReferenceInComment = any> extends QAirEntity<IQE | QTaskReferenceInComment> {
    comment: QCommentQRelation;
    task: QTaskQRelation;
}
export interface QTaskReferenceInCommentQId extends QAirEntityQId {
}
export interface QTaskReferenceInCommentQRelation extends QAirEntityQRelation<ITaskReferenceInComment, QTaskReferenceInComment>, QTaskReferenceInCommentQId {
}
//# sourceMappingURL=qtaskreferenceincomment.d.ts.map