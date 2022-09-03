import { Comment } from '../ddl/comment';
import { CommentESelect, CommentECreateProperties, CommentEUpdateColumns, CommentEUpdateProperties, CommentEId, CommentGraph, QComment } from './qcomment';
import { CommentReference } from '../ddl/commentreference';
import { CommentReferenceESelect, CommentReferenceECreateProperties, CommentReferenceEUpdateColumns, CommentReferenceEUpdateProperties, CommentReferenceEId, CommentReferenceGraph, QCommentReference } from './qcommentreference';
import { Conversation } from '../ddl/conversation';
import { ConversationESelect, ConversationECreateProperties, ConversationEUpdateColumns, ConversationEUpdateProperties, ConversationEId, ConversationGraph, QConversation } from './qconversation';
import { Moderator } from '../ddl/moderator';
import { ModeratorESelect, ModeratorECreateProperties, ModeratorEUpdateColumns, ModeratorEUpdateProperties, ModeratorEId, ModeratorGraph, QModerator } from './qmoderator';
import { Participant } from '../ddl/participant';
import { ParticipantESelect, ParticipantECreateProperties, ParticipantEUpdateColumns, ParticipantEUpdateProperties, ParticipantEId, ParticipantGraph, QParticipant } from './qparticipant';
import { TakeBackRequest } from '../ddl/takebackrequest';
import { TakeBackRequestESelect, TakeBackRequestECreateProperties, TakeBackRequestEUpdateColumns, TakeBackRequestEUpdateProperties, TakeBackRequestEId, TakeBackRequestGraph, QTakeBackRequest } from './qtakebackrequest';
import { IEntityCascadeGraph, IEntityCreateProperties, IEntityIdProperties, IEntitySelectProperties, IEntityUpdateColumns, IEntityUpdateProperties, IQEntity } from '@airport/tarmaq-query';
import { IDao, Dao, DaoQueryDecorators } from '@airport/tarmaq-dao';
import { ApplicationEntity_LocalId as DbEntityId } from '@airport/ground-control';
export declare class SQDIDao<Entity, EntitySelect extends IEntitySelectProperties, EntityCreate extends IEntityCreateProperties, EntityUpdateColumns extends IEntityUpdateColumns, EntityUpdateProperties extends IEntityUpdateProperties, ApplicationEntity_LocalId extends IEntityIdProperties, EntityCascadeGraph extends IEntityCascadeGraph, IQE extends IQEntity> extends Dao<Entity, EntitySelect, EntityCreate, EntityUpdateColumns, EntityUpdateProperties, ApplicationEntity_LocalId, EntityCascadeGraph, IQE> {
    constructor(dbEntityId: DbEntityId);
}
export interface IBaseCommentDao extends IDao<Comment, CommentESelect, CommentECreateProperties, CommentEUpdateColumns, CommentEUpdateProperties, CommentEId, CommentGraph, QComment> {
}
export declare class BaseCommentDao extends SQDIDao<Comment, CommentESelect, CommentECreateProperties, CommentEUpdateColumns, CommentEUpdateProperties, CommentEId, CommentGraph, QComment> implements IBaseCommentDao {
    static Find: DaoQueryDecorators<CommentESelect>;
    static FindOne: DaoQueryDecorators<CommentESelect>;
    static Search: DaoQueryDecorators<CommentESelect>;
    static SearchOne: DaoQueryDecorators<CommentESelect>;
    static Save(config: CommentGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseCommentReferenceDao extends IDao<CommentReference, CommentReferenceESelect, CommentReferenceECreateProperties, CommentReferenceEUpdateColumns, CommentReferenceEUpdateProperties, CommentReferenceEId, CommentReferenceGraph, QCommentReference> {
}
export declare class BaseCommentReferenceDao extends SQDIDao<CommentReference, CommentReferenceESelect, CommentReferenceECreateProperties, CommentReferenceEUpdateColumns, CommentReferenceEUpdateProperties, CommentReferenceEId, CommentReferenceGraph, QCommentReference> implements IBaseCommentReferenceDao {
    static Find: DaoQueryDecorators<CommentReferenceESelect>;
    static FindOne: DaoQueryDecorators<CommentReferenceESelect>;
    static Search: DaoQueryDecorators<CommentReferenceESelect>;
    static SearchOne: DaoQueryDecorators<CommentReferenceESelect>;
    static Save(config: CommentReferenceGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseConversationDao extends IDao<Conversation, ConversationESelect, ConversationECreateProperties, ConversationEUpdateColumns, ConversationEUpdateProperties, ConversationEId, ConversationGraph, QConversation> {
}
export declare class BaseConversationDao extends SQDIDao<Conversation, ConversationESelect, ConversationECreateProperties, ConversationEUpdateColumns, ConversationEUpdateProperties, ConversationEId, ConversationGraph, QConversation> implements IBaseConversationDao {
    static Find: DaoQueryDecorators<ConversationESelect>;
    static FindOne: DaoQueryDecorators<ConversationESelect>;
    static Search: DaoQueryDecorators<ConversationESelect>;
    static SearchOne: DaoQueryDecorators<ConversationESelect>;
    static Save(config: ConversationGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseModeratorDao extends IDao<Moderator, ModeratorESelect, ModeratorECreateProperties, ModeratorEUpdateColumns, ModeratorEUpdateProperties, ModeratorEId, ModeratorGraph, QModerator> {
}
export declare class BaseModeratorDao extends SQDIDao<Moderator, ModeratorESelect, ModeratorECreateProperties, ModeratorEUpdateColumns, ModeratorEUpdateProperties, ModeratorEId, ModeratorGraph, QModerator> implements IBaseModeratorDao {
    static Find: DaoQueryDecorators<ModeratorESelect>;
    static FindOne: DaoQueryDecorators<ModeratorESelect>;
    static Search: DaoQueryDecorators<ModeratorESelect>;
    static SearchOne: DaoQueryDecorators<ModeratorESelect>;
    static Save(config: ModeratorGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseParticipantDao extends IDao<Participant, ParticipantESelect, ParticipantECreateProperties, ParticipantEUpdateColumns, ParticipantEUpdateProperties, ParticipantEId, ParticipantGraph, QParticipant> {
}
export declare class BaseParticipantDao extends SQDIDao<Participant, ParticipantESelect, ParticipantECreateProperties, ParticipantEUpdateColumns, ParticipantEUpdateProperties, ParticipantEId, ParticipantGraph, QParticipant> implements IBaseParticipantDao {
    static Find: DaoQueryDecorators<ParticipantESelect>;
    static FindOne: DaoQueryDecorators<ParticipantESelect>;
    static Search: DaoQueryDecorators<ParticipantESelect>;
    static SearchOne: DaoQueryDecorators<ParticipantESelect>;
    static Save(config: ParticipantGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseTakeBackRequestDao extends IDao<TakeBackRequest, TakeBackRequestESelect, TakeBackRequestECreateProperties, TakeBackRequestEUpdateColumns, TakeBackRequestEUpdateProperties, TakeBackRequestEId, TakeBackRequestGraph, QTakeBackRequest> {
}
export declare class BaseTakeBackRequestDao extends SQDIDao<TakeBackRequest, TakeBackRequestESelect, TakeBackRequestECreateProperties, TakeBackRequestEUpdateColumns, TakeBackRequestEUpdateProperties, TakeBackRequestEId, TakeBackRequestGraph, QTakeBackRequest> implements IBaseTakeBackRequestDao {
    static Find: DaoQueryDecorators<TakeBackRequestESelect>;
    static FindOne: DaoQueryDecorators<TakeBackRequestESelect>;
    static Search: DaoQueryDecorators<TakeBackRequestESelect>;
    static SearchOne: DaoQueryDecorators<TakeBackRequestESelect>;
    static Save(config: TakeBackRequestGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
//# sourceMappingURL=baseDaos.d.ts.map