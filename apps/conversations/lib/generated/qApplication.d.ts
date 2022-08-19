import { QApplication } from '@airport/aviation-communication';
import { DbApplication, ApplicationEntity_LocalId } from '@airport/ground-control';
import { QComment } from './qcomment';
import { QCommentReference } from './qcommentreference';
import { QConversation } from './qconversation';
import { QModerator } from './qmoderator';
import { QParticipant } from './qparticipant';
import { QTakeBackRequest } from './qtakebackrequest';
export interface LocalQApplication extends QApplication {
    db: DbApplication;
    Comment: QComment;
    CommentReference: QCommentReference;
    Conversation: QConversation;
    Moderator: QModerator;
    Participant: QParticipant;
    TakeBackRequest: QTakeBackRequest;
}
export declare const Q_APPLICATION: LocalQApplication;
export declare const Q: LocalQApplication;
export declare function diSet(dbEntityId: ApplicationEntity_LocalId): boolean;
export declare function duoDiSet(dbEntityId: ApplicationEntity_LocalId): boolean;
//# sourceMappingURL=qApplication.d.ts.map