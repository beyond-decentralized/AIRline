import { Topic } from "@airline/topics";
import { AirEntity } from "@airport/holding-pattern";
import { Comment } from "./Comment";
import { Moderator } from "./Moderator";
import { Participant } from "./Participant";
export declare class Conversation extends AirEntity {
    topic: Topic;
    participants: Participant[];
    moderators: Moderator[];
    comments: Comment[];
}
//# sourceMappingURL=Conversation.d.ts.map