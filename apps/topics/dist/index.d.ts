import { AirEntity, IAirEntity, AirEntityESelect, AirEntityEId, AirEntityEUpdateProperties, AirEntityGraph, AirEntityEUpdateColumns, QAirEntity, QAirEntityQId, QAirEntityQRelation } from '@airport/holding-pattern';
import { QApplication } from '@airport/aviation-communication';
import { DbApplication, ApplicationEntity_LocalId } from '@airport/ground-control';
import { IQStringField, IQNumberField, IQDateField, IQAirEntityOneToManyRelation } from '@airport/tarmaq-query';
import * as _airport_direction_indicator from '@airport/direction-indicator';

declare class Topic extends AirEntity {
    name: string;
    theme: Theme;
}

declare class Theme extends AirEntity {
    name: string;
    topics: Topic[];
}

interface ITheme extends IAirEntity {
    name?: string;
    topics?: ITopic[];
}

interface ITopic extends IAirEntity {
    name?: string;
    theme?: ITheme;
}

/**
 * SELECT - All fields and relations (optional).
 */
interface TopicESelect extends AirEntityESelect, TopicEOptionalId {
    name?: string | IQStringField;
    theme?: ThemeESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
interface TopicEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
interface TopicEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
interface TopicEUpdateProperties extends AirEntityEUpdateProperties {
    name?: string | IQStringField;
    theme?: ThemeEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
interface TopicGraph extends TopicEOptionalId, AirEntityGraph {
    name?: string | IQStringField;
    theme?: ThemeGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
interface TopicEUpdateColumns extends AirEntityEUpdateColumns {
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
interface TopicECreateProperties extends Partial<TopicEId>, TopicEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
interface TopicECreateColumns extends TopicEId, TopicEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
interface QTopic<IQE extends QTopic = any> extends QAirEntity<IQE | QTopic> {
    name: IQStringField;
    theme: QThemeQRelation;
}
interface QTopicQId extends QAirEntityQId {
}
interface QTopicQRelation extends QAirEntityQRelation<ITopic, QTopic>, QTopicQId {
}

/**
 * SELECT - All fields and relations (optional).
 */
interface ThemeESelect extends AirEntityESelect, ThemeEOptionalId {
    name?: string | IQStringField;
    topics?: TopicESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
interface ThemeEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
interface ThemeEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
interface ThemeEUpdateProperties extends AirEntityEUpdateProperties {
    name?: string | IQStringField;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
interface ThemeGraph extends ThemeEOptionalId, AirEntityGraph {
    name?: string | IQStringField;
    topics?: TopicGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
interface ThemeEUpdateColumns extends AirEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
    SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_LID?: number | IQNumberField;
    NAME?: string | IQStringField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
interface ThemeECreateProperties extends Partial<ThemeEId>, ThemeEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
interface ThemeECreateColumns extends ThemeEId, ThemeEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
interface QTheme<IQE extends QTheme = any> extends QAirEntity<IQE | QTheme> {
    name: IQStringField;
    topics: IQAirEntityOneToManyRelation<ITopic, QTopic>;
}
interface QThemeQId extends QAirEntityQId {
}
interface QThemeQRelation extends QAirEntityQRelation<ITheme, QTheme>, QThemeQId {
}

interface LocalQApplication extends QApplication {
    db: DbApplication;
    Theme: QTheme;
    Topic: QTopic;
}
declare const Q_APPLICATION: LocalQApplication;
declare const Q: LocalQApplication;
declare function diSet(dbEntityId: ApplicationEntity_LocalId): boolean;
declare function duoDiSet(dbEntityId: ApplicationEntity_LocalId): boolean;

declare const topics: _airport_direction_indicator.IInjectionApplication;
declare const TOPIC_API: _airport_direction_indicator.IDependencyInjectionToken<any>;
declare const THEME_API: _airport_direction_indicator.IDependencyInjectionToken<any>;

export { ITheme, ITopic, LocalQApplication, Q, QTheme, QThemeQId, QThemeQRelation, QTopic, QTopicQId, QTopicQRelation, Q_APPLICATION, THEME_API, TOPIC_API, Theme, ThemeECreateColumns, ThemeECreateProperties, ThemeEId, ThemeEOptionalId, ThemeESelect, ThemeEUpdateColumns, ThemeEUpdateProperties, ThemeGraph, Topic, TopicECreateColumns, TopicECreateProperties, TopicEId, TopicEOptionalId, TopicESelect, TopicEUpdateColumns, TopicEUpdateProperties, TopicGraph, diSet, duoDiSet, topics };
