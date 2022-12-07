import { Injected } from "@airport/direction-indicator";
import { Y } from "@airport/tarmaq-query";
import { Conversation } from "../ddl/Conversation";
import { BaseConversationDao } from "../generated/baseDaos";
import Q from "../generated/qApplication";
import { QModerator, QParticipant } from "../generated/qInterfaces";
import { QConversation } from "../generated/query/QConversation";

@Injected()
export class ConversationDao
    extends BaseConversationDao {

    async loadWithDetails(
        conversationId: string
    ): Promise<Conversation> {
        let c: QConversation,
            m: QModerator,
            p: QParticipant

        return await this._findOne({
            SELECT: {
                comments: {},
                moderators: {
                    userAccount: {
                        username: Y
                    }
                },
                participants: {
                    userAccount: {
                        username: Y
                    }
                }
            },
            FROM: [
                c = Q.Conversation,
                c.comments.LEFT_JOIN(),
                m = c.moderators.LEFT_JOIN(),
                m.userAccount.LEFT_JOIN(),
                p = c.participants.LEFT_JOIN(),
                p.userAccount.LEFT_JOIN()
            ],
            WHERE: c.equals(conversationId)
        })
    }
}