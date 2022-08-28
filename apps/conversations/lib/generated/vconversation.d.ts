import { IVStringField } from '@airbridge/validate';
import { AirEntityVDescriptor } from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import { TopicVDescriptor, Topic } from '@airline/topics/lib/to_be_generated/runtime-index';
import { ParticipantVDescriptor } from './vparticipant';
import { Participant } from '../ddl/Participant';
import { ModeratorVDescriptor } from './vmoderator';
import { Moderator } from '../ddl/Moderator';
import { CommentVDescriptor } from './vcomment';
import { Comment } from '../ddl/Comment';
export interface ConversationVDescriptor<T> extends AirEntityVDescriptor<T> {
    name?: string | IVStringField;
    topic?: TopicVDescriptor<Topic>;
    participants?: ParticipantVDescriptor<Participant>;
    moderators?: ModeratorVDescriptor<Moderator>;
    comments?: CommentVDescriptor<Comment>;
}
//# sourceMappingURL=vconversation.d.ts.map