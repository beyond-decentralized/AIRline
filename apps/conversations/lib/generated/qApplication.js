import { airApi } from '@airport/aviation-communication';
import { Comment, CommentReference, Conversation, Moderator, Participant, TakeBackRequest } from '../ddl/ddl';
const __constructors__ = {
    Comment: Comment,
    CommentReference: CommentReference,
    Conversation: Conversation,
    Moderator: Moderator,
    Participant: Participant,
    TakeBackRequest: TakeBackRequest
};
export const Q_APPLICATION = {
    __constructors__,
    domain: 'localhost:8100',
    name: '@airline/conversations'
};
export const Q = Q_APPLICATION;
export function diSet(dbEntityId) {
    return airApi.dS(Q.__dbApplication__, dbEntityId);
}
export function duoDiSet(dbEntityId) {
    return airApi.ddS(Q.__dbApplication__, dbEntityId);
}
airApi.setQApplication(Q_APPLICATION);
//# sourceMappingURL=qApplication.js.map