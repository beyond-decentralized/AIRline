import { Topic } from "@airline/topics";
import { RequestManager } from "@airport/arrivals-n-departures";
import { ConversationDao } from "../dao/ConversationDao";
import { Conversation } from "../ddl/Conversation";
export declare class ConversationApi {
    conversationDao: ConversationDao;
    requestManager: RequestManager;
    findAll(): Promise<Conversation[]>;
    findAllForTopic(topic: Topic | string): Promise<Conversation[]>;
    save(conversation: Conversation): Promise<void>;
}
//# sourceMappingURL=ConversationApi.d.ts.map