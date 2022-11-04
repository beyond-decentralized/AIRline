import { QTopic, Topic } from "@airline/topics";
import { Injected } from "@airport/direction-indicator";
import { Y } from "@airport/tarmaq-query";
import { Conversation } from "../ddl/Conversation";
import { BaseConversationDao } from "../generated/baseDaos";
import Q from "../generated/qApplication";
import { QConversation } from "../generated/query/QConversation";

@Injected()
export class ConversationDao
    extends BaseConversationDao {

    async findAll(): Promise<Conversation[]> {
        let c: QConversation,
            t: QTopic
        return await this._find({
            SELECT: {
                '*': Y,
                topic: {}
            },
            FROM: [
                c = Q.Conversation,
                t = c.topic.LEFT_JOIN()
            ]
        })
    }

    async findAllForTopic(
        topic: Topic | string
    ): Promise<Conversation[]> {
        let c: QConversation,
            t: QTopic
        return await this._find({
            SELECT: {
                '*': Y,
                topic: {}
            },
            FROM: [
                c = Q.Conversation,
                t = c.topic.LEFT_JOIN()
            ],
            WHERE: t.equals(topic)
        })
    }
}