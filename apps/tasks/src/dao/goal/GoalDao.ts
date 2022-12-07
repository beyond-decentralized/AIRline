import { QTopic, Topic } from "@airline/topics";
import { Injected } from "@airport/direction-indicator";
import { Goal } from "../../ddl/goal/Goal";
import { BaseGoalDao } from "../../generated/baseDaos";
import Q from "../../generated/qApplication";
import { QGoal } from "../../generated/query/goal/QGoal";
import { Y } from "@airport/tarmaq-query";
import { QConversation, QConversationGroup, QParticipant } from "@airline/conversations";

@Injected()
export class GoalDao
    extends BaseGoalDao {

    async findAll(): Promise<Goal[]> {
        let c: QConversation,
            g: QGoal,
            cg: QConversationGroup,
            p: QParticipant
        return await this._find({
            SELECT: {
                '*': Y,
                conversationGroup: {
                    conversations: {
                        '*': Y,
                        participants: {
                            userAccount: {}
                        }
                    }
                },
                topic: {}
            },
            FROM: [
                g = Q.Goal,
                g.topic.LEFT_JOIN(),
                cg = g.conversationGroup.LEFT_JOIN(),
                c = cg.conversations.LEFT_JOIN(),
                p = c.participants.LEFT_JOIN(),
                p.userAccount.LEFT_JOIN()
            ]
        })
    }

    async findById(
        goalUuId: string | Goal
    ): Promise<Goal> {
        let c: QConversation,
            cg: QConversationGroup,
            g: QGoal,
            p: QParticipant
        return await this._findOne({
            SELECT: {
                '*': Y,
                conversationGroup: {
                    conversations: {
                        '*': Y,
                        participants: {
                            userAccount: {}
                        }
                    }
                }
            },
            FROM: [
                g = Q.Goal,
                cg = g.conversationGroup.LEFT_JOIN(),
                c = cg.conversations.LEFT_JOIN(),
                p = c.participants.LEFT_JOIN(),
                p.userAccount.LEFT_JOIN()
            ],
            WHERE: g.equals(goalUuId)
        })
    }

    async findAllForTopic(
        topic: Topic | string
    ): Promise<Goal[]> {
        let c: QConversation,
            cg: QConversationGroup,
            g: QGoal,
            to: QTopic,
            p: QParticipant
        return await this._find({
            SELECT: {
                '*': Y,
                conversationGroup: {
                    '*': Y,
                    conversations: {
                        '*': Y,
                        participants: {
                            userAccount: {}
                        }
                    }
                }
            },
            FROM: [
                g = Q.Goal,
                to = g.topic.LEFT_JOIN(),
                cg = g.conversationGroup.LEFT_JOIN(),
                c = cg.conversations.LEFT_JOIN(),
                p = c.participants.LEFT_JOIN(),
                p.userAccount.LEFT_JOIN()
            ],
            WHERE: to.equals(topic)
        })
    }

}
