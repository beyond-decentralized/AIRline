import { Comment } from '../ddl/comment';
import { CommentVDescriptor } from './vcomment';
import { CommentReference } from '../ddl/commentreference';
import { CommentReferenceVDescriptor } from './vcommentreference';
import { Conversation } from '../ddl/conversation';
import { ConversationVDescriptor } from './vconversation';
import { Moderator } from '../ddl/moderator';
import { ModeratorVDescriptor } from './vmoderator';
import { Participant } from '../ddl/participant';
import { ParticipantVDescriptor } from './vparticipant';
import { TakeBackRequest } from '../ddl/takebackrequest';
import { TakeBackRequestVDescriptor } from './vtakebackrequest';
import { IDvo, Dvo } from '@airbridge/validate';
import { ApplicationEntity_LocalId as DbEntityId } from '@airport/ground-control';
export declare class SQDIDvo<Entity, EntityVDescriptor> extends Dvo<Entity, EntityVDescriptor> {
    constructor(dbEntityId: DbEntityId);
}
export interface IBaseCommentDvo extends IDvo<Comment, CommentVDescriptor<Comment>> {
}
export declare class BaseCommentDvo extends SQDIDvo<Comment, CommentVDescriptor<Comment>> implements IBaseCommentDvo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseCommentReferenceDvo extends IDvo<CommentReference, CommentReferenceVDescriptor<CommentReference>> {
}
export declare class BaseCommentReferenceDvo extends SQDIDvo<CommentReference, CommentReferenceVDescriptor<CommentReference>> implements IBaseCommentReferenceDvo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseConversationDvo extends IDvo<Conversation, ConversationVDescriptor<Conversation>> {
}
export declare class BaseConversationDvo extends SQDIDvo<Conversation, ConversationVDescriptor<Conversation>> implements IBaseConversationDvo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseModeratorDvo extends IDvo<Moderator, ModeratorVDescriptor<Moderator>> {
}
export declare class BaseModeratorDvo extends SQDIDvo<Moderator, ModeratorVDescriptor<Moderator>> implements IBaseModeratorDvo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseParticipantDvo extends IDvo<Participant, ParticipantVDescriptor<Participant>> {
}
export declare class BaseParticipantDvo extends SQDIDvo<Participant, ParticipantVDescriptor<Participant>> implements IBaseParticipantDvo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseTakeBackRequestDvo extends IDvo<TakeBackRequest, TakeBackRequestVDescriptor<TakeBackRequest>> {
}
export declare class BaseTakeBackRequestDvo extends SQDIDvo<TakeBackRequest, TakeBackRequestVDescriptor<TakeBackRequest>> implements IBaseTakeBackRequestDvo {
    static diSet(): boolean;
    constructor();
}
//# sourceMappingURL=baseDvos.d.ts.map