import { IVBooleanField, IVDateField, IVStringField } from '@airbridge/validate';
import { AirEntityVDescriptor } from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import { ConversationVDescriptor } from './vconversation';
import { Conversation } from '../ddl/Conversation';
import { Comment } from '../ddl/Comment';
import { ModeratorVDescriptor } from './vmoderator';
import { Moderator } from '../ddl/Moderator';
import { CommentReferenceVDescriptor } from './vcommentreference';
import { CommentReference } from '../ddl/CommentReference';
import { TakeBackRequestVDescriptor } from './vtakebackrequest';
import { TakeBackRequest } from '../ddl/TakeBackRequest';
export interface CommentVDescriptor<T> extends AirEntityVDescriptor<T> {
    text?: string | IVStringField;
    takenBack?: boolean | IVBooleanField;
    takenBackDttm?: Date | IVDateField;
    censored?: boolean | IVBooleanField;
    sensoredDttm?: Date | IVDateField;
    conversation?: ConversationVDescriptor<Conversation>;
    source?: CommentVDescriptor<Comment>;
    censoredBy?: ModeratorVDescriptor<Moderator>;
    replies?: CommentVDescriptor<Comment>;
    references?: CommentReferenceVDescriptor<CommentReference>;
    referredFrom?: CommentVDescriptor<Comment>;
    madeTakeBackRequest?: TakeBackRequestVDescriptor<TakeBackRequest>;
    takeBackRequests?: TakeBackRequestVDescriptor<TakeBackRequest>;
}
//# sourceMappingURL=vcomment.d.ts.map