import { AirEntity, IAirEntity, AirEntityESelect, AirEntityEId, AirEntityEUpdateProperties, AirEntityGraph, AirEntityEUpdateColumns, QAirEntity, QAirEntityQId, QAirEntityQRelation } from '@airport/holding-pattern';
import { Topic, ITopic, TopicESelect, TopicEOptionalId, TopicGraph, QTopicQRelation } from '@airline/topics';
import { UserAccount, IUserAccount, UserAccountESelect, UserAccountEOptionalId, UserAccountGraph, QUserAccountQRelation } from '@airport/travel-document-checkpoint';
import { IQNumberField, IQDateField, IQStringField, IQAirEntityOneToManyRelation, IQBooleanField, IEntitySelectProperties, IEntityCreateProperties, IEntityUpdateColumns, IEntityUpdateProperties, IEntityIdProperties, IEntityCascadeGraph, IQEntity } from '@airport/tarmaq-query';
import { Dao, IDao, DaoQueryDecorators } from '@airport/tarmaq-dao';
import { ApplicationEntity_LocalId, DbApplication } from '@airport/ground-control';
import { QApplication } from '@airport/aviation-communication';
import { IVStringField, IVBooleanField, IVDateField, Dvo, IDvo } from '@airbridge/validate';
import { AirEntityVDescriptor } from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import { TopicVDescriptor, Topic as Topic$1 } from '@airline/topics/dist/app/bundle';
import { UserAccountVDescriptor, UserAccount as UserAccount$1 } from '@airport/travel-document-checkpoint/lib/to_be_generated/runtime-index';
import { IApiRegistry } from '@airport/check-in';
import { IApplicationLoader, LastIds, JsonApplicationWithLastIds } from '@airport/apron';
import { IApplicationInitializer, ITerminalStore } from '@airport/terminal-map';
import * as _airport_direction_indicator from '@airport/direction-indicator';

declare class Moderator$1 extends AirEntity {
    conversation: Conversation$1;
    userAccount: UserAccount;
}

declare class Participant$1 extends AirEntity {
    conversation: Conversation$1;
    userAccount: UserAccount;
}

declare class Conversation$1 extends AirEntity {
    name: string;
    topic: Topic;
    participants: Participant$1[];
    moderators: Moderator$1[];
    comments: Comment$1[];
}

declare class TakeBackRequest$1 extends AirEntity {
    forComment: Comment$1;
    viaComment: Comment$1;
}

declare class Comment$1 extends AirEntity {
    text: string;
    takenBack: boolean;
    takenBackDttm: Date;
    censored: boolean;
    sensoredDttm: Date;
    conversation: Conversation$1;
    source: Comment$1;
    censoredBy: Moderator$1;
    replies: Comment$1[];
    references: CommentReference$1[];
    referredFrom: Comment$1[];
    madeTakeBackRequest: TakeBackRequest$1[];
    takeBackRequests: TakeBackRequest$1[];
}

declare class CommentReference$1 extends AirEntity {
    reference: Comment$1;
    referredFrom: Comment$1;
}

declare class Comment extends AirEntity {
    text: string;
    takenBack: boolean;
    takenBackDttm: Date;
    censored: boolean;
    sensoredDttm: Date;
    conversation: Conversation$1;
    source: Comment;
    censoredBy: Moderator$1;
    replies: Comment[];
    references: CommentReference$1[];
    referredFrom: Comment[];
    madeTakeBackRequest: TakeBackRequest$1[];
    takeBackRequests: TakeBackRequest$1[];
}

interface IModerator extends IAirEntity {
    conversation?: IConversation;
    userAccount?: IUserAccount;
}

interface ICommentReference extends IAirEntity {
    reference?: IComment;
    referredFrom?: IComment;
}

interface ITakeBackRequest extends IAirEntity {
    forComment?: IComment;
    viaComment?: IComment;
}

