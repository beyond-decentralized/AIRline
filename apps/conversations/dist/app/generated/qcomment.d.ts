import { IQBooleanField, IQDateField, IQNumberField, IQStringField, IQAirEntityOneToManyRelation } from '@airport/tarmaq-query';
import { AirEntityGraph, AirEntityEId, AirEntityEUpdateColumns, AirEntityEUpdateProperties, AirEntityESelect, QAirEntityQId, QAirEntityQRelation, QAirEntity } from '@airport/holding-pattern';
import { ConversationGraph, ConversationEOptionalId, ConversationESelect, QConversationQRelation } from './qconversation';
import { ModeratorGraph, ModeratorEOptionalId, ModeratorESelect, QModeratorQRelation } from './qmoderator';
import { CommentReferenceGraph, CommentReferenceESelect, QCommentReference } from './qcommentreference';
import { ICommentReference } from './commentreference';
import { TakeBackRequestGraph, TakeBackRequestESelect, QTakeBackRequest } from './qtakebackrequest';
import { ITakeBackRequest } from './takebackrequest';
import { IComment } from './comment';
/**
 * SELECT - All fields and relations (optional).
 */
export interface CommentESelect extends AirEntityESelect, CommentEOptionalId {
    text?: string | IQStringField;
    takenBack?: boolean | IQBooleanField;
    takenBackDttm?: Date | IQDateField;
    censored?: boolean | IQBooleanField;
    sensoredDttm?: Date | IQDateField;
    conversation?: ConversationESelect;
    source?: CommentESelect;
    censoredBy?: ModeratorESelect;
    replies?: CommentESelect;
    references?: CommentReferenceESelect;
    referredFrom?: CommentESelect;
    madeTakeBackRequest?: TakeBackRequestESelect;
    takeBackRequests?: TakeBackRequestESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface CommentEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface CommentEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface CommentEUpdateProperties extends AirEntityEUpdateProperties {
    text?: string | IQStringField;
    takenBack?: boolean | IQBooleanField;
    takenBackDttm?: Date | IQDateField;
    censored?: boolean | IQBooleanField;
    sensoredDttm?: Date | IQDateField;
    conversation?: ConversationEOptionalId;
    source?: CommentEOptionalId;
    censoredBy?: ModeratorEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface CommentGraph extends CommentEOptionalId, AirEntityGraph {
    text?: string | IQStringField;
    takenBack?: boolean | IQBooleanField;
    takenBackDttm?: Date | IQDateField;
    censored?: boolean | IQBooleanField;
    sensoredDttm?: Date | IQDateField;
    conversation?: ConversationGraph;
    source?: CommentGraph;
    censoredBy?: ModeratorGraph;
    replies?: CommentGraph[];
    references?: CommentReferenceGraph[];
    referredFrom?: CommentGraph[];
    madeTakeBackRequest?: TakeBackRequestGraph[];
    takeBackRequests?: TakeBackRequestGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface CommentEUpdateColumns extends AirEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
    SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_LID?: number | IQNumberField;
    TEXT?: string | IQStringField;
    TAKEN_BACK?: boolean | IQBooleanField;
    TAKEN_BACK_DTTM?: Date | IQDateField;
    SENSORED?: boolean | IQBooleanField;
    SENSORED_DTTM?: Date | IQDateField;
    CONVERSATIONS_RID_1?: number | IQNumberField;
    CONVERSATIONS_AID_1?: number | IQNumberField;
    CONVERSATIONS_ARID_1?: number | IQNumberField;
    COMMENTS_RID_1?: number | IQNumberField;
    COMMENTS_AID_1?: number | IQNumberField;
    COMMENTS_ARID_1?: number | IQNumberField;
    MODERATORS_RID_1?: number | IQNumberField;
    MODERATORS_AID_1?: number | IQNumberField;
    MODERATORS_ARID_1?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface CommentECreateProperties extends Partial<CommentEId>, CommentEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface CommentECreateColumns extends CommentEId, CommentEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
export interface QComment<IQE extends QComment = any> extends QAirEntity<IQE | QComment> {
    text: IQStringField;
    takenBack: IQBooleanField;
    takenBackDttm: IQDateField;
    censored: IQBooleanField;
    sensoredDttm: IQDateField;
    conversation: QConversationQRelation;
    source: QCommentQRelation;
    censoredBy: QModeratorQRelation;
    replies: IQAirEntityOneToManyRelation<IComment, QComment>;
    references: IQAirEntityOneToManyRelation<ICommentReference, QCommentReference>;
    referredFrom: IQAirEntityOneToManyRelation<IComment, QComment>;
    madeTakeBackRequest: IQAirEntityOneToManyRelation<ITakeBackRequest, QTakeBackRequest>;
    takeBackRequests: IQAirEntityOneToManyRelation<ITakeBackRequest, QTakeBackRequest>;
}
export interface QCommentQId extends QAirEntityQId {
}
export interface QCommentQRelation extends QAirEntityQRelation<IComment, QComment>, QCommentQId {
}
//# sourceMappingURL=qcomment.d.ts.map