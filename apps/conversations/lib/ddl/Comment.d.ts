import { AirEntity } from "@airport/holding-pattern";
import { CommentReference } from "./CommentReference";
import { Conversation } from "./Conversation";
import { Moderator } from "./Moderator";
import { TakeBackRequest } from "./TakeBackRequest";
export declare class Comment extends AirEntity {
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
//# sourceMappingURL=Comment.d.ts.map