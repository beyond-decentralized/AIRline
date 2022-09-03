import { IAirEntity } from '@airport/holding-pattern';
import { ITopic } from '@airline/topics';
import { IParticipant } from './participant';
import { IModerator } from './moderator';
import { IComment } from './comment';
export interface IConversation extends IAirEntity {
    name?: string;
    topic?: ITopic;
    participants?: IParticipant[];
    moderators?: IModerator[];
    comments?: IComment[];
}
//# sourceMappingURL=conversation.d.ts.map