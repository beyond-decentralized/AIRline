import { IQDateField, IQNumberField } from '@airport/tarmaq-query';
import { AirEntityGraph, AirEntityEId, AirEntityEUpdateColumns, AirEntityEUpdateProperties, AirEntityESelect, QAirEntityQId, QAirEntityQRelation, QAirEntity } from '@airport/holding-pattern';
import { CommentGraph, CommentEOptionalId, CommentESelect, QCommentQRelation } from './qcomment';
import { ITakeBackRequest } from './takebackrequest';
/**
 * SELECT - All fields and relations (optional).
 */
export interface TakeBackRequestESelect extends AirEntityESelect, TakeBackRequestEOptionalId {
    forComment?: CommentESelect;
    viaComment?: CommentESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface TakeBackRequestEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface TakeBackRequestEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface TakeBackRequestEUpdateProperties extends AirEntityEUpdateProperties {
    forComment?: CommentEOptionalId;
    viaComment?: CommentEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface TakeBackRequestGraph extends TakeBackRequestEOptionalId, AirEntityGraph {
    forComment?: CommentGraph;
    viaComment?: CommentGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface TakeBackRequestEUpdateColumns extends AirEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
    SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_LID?: number | IQNumberField;
    COMMENTS_RID_1?: number | IQNumberField;
    COMMENTS_AID_1?: number | IQNumberField;
    COMMENTS_ARID_1?: number | IQNumberField;
    COMMENTS_RID_2?: number | IQNumberField;
    COMMENTS_AID_2?: number | IQNumberField;
    COMMENTS_ARID_2?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface TakeBackRequestECreateProperties extends Partial<TakeBackRequestEId>, TakeBackRequestEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface TakeBackRequestECreateColumns extends TakeBackRequestEId, TakeBackRequestEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
export interface QTakeBackRequest<IQE extends QTakeBackRequest = any> extends QAirEntity<IQE | QTakeBackRequest> {
    forComment: QCommentQRelation;
    viaComment: QCommentQRelation;
}
export interface QTakeBackRequestQId extends QAirEntityQId {
}
export interface QTakeBackRequestQRelation extends QAirEntityQRelation<ITakeBackRequest, QTakeBackRequest>, QTakeBackRequestQId {
}
//# sourceMappingURL=qtakebackrequest.d.ts.map