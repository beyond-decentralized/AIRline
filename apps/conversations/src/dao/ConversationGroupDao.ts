import { QTopic, Topic } from "@airline/topics";
import { Injected } from "@airport/direction-indicator";
import { Y } from "@airport/tarmaq-query";
import { QConversation } from "../generated/query/QConversation";
import { ConversationGroup } from "../ddl/ConversationGroup";
import { BaseConversationGroupDao } from "../generated/baseDaos";
import Q from "../generated/qApplication";
import { QParticipant } from "../generated/qInterfaces";
import { QConversationGroup } from "../generated/query/QConversationGroup";

@Injected()
export class ConversationGroupDao
    extends BaseConversationGroupDao {

    async findAll(): Promise<ConversationGroup[]> {
        let cg: QConversationGroup,
            t: QTopic
        return await this._find({
            SELECT: {
                '*': Y,
                topic: {}
            },
            FROM: [
                cg = Q.ConversationGroup,
                t = cg.topic.LEFT_JOIN()
            ]
        })
    }

    async findAllForTopic(
        topic: Topic | string
    ): Promise<ConversationGroup[]> {
        let cg: QConversationGroup,
            t: QTopic
        return await this._find({
            SELECT: {
                '*': Y,
                topic: {}
            },
            FROM: [
                cg = Q.ConversationGroup,
                t = cg.topic.LEFT_JOIN()
            ],
            WHERE: t.equals(topic)
        })
    }

    async findAllWithNoTopic(
    ): Promise<ConversationGroup[]> {
        let cg: QConversationGroup
        return await this._find({
            SELECT: {
                '*': Y
            },
            FROM: [
                cg = Q.ConversationGroup
            ],
            WHERE: cg.topic.IS_NULL()
        })
    }

    async loadWithDetails(
        conversationGroupId: string
    ): Promise<ConversationGroup> {
        let cg: QConversationGroup,
            c: QConversation,
            p: QParticipant

        return await this._findOne({
            SELECT: {
                name: Y,
                conversations: {
                    participants: {
                        userAccount: {
                            username: Y
                        }
                    }
                }
            },
            FROM: [
                cg = Q.ConversationGroup,
                c = cg.conversations.LEFT_JOIN(),
                p = c.participants.LEFT_JOIN(),
                p.userAccount.LEFT_JOIN()
            ],
            WHERE: cg.equals(conversationGroupId)
        })
    }
}