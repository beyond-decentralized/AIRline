import { IQDateField, IQNumberField, IQStringField, IQAirEntityOneToManyRelation } from '@airport/tarmaq-query';
import { AirEntityGraph, AirEntityEId, AirEntityEUpdateColumns, AirEntityEUpdateProperties, AirEntityESelect, QAirEntityQId, QAirEntityQRelation, QAirEntity } from '@airport/holding-pattern';
import { TopicGraph, TopicEOptionalId, TopicESelect, QTopicQRelation } from '@airline/topics';
import { ParticipantGraph, ParticipantESelect, QParticipant } from './qparticipant';
import { IParticipant } from './participant';
import { ModeratorGraph, ModeratorESelect, QModerator } from './qmoderator';
import { IModerator } from './moderator';
import { CommentGraph, CommentESelect, QComment } from './qcomment';
import { IComment } from './comment';
import { IConversation } from './conversation';
/**
 * SELECT - All fields and relations (optional).
 */
export interface ConversationESelect extends AirEntityESelect, ConversationEOptionalId {
    name?: string | IQStringField;
    topic?: TopicESelect;
    participants?: ParticipantESelect;
    moderators?: ModeratorESelect;
    comments?: CommentESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface ConversationEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface ConversationEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface ConversationEUpdateProperties extends AirEntityEUpdateProperties {
    name?: string | IQStringField;
    topic?: TopicEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface ConversationGraph extends ConversationEOptionalId, AirEntityGraph {
    name?: string | IQStringField;
    topic?: TopicGraph;
    participants?: ParticipantGraph[];
    moderators?: ModeratorGraph[];
    comments?: CommentGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface ConversationEUpdateColumns extends AirEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
    SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_LID?: number | IQNumberField;
    NAME?: string | IQStringField;
    TOPIC_RID_1?: number | IQNumberField;
    TOPIC_AID_1?: number | IQNumberField;
    TOPIC_ARID_1?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface ConversationECreateProperties extends Partial<ConversationEId>, ConversationEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface ConversationECreateColumns extends ConversationEId, ConversationEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
export interface QConversation<IQE extends QConversation = any> extends QAirEntity<IQE | QConversation> {
    name: IQStringField;
    topic: QTopicQRelation;
    participants: IQAirEntityOneToManyRelation<IParticipant, QParticipant>;
    moderators: IQAirEntityOneToManyRelation<IModerator, QModerator>;
    comments: IQAirEntityOneToManyRelation<IComment, QComment>;
}
export interface QConversationQId extends QAirEntityQId {
}
export interface QConversationQRelation extends QAirEntityQRelation<IConversation, QConversation>, QConversationQId {
}
//# sourceMappingURL=qconversation.d.ts.map