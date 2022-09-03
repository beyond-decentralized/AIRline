import { IQDateField, IQNumberField } from '@airport/tarmaq-query';
import { AirEntityGraph, AirEntityEId, AirEntityEUpdateColumns, AirEntityEUpdateProperties, AirEntityESelect, QAirEntityQId, QAirEntityQRelation, QAirEntity } from '@airport/holding-pattern';
import { CommentGraph, CommentEOptionalId, CommentESelect, QCommentQRelation } from './qcomment';
import { ICommentReference } from './commentreference';
/**
 * SELECT - All fields and relations (optional).
 */
export interface CommentReferenceESelect extends AirEntityESelect, CommentReferenceEOptionalId {
    reference?: CommentESelect;
    referredFrom?: CommentESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface CommentReferenceEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface CommentReferenceEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface CommentReferenceEUpdateProperties extends AirEntityEUpdateProperties {
    reference?: CommentEOptionalId;
    referredFrom?: CommentEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface CommentReferenceGraph extends CommentReferenceEOptionalId, AirEntityGraph {
    reference?: CommentGraph;
    referredFrom?: CommentGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface CommentReferenceEUpdateColumns extends AirEntityEUpdateColumns {
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
export interface CommentReferenceECreateProperties extends Partial<CommentReferenceEId>, CommentReferenceEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface CommentReferenceECreateColumns extends CommentReferenceEId, CommentReferenceEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
export interface QCommentReference<IQE extends QCommentReference = any> extends QAirEntity<IQE | QCommentReference> {
    reference: QCommentQRelation;
    referredFrom: QCommentQRelation;
}
export interface QCommentReferenceQId extends QAirEntityQId {
}
export interface QCommentReferenceQRelation extends QAirEntityQRelation<ICommentReference, QCommentReference>, QCommentReferenceQId {
}
//# sourceMappingURL=qcommentreference.d.ts.map