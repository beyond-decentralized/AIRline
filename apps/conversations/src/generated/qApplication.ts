import {
    airApi,
    QApplication
} from '@airport/aviation-communication'
import {
    DbApplication,
    ApplicationEntity_LocalId,
}                      from '@airport/ground-control';
import { QComment } from './qcomment';
import { QCommentReference } from './qcommentreference';
import { QConversation } from './qconversation';
import { QModerator } from './qmoderator';
import { QParticipant } from './qparticipant';
import { QTakeBackRequest } from './qtakebackrequest';
import {
  Comment,
  CommentReference,
  Conversation,
  Moderator,
  Participant,
  TakeBackRequest
} from '../ddl/ddl';

export interface LocalQApplication extends QApplication {

    db: DbApplication;

  Comment: QComment;
	CommentReference: QCommentReference;
	Conversation: QConversation;
	Moderator: QModerator;
	Participant: QParticipant;
	TakeBackRequest: QTakeBackRequest;

}

const __constructors__ = {
	Comment: Comment,
	CommentReference: CommentReference,
	Conversation: Conversation,
	Moderator: Moderator,
	Participant: Participant,
	TakeBackRequest: TakeBackRequest
};

export const Q_APPLICATION: LocalQApplication = <any>{
	__constructors__,
  domain: 'localhost:8100',
  name: '@airline/conversations'
};
export const Q: LocalQApplication = Q_APPLICATION

export function diSet(
	dbEntityId: ApplicationEntity_LocalId
): boolean {
	return airApi.dS(Q.__dbApplication__, dbEntityId)
}

export function duoDiSet(
	dbEntityId: ApplicationEntity_LocalId
): boolean {
	return airApi.ddS(Q.__dbApplication__, dbEntityId)
}

airApi.setQApplication(Q_APPLICATION)
