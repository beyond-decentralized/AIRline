import { IQDateField, IQNumberField } from '@airport/tarmaq-query';
import { AirEntityGraph, AirEntityEId, AirEntityEUpdateColumns, AirEntityEUpdateProperties, AirEntityESelect, QAirEntityQId, QAirEntityQRelation, QAirEntity } from '@airport/holding-pattern';
import { TaskGraph, TaskEOptionalId, TaskESelect, QTaskQRelation } from './qtask';
import { ConversationGraph, ConversationEOptionalId, ConversationESelect, QConversationQRelation } from '@airline/conversations';
import { ITaskConversation } from './taskconversation';
/**
 * SELECT - All fields and relations (optional).
 */
export interface TaskConversationESelect extends AirEntityESelect, TaskConversationEOptionalId {
    task?: TaskESelect;
    conversation?: ConversationESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface TaskConversationEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface TaskConversationEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface TaskConversationEUpdateProperties extends AirEntityEUpdateProperties {
    task?: TaskEOptionalId;
    conversation?: ConversationEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface TaskConversationGraph extends TaskConversationEOptionalId, AirEntityGraph {
    task?: TaskGraph;
    conversation?: ConversationGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface TaskConversationEUpdateColumns extends AirEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
    SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_LID?: number | IQNumberField;
    TASKS_RID_1?: number | IQNumberField;
    TASKS_AID_1?: number | IQNumberField;
    TASKS_ARID_1?: number | IQNumberField;
    CONVERSATIONS_RID_1?: number | IQNumberField;
    CONVERSATIONS_AID_1?: number | IQNumberField;
    CONVERSATIONS_ARID_1?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface TaskConversationECreateProperties extends Partial<TaskConversationEId>, TaskConversationEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface TaskConversationECreateColumns extends TaskConversationEId, TaskConversationEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
export interface QTaskConversation<IQE extends QTaskConversation = any> extends QAirEntity<IQE | QTaskConversation> {
    task: QTaskQRelation;
    conversation: QConversationQRelation;
}
export interface QTaskConversationQId extends QAirEntityQId {
}
export interface QTaskConversationQRelation extends QAirEntityQRelation<ITaskConversation, QTaskConversation>, QTaskConversationQId {
}
//# sourceMappingURL=qtaskconversation.d.ts.map