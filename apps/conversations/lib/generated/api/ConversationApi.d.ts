import { Topic } from '@airline/topics';
import { Conversation } from '../../ddl/Conversation';
export declare class ConversationApi {
    constructor();
    conversationApi: ConversationApi;
    findAll(): Promise<Conversation[]>;
    findAllForTopic(topic: Topic | string): Promise<Conversation[]>;
    save(conversation: Conversation): Promise<void>;
}
//# sourceMappingURL=ConversationApi.d.ts.map