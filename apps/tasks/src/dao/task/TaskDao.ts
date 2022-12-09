import { QTopic, Topic } from "@airline/topics";
import { Injected } from "@airport/direction-indicator";
import { Y } from "@airport/tarmaq-query";
import { Goal } from "../../ddl/goal/Goal";
import { Task } from "../../ddl/task/Task";
import { BaseTaskDao } from "../../generated/baseDaos";
import Q from "../../generated/qApplication";
import { QGoal } from "../../generated/query/goal/QGoal";
import { QTask } from "../../generated/query/task/QTask";

@Injected()
export class TaskDao
    extends BaseTaskDao {

    async findById(
        taskUuId: string
    ): Promise<Task> {
        let t: QTask
        return await this._findOne({
            SELECT: {
                '*': Y,
                conversationGroup: {}
            },
            FROM: [
                t = Q.Task
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