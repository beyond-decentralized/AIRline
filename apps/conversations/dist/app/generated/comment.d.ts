import { IAirEntity } from '@airport/holding-pattern';
import { IConversation } from './conversation';
import { IModerator } from './moderator';
import { ICommentReference } from './commentreference';
import { ITakeBackRequest } from './takebackrequest';
export interface IComment extends IAirEntity {
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
//# sourceMappingURL=comment.d.ts.map