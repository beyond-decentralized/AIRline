import { AirEntity, IAirEntity, AirEntityESelect, AirEntityEId, AirEntityEUpdateProperties, AirEntityGraph, AirEntityEUpdateColumns, QAirEntity, QAirEntityQId, QAirEntityQRelation } from '@airport/holding-pattern';
import { IQStringField, IQNumberField, IQDateField, IQAirEntityOneToManyRelation, IEntitySelectProperties, IEntityCreateProperties, IEntityUpdateColumns, IEntityUpdateProperties, IEntityIdProperties, IEntityCascadeGraph, IQEntity } from '@airport/tarmaq-query';
import { Dao, IDao, DaoQueryDecorators } from '@airport/tarmaq-dao';
import { ApplicationEntity_LocalId, DbApplication } from '@airport/ground-control';
import { QApplication } from '@airport/aviation-communication';
import { IVStringField, Dvo, IDvo } from '@airbridge/validate';
import { AirEntityVDescriptor } from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import { IApiRegistry } from '@airport/check-in';
import { IApplicationLoader, LastIds, JsonApplicationWithLastIds } from '@airport/apron';
import { IApplicationInitializer, ITerminalStore } from '@airport/terminal-map';
import * as _airport_direction_indicator from '@airport/direction-indicator';

declare class Theme$1 extends AirEntity {
    name: string;
    topics: Topic$1[];
}

declare class Topic$1 extends AirEntity {
    name: string;
    theme: Theme$1;
}

declare class Theme extends AirEntity {
    name: string;
    topics: Topic$1[];
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

declare class Topic extends AirEntity {
    name: string;
    theme: Theme$1;
}

declare class SQDIDao<Entity, EntitySelect extends IEntitySelectProperties, EntityCreate extends IEntityCreateProperties, EntityUpdateColumns extends IEntityUpdateColumns, EntityUpdateProperties extends IEntityUpdateProperties, ApplicationEntity_LocalId extends IEntityIdProperties, EntityCascadeGraph extends IEntityCascadeGraph, IQE extends IQEntity> extends Dao<Entity, EntitySelect, EntityCreate, EntityUpdateColumns, EntityUpdateProperties, ApplicationEntity_LocalId, EntityCascadeGraph, IQE> {
    constructor(dbEntityId: ApplicationEntity_LocalId);
}
interface IBaseThemeDao extends IDao<Theme, ThemeESelect, ThemeECreateProperties, ThemeEUpdateColumns, ThemeEUpdateProperties, ThemeEId, ThemeGraph, QTheme> {
}
declare class BaseThemeDao extends SQDIDao<Theme, ThemeESelect, ThemeECreateProperties, ThemeEUpdateColumns, ThemeEUpdateProperties, ThemeEId, ThemeGraph, QTheme> implements IBaseThemeDao {
    static Find: DaoQueryDecorators<ThemeESelect>;
    static FindOne: DaoQueryDecorators<ThemeESelect>;
    static Search: DaoQueryDecorators<ThemeESelect>;
    static SearchOne: DaoQueryDecorators<ThemeESelect>;
    static Save(config: ThemeGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
interface IBaseTopicDao extends IDao<Topic, TopicESelect, TopicECreateProperties, TopicEUpdateColumns, TopicEUpdateProperties, TopicEId, TopicGraph, QTopic> {
}
declare class BaseTopicDao extends SQDIDao<Topic, TopicESelect, TopicECreateProperties, TopicEUpdateColumns, TopicEUpdateProperties, TopicEId, TopicGraph, QTopic> implements IBaseTopicDao {
    static Find: DaoQueryDecorators<TopicESelect>;
    static FindOne: DaoQueryDecorators<TopicESelect>;
    static Search: DaoQueryDecorators<TopicESelect>;
    static SearchOne: DaoQueryDecorators<TopicESelect>;
    static Save(config: TopicGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}

declare class ThemeDao extends BaseThemeDao {
}

declare class TopicDao extends BaseTopicDao {
    findAllForTheme(theme: Theme$1 | string): Promise<Topic[]>;
}

declare const MAPPED_SUPERCLASS: any[];

interface LocalQApplication extends QApplication {
    db: DbApplication;
    Theme: QTheme;
    Topic: QTopic;
}
declare const Q_APPLICATION: LocalQApplication;
declare const Q: LocalQApplication;
declare function diSet(dbEntityId: ApplicationEntity_LocalId): boolean;
declare function duoDiSet(dbEntityId: ApplicationEntity_LocalId): boolean;

interface TopicVDescriptor<T> extends AirEntityVDescriptor<T> {
    name?: string | IVStringField;
    theme?: ThemeVDescriptor<Theme$1>;
}

interface ThemeVDescriptor<T> extends AirEntityVDescriptor<T> {
    name?: string | IVStringField;
    topics?: TopicVDescriptor<Topic$1>;
}

declare class SQDIDvo<Entity, EntityVDescriptor> extends Dvo<Entity, EntityVDescriptor> {
    constructor(dbEntityId: ApplicationEntity_LocalId);
}
interface IBaseThemeDvo extends IDvo<Theme, ThemeVDescriptor<Theme>> {
}
declare class BaseThemeDvo extends SQDIDvo<Theme, ThemeVDescriptor<Theme>> implements IBaseThemeDvo {
    static diSet(): boolean;
    constructor();
}
interface IBaseTopicDvo extends IDvo<Topic, TopicVDescriptor<Topic>> {
}
declare class BaseTopicDvo extends SQDIDvo<Topic, TopicVDescriptor<Topic>> implements IBaseTopicDvo {
    static diSet(): boolean;
    constructor();
}

declare class ApplicationLoader implements IApplicationLoader {
    applicationInitializer: IApplicationInitializer;
    terminalStore: ITerminalStore;
    apiRegistry: IApiRegistry;
    private initializing;
    load(lastIds: LastIds): Promise<void>;
    initialize(): Promise<void>;
    getApplication(): JsonApplicationWithLastIds;
}

declare const THEME_DAO: _airport_direction_indicator.IDependencyInjectionToken<any>;
declare const TOPIC_DAO: _airport_direction_indicator.IDependencyInjectionToken<any>;

export { ApplicationLoader, BaseThemeDao, BaseThemeDvo, BaseTopicDao, BaseTopicDvo, IBaseThemeDao, IBaseThemeDvo, IBaseTopicDao, IBaseTopicDvo, ITheme, ITopic, LocalQApplication, MAPPED_SUPERCLASS, Q, QTheme, QThemeQId, QThemeQRelation, QTopic, QTopicQId, QTopicQRelation, Q_APPLICATION, SQDIDao, SQDIDvo, THEME_DAO, TOPIC_DAO, Theme$1 as Theme, ThemeDao, ThemeECreateColumns, ThemeECreateProperties, ThemeEId, ThemeEOptionalId, ThemeESelect, ThemeEUpdateColumns, ThemeEUpdateProperties, ThemeGraph, ThemeVDescriptor, Topic$1 as Topic, TopicDao, TopicECreateColumns, TopicECreateProperties, TopicEId, TopicEOptionalId, TopicESelect, TopicEUpdateColumns, TopicEUpdateProperties, TopicGraph, TopicVDescriptor, diSet, duoDiSet };
