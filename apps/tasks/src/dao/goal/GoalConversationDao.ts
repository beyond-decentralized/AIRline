import { QComment, QConversation, QModerator, QParticipant } from "@airline/conversations";
import { Injected } from "@airport/direction-indicator";
import { Y } from "@airport/tarmaq-query";
import { Goal, GoalConversation } from "../../ddl/ddl";
import { BaseGoalConversationDao } from "../../generated/baseDaos";
import Q from "../../generated/qApplication";
import { QGoal, QGoalConversation } from "../../generated/qInterfaces";

@Injected()
export class GoalConversationDao
    extends BaseGoalConversationDao {

    async loadConversationForGoal(
        task: Goal | string
    ): Promise<GoalConversation> {
        let gc: QGoalConversation,
            c: QConversation,
            g: QGoal,
            co: QComment,
            m: QModerator,
            p: QParticipant
        return await this._findOne({
            SELECT: {
                conversation: {
                    comments: {},
                    moderators: {},
                    name: Y,
                    participants: {}
                }
            },
            FROM: [
                gc = Q.GoalConversation,
                c = gc.conversation.INNER_JOIN(),
                g = gc.goal.INNER_JOIN(),
                co = c.comments.LEFT_JOIN(),
                m = c.moderators.LEFT_JOIN(),
                p = c.participants.LEFT_JOIN()
            ],
            WHERE: g.equals(task)
        })
    }
}