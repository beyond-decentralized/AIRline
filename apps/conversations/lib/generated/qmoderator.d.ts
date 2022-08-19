import { IQDateField, IQNumberField, IQStringField } from '@airport/tarmaq-query';
import { AirEntityGraph, AirEntityEId, AirEntityEUpdateColumns, AirEntityEUpdateProperties, AirEntityESelect, QAirEntityQId, QAirEntityQRelation, QAirEntity } from '@airport/holding-pattern';
import { ConversationGraph, ConversationEOptionalId, ConversationESelect, QConversationQRelation } from './qconversation';
import { UserAccountGraph, UserAccountEOptionalId, UserAccountESelect, QUserAccountQRelation } from '@airport/travel-document-checkpoint';
import { IModerator } from './moderator';
/**
 * SELECT - All fields and relations (optional).
 */
export interface ModeratorESelect extends AirEntityESelect, ModeratorEOptionalId {
    conversation?: ConversationESelect;
    moderator?: UserAccountESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface ModeratorEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface ModeratorEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface ModeratorEUpdateProperties extends AirEntityEUpdateProperties {
    conversation?: ConversationEOptionalId;
    moderator?: UserAccountEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface ModeratorGraph extends ModeratorEOptionalId, AirEntityGraph {
    conversation?: ConversationGraph;
    moderator?: UserAccountGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface ModeratorEUpdateColumns extends AirEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
    SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_LID?: number | IQNumberField;
    CONVERSATIONS_RID_1?: number | IQNumberField;
    CONVERSATIONS_AID_1?: number | IQNumberField;
    CONVERSATIONS_ARID_1?: number | IQNumberField;
    USER_ACCOUNT_GUID?: string | IQStringField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface ModeratorECreateProperties extends Partial<ModeratorEId>, ModeratorEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface ModeratorECreateColumns extends ModeratorEId, ModeratorEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
export interface QModerator<IQE extends QModerator = any> extends QAirEntity<IQE | QModerator> {
    conversation: QConversationQRelation;
    moderator: QUserAccountQRelation;
}
export interface QModeratorQId extends QAirEntityQId {
}
export interface QModeratorQRelation extends QAirEntityQRelation<IModerator, QModerator>, QModeratorQId {
}
//# sourceMappingURL=qmoderator.d.ts.map