import { IQDateField, IQNumberField } from '@airport/tarmaq-query';
import { AirEntityGraph, AirEntityEId, AirEntityEUpdateColumns, AirEntityEUpdateProperties, AirEntityESelect, QAirEntityQId, QAirEntityQRelation, QAirEntity } from '@airport/holding-pattern';
import { GoalGraph, GoalEOptionalId, GoalESelect, QGoalQRelation } from './qgoal';
import { ConversationGraph, ConversationEOptionalId, ConversationESelect, QConversationQRelation } from '@airline/conversations';
import { IGoalConversation } from './goalconversation';
/**
 * SELECT - All fields and relations (optional).
 */
export interface GoalConversationESelect extends AirEntityESelect, GoalConversationEOptionalId {
    goal?: GoalESelect;
    conversation?: ConversationESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface GoalConversationEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface GoalConversationEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface GoalConversationEUpdateProperties extends AirEntityEUpdateProperties {
    goal?: GoalEOptionalId;
    conversation?: ConversationEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface GoalConversationGraph extends GoalConversationEOptionalId, AirEntityGraph {
    goal?: GoalGraph;
    conversation?: ConversationGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface GoalConversationEUpdateColumns extends AirEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
    SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_LID?: number | IQNumberField;
    GOALS_RID_1?: number | IQNumberField;
    GOALS_AID_1?: number | IQNumberField;
    GOALS_ARID_1?: number | IQNumberField;
    CONVERSATIONS_RID_1?: number | IQNumberField;
    CONVERSATIONS_AID_1?: number | IQNumberField;
    CONVERSATIONS_ARID_1?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface GoalConversationECreateProperties extends Partial<GoalConversationEId>, GoalConversationEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface GoalConversationECreateColumns extends GoalConversationEId, GoalConversationEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
export interface QGoalConversation<IQE extends QGoalConversation = any> extends QAirEntity<IQE | QGoalConversation> {
    goal: QGoalQRelation;
    conversation: QConversationQRelation;
}
export interface QGoalConversationQId extends QAirEntityQId {
}
export interface QGoalConversationQRelation extends QAirEntityQRelation<IGoalConversation, QGoalConversation>, QGoalConversationQId {
}
//# sourceMappingURL=qgoalconversation.d.ts.map