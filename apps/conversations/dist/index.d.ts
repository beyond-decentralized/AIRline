import { AirEntity, IAirEntity, AirEntityESelect, AirEntityEId, AirEntityEUpdateProperties, AirEntityGraph, AirEntityEUpdateColumns, QAirEntity, QAirEntityQId, QAirEntityQRelation } from '@airport/holding-pattern';
import { Topic, ITopic, TopicESelect, TopicEOptionalId, TopicGraph, QTopicQRelation } from '@airline/topics';
import { UserAccount, IUserAccount, UserAccountESelect, UserAccountEOptionalId, UserAccountGraph, QUserAccountQRelation } from '@airport/travel-document-checkpoint';
import { QApplication } from '@airport/aviation-communication';
import { DbApplication, ApplicationEntity_LocalId } from '@airport/ground-control';
import { IQNumberField, IQDateField, IQStringField, IQAirEntityOneToManyRelation, IQBooleanField } from '@airport/tarmaq-query';
import * as _airport_direction_indicator from '@airport/direction-indicator';

declare class Moderator extends AirEntity {
    conversation: Conversation;
    userAccount: UserAccount;
}

declare class Participant extends AirEntity {
    conversation: Conversation;
    userAccount: UserAccount;
}

declare class Conversation extends AirEntity {
    name: string;
    topic: Topic;
    participants: Participant[];
    moderators: Moderator[];
    comments: Comment$1[];
}

declare class TakeBackRequest extends AirEntity {
    forComment: Comment$1;
    viaComment: Comment$1;
}

declare class Comment$1 extends AirEntity {
    text: string;
    takenBack: boolean;
    takenBackDttm: Date;
    censored: boolean;
    sensoredDttm: Date;
    conversation: Conversation;
    source: Comment$1;
    censoredBy: Moderator;
    replies: Comment$1[];
    references: CommentReference[];
    referredFrom: Comment$1[];
    madeTakeBackRequest: TakeBackRequest[];
    takeBackRequests: TakeBackRequest[];
}

declare class CommentReference extends AirEntity {
    reference: Comment$1;
    referredFrom: Comment$1;
}

declare class Comment extends AirEntity {
    text: string;
    takenBack: boolean;
    takenBackDttm: Date;
    censored: boolean;
    sensoredDttm: Date;
    conversation: Conversation;
    source: Comment;
    censoredBy: Moderator;
    replies: Comment[];
    references: CommentReference[];
    referredFrom: Comment[];
    madeTakeBackRequest: TakeBackRequest[];
    takeBackRequests: TakeBackRequest[];
}

declare class CommentApi {
    constructor();
    commentApi: CommentApi;
    findAllForConversation(conversation: Conversation | string): Promise<Comment[]>;
    save(comment: Comment): Promise<void>;
}

declare class ConversationApi {
    constructor();
    conversationApi: ConversationApi;
    findAll(): Promise<Conversation[]>;
    findAllForTopic(topic: Topic | string): Promise<Conversation[]>;
    save(conversation: Conversation): Promise<void>;
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

declare const conversations: _airport_direction_indicator.IInjectionApplication;
declare const COMMENT_API: _airport_direction_indicator.IDependencyInjectionToken<any>;
declare const CONVERSATION_API: _airport_direction_indicator.IDependencyInjectionToken<any>;

export { COMMENT_API, CONVERSATION_API, Comment$1 as Comment, CommentApi, CommentECreateColumns, CommentECreateProperties, CommentEId, CommentEOptionalId, CommentESelect, CommentEUpdateColumns, CommentEUpdateProperties, CommentGraph, CommentReference, CommentReferenceECreateColumns, CommentReferenceECreateProperties, CommentReferenceEId, CommentReferenceEOptionalId, CommentReferenceESelect, CommentReferenceEUpdateColumns, CommentReferenceEUpdateProperties, CommentReferenceGraph, Conversation, ConversationApi, ConversationECreateColumns, ConversationECreateProperties, ConversationEId, ConversationEOptionalId, ConversationESelect, ConversationEUpdateColumns, ConversationEUpdateProperties, ConversationGraph, IComment, ICommentReference, IConversation, IModerator, IParticipant, ITakeBackRequest, LocalQApplication, Moderator, ModeratorECreateColumns, ModeratorECreateProperties, ModeratorEId, ModeratorEOptionalId, ModeratorESelect, ModeratorEUpdateColumns, ModeratorEUpdateProperties, ModeratorGraph, Participant, ParticipantECreateColumns, ParticipantECreateProperties, ParticipantEId, ParticipantEOptionalId, ParticipantESelect, ParticipantEUpdateColumns, ParticipantEUpdateProperties, ParticipantGraph, Q, QComment, QCommentQId, QCommentQRelation, QCommentReference, QCommentReferenceQId, QCommentReferenceQRelation, QConversation, QConversationQId, QConversationQRelation, QModerator, QModeratorQId, QModeratorQRelation, QParticipant, QParticipantQId, QParticipantQRelation, QTakeBackRequest, QTakeBackRequestQId, QTakeBackRequestQRelation, Q_APPLICATION, TakeBackRequest, TakeBackRequestECreateColumns, TakeBackRequestECreateProperties, TakeBackRequestEId, TakeBackRequestEOptionalId, TakeBackRequestESelect, TakeBackRequestEUpdateColumns, TakeBackRequestEUpdateProperties, TakeBackRequestGraph, conversations, diSet, duoDiSet };