interface IComment extends IAirEntity {
    text?: string;
    takenBack?: boolean;
    takenBackDttm?: Date;
    censored?: boolean;
    sensoredDttm?: Date;
    conversation?: IConversation;
    source?: IComment;
    censoredBy?: IModerator;
    replies?: IComment[];
    references?: ICommentReference[];
    referredFrom?: IComment[];
    madeTakeBackRequest?: ITakeBackRequest[];
    takeBackRequests?: ITakeBackRequest[];
}

interface IConversation extends IAirEntity {
    name?: string;
    topic?: ITopic;
    participants?: IParticipant[];
    moderators?: IModerator[];
    comments?: IComment[];
}

interface IParticipant extends IAirEntity {
    conversation?: IConversation;
    userAccount?: IUserAccount;
}

/**
 * SELECT - All fields and relations (optional).
 */
interface ParticipantESelect extends AirEntityESelect, ParticipantEOptionalId {
    conversation?: ConversationESelect;
    userAccount?: UserAccountESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
interface ParticipantEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
interface ParticipantEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
interface ParticipantEUpdateProperties extends AirEntityEUpdateProperties {
    conversation?: ConversationEOptionalId;
    userAccount?: UserAccountEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
interface ParticipantGraph extends ParticipantEOptionalId, AirEntityGraph {
    conversation?: ConversationGraph;
    userAccount?: UserAccountGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
interface ParticipantEUpdateColumns extends AirEntityEUpdateColumns {
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
interface ParticipantECreateProperties extends Partial<ParticipantEId>, ParticipantEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
interface ParticipantECreateColumns extends ParticipantEId, ParticipantEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
interface QParticipant<IQE extends QParticipant = any> extends QAirEntity<IQE | QParticipant> {
    conversation: QConversationQRelation;
    userAccount: QUserAccountQRelation;
}
interface QParticipantQId extends QAirEntityQId {
}
interface QParticipantQRelation extends QAirEntityQRelation<IParticipant, QParticipant>, QParticipantQId {
}

/**
 * SELECT - All fields and relations (optional).
 */
interface ModeratorESelect extends AirEntityESelect, ModeratorEOptionalId {
    conversation?: ConversationESelect;
    userAccount?: UserAccountESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
interface ModeratorEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
interface ModeratorEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
interface ModeratorEUpdateProperties extends AirEntityEUpdateProperties {
    conversation?: ConversationEOptionalId;
    userAccount?: UserAccountEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
interface ModeratorGraph extends ModeratorEOptionalId, AirEntityGraph {
    conversation?: ConversationGraph;
    userAccount?: UserAccountGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
interface ModeratorEUpdateColumns extends AirEntityEUpdateColumns {
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
interface ModeratorECreateProperties extends Partial<ModeratorEId>, ModeratorEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
interface ModeratorECreateColumns extends ModeratorEId, ModeratorEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
interface QModerator<IQE extends QModerator = any> extends QAirEntity<IQE | QModerator> {
    conversation: QConversationQRelation;
    userAccount: QUserAccountQRelation;
}
interface QModeratorQId extends QAirEntityQId {
}
interface QModeratorQRelation extends QAirEntityQRelation<IModerator, QModerator>, QModeratorQId {
}

/**
 * SELECT - All fields and relations (optional).
 */
interface ConversationESelect extends AirEntityESelect, ConversationEOptionalId {
    name?: string | IQStringField;
    topic?: TopicESelect;
    participants?: ParticipantESelect;
    moderators?: ModeratorESelect;
    comments?: CommentESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
interface ConversationEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
interface ConversationEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
interface ConversationEUpdateProperties extends AirEntityEUpdateProperties {
    name?: string | IQStringField;
    topic?: TopicEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
interface ConversationGraph extends ConversationEOptionalId, AirEntityGraph {
    name?: string | IQStringField;
    topic?: TopicGraph;
    participants?: ParticipantGraph[];
    moderators?: ModeratorGraph[];
    comments?: CommentGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
interface ConversationEUpdateColumns extends AirEntityEUpdateColumns {
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
interface ConversationECreateProperties extends Partial<ConversationEId>, ConversationEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
interface ConversationECreateColumns extends ConversationEId, ConversationEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
interface QConversation<IQE extends QConversation = any> extends QAirEntity<IQE | QConversation> {
    name: IQStringField;
    topic: QTopicQRelation;
    participants: IQAirEntityOneToManyRelation<IParticipant, QParticipant>;
    moderators: IQAirEntityOneToManyRelation<IModerator, QModerator>;
    comments: IQAirEntityOneToManyRelation<IComment, QComment>;
}
interface QConversationQId extends QAirEntityQId {
}
interface QConversationQRelation extends QAirEntityQRelation<IConversation, QConversation>, QConversationQId {
}

/**
 * SELECT - All fields and relations (optional).
 */
interface CommentReferenceESelect extends AirEntityESelect, CommentReferenceEOptionalId {
    reference?: CommentESelect;
    referredFrom?: CommentESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
interface CommentReferenceEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
interface CommentReferenceEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
interface CommentReferenceEUpdateProperties extends AirEntityEUpdateProperties {
    reference?: CommentEOptionalId;
    referredFrom?: CommentEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
interface CommentReferenceGraph extends CommentReferenceEOptionalId, AirEntityGraph {
    reference?: CommentGraph;
    referredFrom?: CommentGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
interface CommentReferenceEUpdateColumns extends AirEntityEUpdateColumns {
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
interface CommentReferenceECreateProperties extends Partial<CommentReferenceEId>, CommentReferenceEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
interface CommentReferenceECreateColumns extends CommentReferenceEId, CommentReferenceEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
interface QCommentReference<IQE extends QCommentReference = any> extends QAirEntity<IQE | QCommentReference> {
    reference: QCommentQRelation;
    referredFrom: QCommentQRelation;
}
interface QCommentReferenceQId extends QAirEntityQId {
}
interface QCommentReferenceQRelation extends QAirEntityQRelation<ICommentReference, QCommentReference>, QCommentReferenceQId {
}

/**
 * SELECT - All fields and relations (optional).
 */
interface TakeBackRequestESelect extends AirEntityESelect, TakeBackRequestEOptionalId {
    forComment?: CommentESelect;
    viaComment?: CommentESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
interface TakeBackRequestEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
interface TakeBackRequestEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
interface TakeBackRequestEUpdateProperties extends AirEntityEUpdateProperties {
    forComment?: CommentEOptionalId;
    viaComment?: CommentEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
interface TakeBackRequestGraph extends TakeBackRequestEOptionalId, AirEntityGraph {
    forComment?: CommentGraph;
    viaComment?: CommentGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
interface TakeBackRequestEUpdateColumns extends AirEntityEUpdateColumns {
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
interface TakeBackRequestECreateProperties extends Partial<TakeBackRequestEId>, TakeBackRequestEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
interface TakeBackRequestECreateColumns extends TakeBackRequestEId, TakeBackRequestEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
interface QTakeBackRequest<IQE extends QTakeBackRequest = any> extends QAirEntity<IQE | QTakeBackRequest> {
    forComment: QCommentQRelation;
    viaComment: QCommentQRelation;
}
interface QTakeBackRequestQId extends QAirEntityQId {
}
interface QTakeBackRequestQRelation extends QAirEntityQRelation<ITakeBackRequest, QTakeBackRequest>, QTakeBackRequestQId {
}

/**
 * SELECT - All fields and relations (optional).
 */
interface CommentESelect extends AirEntityESelect, CommentEOptionalId {
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
interface CommentEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
interface CommentEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
interface CommentEUpdateProperties extends AirEntityEUpdateProperties {
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
interface CommentGraph extends CommentEOptionalId, AirEntityGraph {
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
interface CommentEUpdateColumns extends AirEntityEUpdateColumns {
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
interface CommentECreateProperties extends Partial<CommentEId>, CommentEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
interface CommentECreateColumns extends CommentEId, CommentEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
interface QComment<IQE extends QComment = any> extends QAirEntity<IQE | QComment> {
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
interface QCommentQId extends QAirEntityQId {
}
interface QCommentQRelation extends QAirEntityQRelation<IComment, QComment>, QCommentQId {
}

declare class CommentReference extends AirEntity {
    reference: Comment$1;
    referredFrom: Comment$1;
}

declare class Conversation extends AirEntity {
    name: string;
    topic: Topic;
    participants: Participant$1[];
    moderators: Moderator$1[];
    comments: Comment$1[];
}

declare class Moderator extends AirEntity {
    conversation: Conversation$1;
    userAccount: UserAccount;
}

declare class Participant extends AirEntity {
    conversation: Conversation$1;
    userAccount: UserAccount;
}

declare class TakeBackRequest extends AirEntity {
    forComment: Comment$1;
    viaComment: Comment$1;
}

declare class SQDIDao<Entity, EntitySelect extends IEntitySelectProperties, EntityCreate extends IEntityCreateProperties, EntityUpdateColumns extends IEntityUpdateColumns, EntityUpdateProperties extends IEntityUpdateProperties, ApplicationEntity_LocalId extends IEntityIdProperties, EntityCascadeGraph extends IEntityCascadeGraph, IQE extends IQEntity> extends Dao<Entity, EntitySelect, EntityCreate, EntityUpdateColumns, EntityUpdateProperties, ApplicationEntity_LocalId, EntityCascadeGraph, IQE> {
    constructor(dbEntityId: ApplicationEntity_LocalId);
}
interface IBaseCommentDao extends IDao<Comment, CommentESelect, CommentECreateProperties, CommentEUpdateColumns, CommentEUpdateProperties, CommentEId, CommentGraph, QComment> {
}
declare class BaseCommentDao extends SQDIDao<Comment, CommentESelect, CommentECreateProperties, CommentEUpdateColumns, CommentEUpdateProperties, CommentEId, CommentGraph, QComment> implements IBaseCommentDao {
    static Find: DaoQueryDecorators<CommentESelect>;
    static FindOne: DaoQueryDecorators<CommentESelect>;
    static Search: DaoQueryDecorators<CommentESelect>;
    static SearchOne: DaoQueryDecorators<CommentESelect>;
    static Save(config: CommentGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
interface IBaseCommentReferenceDao extends IDao<CommentReference, CommentReferenceESelect, CommentReferenceECreateProperties, CommentReferenceEUpdateColumns, CommentReferenceEUpdateProperties, CommentReferenceEId, CommentReferenceGraph, QCommentReference> {
}
declare class BaseCommentReferenceDao extends SQDIDao<CommentReference, CommentReferenceESelect, CommentReferenceECreateProperties, CommentReferenceEUpdateColumns, CommentReferenceEUpdateProperties, CommentReferenceEId, CommentReferenceGraph, QCommentReference> implements IBaseCommentReferenceDao {
    static Find: DaoQueryDecorators<CommentReferenceESelect>;
    static FindOne: DaoQueryDecorators<CommentReferenceESelect>;
    static Search: DaoQueryDecorators<CommentReferenceESelect>;
    static SearchOne: DaoQueryDecorators<CommentReferenceESelect>;
    static Save(config: CommentReferenceGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
interface IBaseConversationDao extends IDao<Conversation, ConversationESelect, ConversationECreateProperties, ConversationEUpdateColumns, ConversationEUpdateProperties, ConversationEId, ConversationGraph, QConversation> {
}
declare class BaseConversationDao extends SQDIDao<Conversation, ConversationESelect, ConversationECreateProperties, ConversationEUpdateColumns, ConversationEUpdateProperties, ConversationEId, ConversationGraph, QConversation> implements IBaseConversationDao {
    static Find: DaoQueryDecorators<ConversationESelect>;
    static FindOne: DaoQueryDecorators<ConversationESelect>;
    static Search: DaoQueryDecorators<ConversationESelect>;
    static SearchOne: DaoQueryDecorators<ConversationESelect>;
    static Save(config: ConversationGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
interface IBaseModeratorDao extends IDao<Moderator, ModeratorESelect, ModeratorECreateProperties, ModeratorEUpdateColumns, ModeratorEUpdateProperties, ModeratorEId, ModeratorGraph, QModerator> {
}
declare class BaseModeratorDao extends SQDIDao<Moderator, ModeratorESelect, ModeratorECreateProperties, ModeratorEUpdateColumns, ModeratorEUpdateProperties, ModeratorEId, ModeratorGraph, QModerator> implements IBaseModeratorDao {
    static Find: DaoQueryDecorators<ModeratorESelect>;
    static FindOne: DaoQueryDecorators<ModeratorESelect>;
    static Search: DaoQueryDecorators<ModeratorESelect>;
    static SearchOne: DaoQueryDecorators<ModeratorESelect>;
    static Save(config: ModeratorGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
interface IBaseParticipantDao extends IDao<Participant, ParticipantESelect, ParticipantECreateProperties, ParticipantEUpdateColumns, ParticipantEUpdateProperties, ParticipantEId, ParticipantGraph, QParticipant> {
}
declare class BaseParticipantDao extends SQDIDao<Participant, ParticipantESelect, ParticipantECreateProperties, ParticipantEUpdateColumns, ParticipantEUpdateProperties, ParticipantEId, ParticipantGraph, QParticipant> implements IBaseParticipantDao {
    static Find: DaoQueryDecorators<ParticipantESelect>;
    static FindOne: DaoQueryDecorators<ParticipantESelect>;
    static Search: DaoQueryDecorators<ParticipantESelect>;
    static SearchOne: DaoQueryDecorators<ParticipantESelect>;
    static Save(config: ParticipantGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
interface IBaseTakeBackRequestDao extends IDao<TakeBackRequest, TakeBackRequestESelect, TakeBackRequestECreateProperties, TakeBackRequestEUpdateColumns, TakeBackRequestEUpdateProperties, TakeBackRequestEId, TakeBackRequestGraph, QTakeBackRequest> {
}
declare class BaseTakeBackRequestDao extends SQDIDao<TakeBackRequest, TakeBackRequestESelect, TakeBackRequestECreateProperties, TakeBackRequestEUpdateColumns, TakeBackRequestEUpdateProperties, TakeBackRequestEId, TakeBackRequestGraph, QTakeBackRequest> implements IBaseTakeBackRequestDao {
    static Find: DaoQueryDecorators<TakeBackRequestESelect>;
    static FindOne: DaoQueryDecorators<TakeBackRequestESelect>;
    static Search: DaoQueryDecorators<TakeBackRequestESelect>;
    static SearchOne: DaoQueryDecorators<TakeBackRequestESelect>;
    static Save(config: TakeBackRequestGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}

declare class CommentDao extends BaseCommentDao {
    findAllForConversation(conversation: Conversation$1 | string): Promise<Comment[]>;
}

declare class ConversationDao extends BaseConversationDao {
    findAllForTopic(topic: Topic | string): Promise<Conversation$1[]>;
}

declare const MAPPED_SUPERCLASS: any[];

interface LocalQApplication extends QApplication {
    db: DbApplication;
    Comment: QComment;
    CommentReference: QCommentReference;
    Conversation: QConversation;
    Moderator: QModerator;
    Participant: QParticipant;
    TakeBackRequest: QTakeBackRequest;
}
declare const Q_APPLICATION: LocalQApplication;
declare const Q: LocalQApplication;
declare function diSet(dbEntityId: ApplicationEntity_LocalId): boolean;
declare function duoDiSet(dbEntityId: ApplicationEntity_LocalId): boolean;

interface ParticipantVDescriptor<T> extends AirEntityVDescriptor<T> {
    conversation?: ConversationVDescriptor<Conversation$1>;
    userAccount?: UserAccountVDescriptor<UserAccount$1>;
}

interface ModeratorVDescriptor<T> extends AirEntityVDescriptor<T> {
    conversation?: ConversationVDescriptor<Conversation$1>;
    userAccount?: UserAccountVDescriptor<UserAccount$1>;
}

interface ConversationVDescriptor<T> extends AirEntityVDescriptor<T> {
    name?: string | IVStringField;
    topic?: TopicVDescriptor<Topic$1>;
    participants?: ParticipantVDescriptor<Participant$1>;
    moderators?: ModeratorVDescriptor<Moderator$1>;
    comments?: CommentVDescriptor<Comment$1>;
}

interface CommentReferenceVDescriptor<T> extends AirEntityVDescriptor<T> {
    reference?: CommentVDescriptor<Comment$1>;
    referredFrom?: CommentVDescriptor<Comment$1>;
}

interface TakeBackRequestVDescriptor<T> extends AirEntityVDescriptor<T> {
    forComment?: CommentVDescriptor<Comment$1>;
    viaComment?: CommentVDescriptor<Comment$1>;
}

interface CommentVDescriptor<T> extends AirEntityVDescriptor<T> {
    text?: string | IVStringField;
    takenBack?: boolean | IVBooleanField;
    takenBackDttm?: Date | IVDateField;
    censored?: boolean | IVBooleanField;
    sensoredDttm?: Date | IVDateField;
    conversation?: ConversationVDescriptor<Conversation$1>;
    source?: CommentVDescriptor<Comment$1>;
    censoredBy?: ModeratorVDescriptor<Moderator$1>;
    replies?: CommentVDescriptor<Comment$1>;
    references?: CommentReferenceVDescriptor<CommentReference$1>;
    referredFrom?: CommentVDescriptor<Comment$1>;
    madeTakeBackRequest?: TakeBackRequestVDescriptor<TakeBackRequest$1>;
    takeBackRequests?: TakeBackRequestVDescriptor<TakeBackRequest$1>;
}

declare class SQDIDvo<Entity, EntityVDescriptor> extends Dvo<Entity, EntityVDescriptor> {
    constructor(dbEntityId: ApplicationEntity_LocalId);
}
interface IBaseCommentDvo extends IDvo<Comment, CommentVDescriptor<Comment>> {
}
declare class BaseCommentDvo extends SQDIDvo<Comment, CommentVDescriptor<Comment>> implements IBaseCommentDvo {
    static diSet(): boolean;
    constructor();
}
interface IBaseCommentReferenceDvo extends IDvo<CommentReference, CommentReferenceVDescriptor<CommentReference>> {
}
declare class BaseCommentReferenceDvo extends SQDIDvo<CommentReference, CommentReferenceVDescriptor<CommentReference>> implements IBaseCommentReferenceDvo {
    static diSet(): boolean;
    constructor();
}
interface IBaseConversationDvo extends IDvo<Conversation, ConversationVDescriptor<Conversation>> {
}
declare class BaseConversationDvo extends SQDIDvo<Conversation, ConversationVDescriptor<Conversation>> implements IBaseConversationDvo {
    static diSet(): boolean;
    constructor();
}
interface IBaseModeratorDvo extends IDvo<Moderator, ModeratorVDescriptor<Moderator>> {
}
declare class BaseModeratorDvo extends SQDIDvo<Moderator, ModeratorVDescriptor<Moderator>> implements IBaseModeratorDvo {
    static diSet(): boolean;
    constructor();
}
interface IBaseParticipantDvo extends IDvo<Participant, ParticipantVDescriptor<Participant>> {
}
declare class BaseParticipantDvo extends SQDIDvo<Participant, ParticipantVDescriptor<Participant>> implements IBaseParticipantDvo {
    static diSet(): boolean;
    constructor();
}
interface IBaseTakeBackRequestDvo extends IDvo<TakeBackRequest, TakeBackRequestVDescriptor<TakeBackRequest>> {
}
declare class BaseTakeBackRequestDvo extends SQDIDvo<TakeBackRequest, TakeBackRequestVDescriptor<TakeBackRequest>> implements IBaseTakeBackRequestDvo {
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

declare const CONVERSATION_DAO: _airport_direction_indicator.IDependencyInjectionToken<any>;
declare const COMMENT_DAO: _airport_direction_indicator.IDependencyInjectionToken<any>;

export { ApplicationLoader, BaseCommentDao, BaseCommentDvo, BaseCommentReferenceDao, BaseCommentReferenceDvo, BaseConversationDao, BaseConversationDvo, BaseModeratorDao, BaseModeratorDvo, BaseParticipantDao, BaseParticipantDvo, BaseTakeBackRequestDao, BaseTakeBackRequestDvo, COMMENT_DAO, CONVERSATION_DAO, Comment$1 as Comment, CommentDao, CommentECreateColumns, CommentECreateProperties, CommentEId, CommentEOptionalId, CommentESelect, CommentEUpdateColumns, CommentEUpdateProperties, CommentGraph, CommentReference$1 as CommentReference, CommentReferenceECreateColumns, CommentReferenceECreateProperties, CommentReferenceEId, CommentReferenceEOptionalId, CommentReferenceESelect, CommentReferenceEUpdateColumns, CommentReferenceEUpdateProperties, CommentReferenceGraph, CommentReferenceVDescriptor, CommentVDescriptor, Conversation$1 as Conversation, ConversationDao, ConversationECreateColumns, ConversationECreateProperties, ConversationEId, ConversationEOptionalId, ConversationESelect, ConversationEUpdateColumns, ConversationEUpdateProperties, ConversationGraph, ConversationVDescriptor, IBaseCommentDao, IBaseCommentDvo, IBaseCommentReferenceDao, IBaseCommentReferenceDvo, IBaseConversationDao, IBaseConversationDvo, IBaseModeratorDao, IBaseModeratorDvo, IBaseParticipantDao, IBaseParticipantDvo, IBaseTakeBackRequestDao, IBaseTakeBackRequestDvo, IComment, ICommentReference, IConversation, IModerator, IParticipant, ITakeBackRequest, LocalQApplication, MAPPED_SUPERCLASS, Moderator$1 as Moderator, ModeratorECreateColumns, ModeratorECreateProperties, ModeratorEId, ModeratorEOptionalId, ModeratorESelect, ModeratorEUpdateColumns, ModeratorEUpdateProperties, ModeratorGraph, ModeratorVDescriptor, Participant$1 as Participant, ParticipantECreateColumns, ParticipantECreateProperties, ParticipantEId, ParticipantEOptionalId, ParticipantESelect, ParticipantEUpdateColumns, ParticipantEUpdateProperties, ParticipantGraph, ParticipantVDescriptor, Q, QComment, QCommentQId, QCommentQRelation, QCommentReference, QCommentReferenceQId, QCommentReferenceQRelation, QConversation, QConversationQId, QConversationQRelation, QModerator, QModeratorQId, QModeratorQRelation, QParticipant, QParticipantQId, QParticipantQRelation, QTakeBackRequest, QTakeBackRequestQId, QTakeBackRequestQRelation, Q_APPLICATION, SQDIDao, SQDIDvo, TakeBackRequest$1 as TakeBackRequest, TakeBackRequestECreateColumns, TakeBackRequestECreateProperties, TakeBackRequestEId, TakeBackRequestEOptionalId, TakeBackRequestESelect, TakeBackRequestEUpdateColumns, TakeBackRequestEUpdateProperties, TakeBackRequestGraph, TakeBackRequestVDescriptor, diSet, duoDiSet };
