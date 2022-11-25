import { QTopic, Topic } from "@airline/topics";
import { Injected } from "@airport/direction-indicator";
import { Goal } from "../../ddl/goal/Goal";
import { BaseGoalDao } from "../../generated/baseDaos";
import Q from "../../generated/qApplication";
import { QGoal } from "../../generated/query/goal/QGoal";
import { Y } from "@airport/tarmaq-query";
import { QGoalConversation } from "../../generated/qInterfaces";
import { QConversation, QParticipant } from "@airline/conversations";
import { QUserAccount } from "@airport/travel-document-checkpoint";

@Injected()
export class GoalDao
    extends BaseGoalDao {

    async findAll(): Promise<Goal[]> {
        let c: QConversation,
            g: QGoal,
            gc: QGoalConversation,
            to: QTopic,
            p: QParticipant,
            u: QUserAccount
        return await this._find({
            SELECT: {
                '*': Y,
                goalConversations: {
                    '*': Y,
                    conversation: {
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
                gc = g.goalConversations.LEFT_JOIN(),
                c = gc.conversation.LEFT_JOIN(),
                p = c.participants.LEFT_JOIN(),
                u = p.userAccount.LEFT_JOIN()
            ]
        })
    }

    async findById(
        goalUuId: string | Goal
    ): Promise<Goal> {
        let g: QGoal,
            tc: QGoalConversation,
            c: QConversation,
            p: QParticipant,
            u: QUserAccount
        return await this._findOne({
            SELECT: {
                '*': Y,
                goalConversations: {
                    conversation: {
                        '*': Y,
                        participants: {
                            userAccount: {}
                        }
                    }
                }
            },
            FROM: [
                g = Q.Goal,
                tc = g.goalConversations.LEFT_JOIN(),
                c = tc.conversation.LEFT_JOIN(),
                p = c.participants.LEFT_JOIN(),
                u = p.userAccount.LEFT_JOIN()
            ],
            WHERE: g.equals(goalUuId)
        })
    }

    async findAllForTopic(
        topic: Topic | string
    ): Promise<Goal[]> {
        let c: QConversation,
            g: QGoal,
            gc: QGoalConversation,
            to: QTopic,
            p: QParticipant,
            u: QUserAccount
        return await this._find({
            SELECT: {
                '*': Y,
                goalConversations: {
                    '*': Y,
                    conversation: {
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
                gc = g.goalConversations.LEFT_JOIN(),
                c = gc.conversation.LEFT_JOIN(),
                p = c.participants.LEFT_JOIN(),
                u = p.userAccount.LEFT_JOIN()
            ],
            WHERE: to.equals(topic)
        })
    }

    async findForConversationIds(
        conversationIds: string[]
    ): Promise<Goal[]> {
        let c: QConversation,
            g: QGoal,
            gc: QGoalConversation
        return await this._find({
            SELECT: {
                name: Y,
            },
            FROM: [
                g = Q.Goal,
                gc = g.goalConversations.LEFT_JOIN(),
                c = gc.conversation.LEFT_JOIN()
            ],
            WHERE: c.in(conversationIds)
        })
    }

}
