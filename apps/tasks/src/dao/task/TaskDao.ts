import { QTopic, Topic } from "@airline/topics";
import { Injected } from "@airport/direction-indicator";
import { Y } from "@airport/tarmaq-query";
import { Goal } from "../../ddl/goal/Goal";
import { Task } from "../../ddl/task/Task";
import { BaseTaskDao } from "../../generated/baseDaos";
import Q from "../../generated/qApplication";
import { QGoal } from "../../generated/query/goal/QGoal";
import { QGoalTask } from "../../generated/query/goal/QGoalTask";
import { QTask } from "../../generated/query/task/QTask";
import { QTaskConversation } from "../../generated/qInterfaces";
import { QConversation, QParticipant } from "@airline/conversations";
import { QUserAccount } from "@airport/travel-document-checkpoint";

@Injected()
export class TaskDao
    extends BaseTaskDao {

    async findById(
        taskUuId: string
    ): Promise<Task> {
        let t: QTask,
            tc: QTaskConversation,
            c: QConversation,
            p: QParticipant,
            u: QUserAccount
        return await this._findOne({
            SELECT: {
                '*': Y,
                taskConversations: {
                    conversation: {
                        participants: {
                            userAccount: {}
                        }
                    }
                }
            },
            FROM: [
                t = Q.Task,
                tc = t.taskConversations.LEFT_JOIN(),
                c = tc.conversation.LEFT_JOIN(),
                p = c.participants.LEFT_JOIN(),
                u = p.userAccount.LEFT_JOIN()
            ],
            WHERE: t.equals(taskUuId)
        })
    }

    async findAllForGoalWithGoal(
        goal: Goal | string
    ): Promise<Task[]> {
        let t: QTask,
            g: QGoal
        return await this._find({
            SELECT: {
                '*': Y,
                goal: {}
            },
            FROM: [
                t = Q.Task,
                g = t.goal.LEFT_JOIN()
            ],
            WHERE: g.equals(goal)
        })
    }

    async findAllForTopicWithGoal(
        topic: Topic | string
    ): Promise<Task[]> {
        let ta: QTask,
            to: QTopic
        return await this._find({
            SELECT: {
                '*': Y,
                goal: {}
            },
            FROM: [
                ta = Q.Task,
                ta.goal.LEFT_JOIN(),
                to = ta.topic.LEFT_JOIN()
            ],
            WHERE: to.equals(topic)
        })
    }

    async findAllWithGoal() {
        let ta: QTask
        return await this._find({
            SELECT: {
                '*': Y,
                goal: {}
            },
            FROM: [
                ta = Q.Task,
                ta.goal.LEFT_JOIN()
            ]
        })
    }

}