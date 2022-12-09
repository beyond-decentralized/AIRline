import { QTopic, Topic } from "@airline/topics";
import { Injected } from "@airport/direction-indicator";
import { Y } from "@airport/tarmaq-query";
import { QConversation } from "../generated/query/QConversation";
import { ConversationGroup } from "../ddl/ConversationGroup";
import { BaseConversationGroupDao } from "../generated/baseDaos";
import Q from "../generated/qApplication";
import { QConversationGroupConversation, QParticipant } from "../generated/qInterfaces";
import { QConversationGroup } from "../generated/query/QConversationGroup";
import { QRepository } from "@airport/holding-pattern";

@Injected()
export class ConversationGroupDao
    extends BaseConversationGroupDao {

    async findAllForRootRepositories(): Promise<ConversationGroup[]> {
        let cg: QConversationGroup,
            t: QTopic,
            r: QRepository
        return await this._find({
            SELECT: {
                '*': Y,
                topic: {}
            },
            FROM: [
                cg = Q.ConversationGroup,
                t = cg.topic.LEFT_JOIN(),
                r = cg.repository.LEFT_JOIN(),
            ],
            WHERE: r.parentRepository.IS_NULL()
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
        let c: QConversation,
            cg: QConversationGroup,
            cgc: QConversationGroupConversation,
            p: QParticipant

        return await this._findOne({
            SELECT: {
                name: Y,
                conversationGroupConversations: {
                    conversation: {
                        participants: {
                            userAccount: {
                                username: Y
                            }
                        }
                    }
                }
            },
            FROM: [
                cg = Q.ConversationGroup,
                cgc = cg.conversationGroupConversations.LEFT_JOIN(),
                c = cgc.conversation.LEFT_JOIN(),
                p = c.participants.LEFT_JOIN(),
                p.userAccount.LEFT_JOIN()
            ],
            WHERE: cg.equals(conversationGroupId)
        })
    }
}