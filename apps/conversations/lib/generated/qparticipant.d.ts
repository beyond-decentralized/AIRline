import { IQDateField, IQNumberField, IQStringField } from '@airport/tarmaq-query';
import { AirEntityGraph, AirEntityEId, AirEntityEUpdateColumns, AirEntityEUpdateProperties, AirEntityESelect, QAirEntityQId, QAirEntityQRelation, QAirEntity } from '@airport/holding-pattern';
import { ConversationGraph, ConversationEOptionalId, ConversationESelect, QConversationQRelation } from './qconversation';
import { UserAccountGraph, UserAccountEOptionalId, UserAccountESelect, QUserAccountQRelation } from '@airport/travel-document-checkpoint';
import { IParticipant } from './participant';
/**
 * SELECT - All fields and relations (optional).
 */
export interface ParticipantESelect extends AirEntityESelect, ParticipantEOptionalId {
    conversation?: ConversationESelect;
    moderator?: UserAccountESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface ParticipantEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface ParticipantEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface ParticipantEUpdateProperties extends AirEntityEUpdateProperties {
    conversation?: ConversationEOptionalId;
    moderator?: UserAccountEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface ParticipantGraph extends ParticipantEOptionalId, AirEntityGraph {
    conversation?: ConversationGraph;
    moderator?: UserAccountGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface ParticipantEUpdateColumns extends AirEntityEUpdateColumns {
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
export interface ParticipantECreateProperties extends Partial<ParticipantEId>, ParticipantEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface ParticipantECreateColumns extends ParticipantEId, ParticipantEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
export interface QParticipant<IQE extends QParticipant = any> extends QAirEntity<IQE | QParticipant> {
    conversation: QConversationQRelation;
    moderator: QUserAccountQRelation;
}
export interface QParticipantQId extends QAirEntityQId {
}
export interface QParticipantQRelation extends QAirEntityQRelation<IParticipant, QParticipant>, QParticipantQId {
}
//# sourceMappingURL=qparticipant.d.ts.map