import { IQDateField, IQNumberField, IQStringField } from '@airport/tarmaq-query';
import { AirEntityGraph, AirEntityEId, AirEntityEUpdateColumns, AirEntityEUpdateProperties, AirEntityESelect, QAirEntityQId, QAirEntityQRelation, QAirEntity } from '@airport/holding-pattern';
import { ThemeGraph, ThemeEOptionalId, ThemeESelect, QThemeQRelation } from './qtheme';
import { ITopic } from './topic';
/**
 * SELECT - All fields and relations (optional).
 */
export interface TopicESelect extends AirEntityESelect, TopicEOptionalId {
    name?: string | IQStringField;
    theme?: ThemeESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface TopicEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface TopicEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface TopicEUpdateProperties extends AirEntityEUpdateProperties {
    name?: string | IQStringField;
    theme?: ThemeEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface TopicGraph extends TopicEOptionalId, AirEntityGraph {
    name?: string | IQStringField;
    theme?: ThemeGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface TopicEUpdateColumns extends AirEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
    SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_LID?: number | IQNumberField;
    NAME?: string | IQStringField;
    THEME_RID_1?: number | IQNumberField;
    THEME_AID_1?: number | IQNumberField;
    THEME_ARID_1?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface TopicECreateProperties extends Partial<TopicEId>, TopicEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface TopicECreateColumns extends TopicEId, TopicEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
export interface QTopic<IQE extends QTopic = any> extends QAirEntity<IQE | QTopic> {
    name: IQStringField;
    theme: QThemeQRelation;
}
export interface QTopicQId extends QAirEntityQId {
}
export interface QTopicQRelation extends QAirEntityQRelation<ITopic, QTopic>, QTopicQId {
}
//# sourceMappingURL=qtopic.d.ts.map