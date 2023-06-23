import { Injected } from "@airport/direction-indicator";
import { Y } from "@airport/tarmaq-query";
import { Conversation } from "../ddl/Conversation";
import { BaseConversationDao } from "../generated/baseDaos";
import Q from "../generated/qApplication";
import { QModerator, QParticipant } from "../generated/qInterfaces";
import { QConversation } from "../generated/query/QConversation";
import { Observable } from "rxjs";

@Injected()
export class ConversationDao
    extends BaseConversationDao {

    loadWithDetails(
        conversationId: string
    ): Observable<Conversation> {
        let c: QConversation,
            m: QModerator,
            p: QParticipant

        return this._searchOne({
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