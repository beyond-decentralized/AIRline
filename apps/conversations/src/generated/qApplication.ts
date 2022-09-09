import {
    airApi,
    QApp
} from '@airport/aviation-communication'
import {
    DbApplication,
    ApplicationEntity_LocalId,
}                      from '@airport/ground-control';
import { QComment } from './query/QComment';
import { QCommentReference } from './query/QCommentReference';
import { QConversation } from './query/QConversation';
import { QModerator } from './query/QModerator';
import { QParticipant } from './query/QParticipant';
import { QTakeBackRequest } from './query/QTakeBackRequest';
import {
  Comment,
  CommentReference,
  Conversation,
  Moderator,
  Participant,
  TakeBackRequest
} from '../ddl/ddl';

export interface localhost_colon_3002____at_airline_slash_conversations_LocalQApp extends QApp {

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

export const Q_localhost_colon_3002____at_airline_slash_conversations: localhost_colon_3002____at_airline_slash_conversations_LocalQApp = <any>{
	__constructors__,
  domain: 'localhost:3002',
  name: '@airline/conversations'
};
export default Q_localhost_colon_3002____at_airline_slash_conversations

export function localhost_colon_3002____at_airline_slash_conversations_diSet(
	dbEntityId: ApplicationEntity_LocalId
): boolean {
	return airApi.dS(Q_localhost_colon_3002____at_airline_slash_conversations.__dbApplication__, dbEntityId)
}

airApi.setQApp(Q_localhost_colon_3002____at_airline_slash_conversations)
