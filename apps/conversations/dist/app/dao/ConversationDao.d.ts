import { Topic } from "@airline/topics";
import { Conversation } from "../ddl/Conversation";
import { BaseConversationDao } from "../generated/baseDaos";
export declare class ConversationDao extends BaseConversationDao {
    findAllForTopic(topic: Topic | string): Promise<Conversation[]>;
}
//# sourceMappingURL=ConversationDao.d.ts.map