import { QTopic, Topic } from "@airline/topics";
import { Injected } from "@airport/direction-indicator";
import { Y } from "@airport/tarmaq-query";
import { Goal } from "../../ddl/goal/Goal";
import { BaseGoalDao } from "../../generated/baseDaos";
import Q from "../../generated/qApplication";
import { QGoal } from "../../generated/query/goal/QGoal";

@Injected()
export class GoalDao
    extends BaseGoalDao {

    async findAll(): Promise<Goal[]> {
        let g: QGoal
        return await this._find({
            SELECT: {
                '*': Y,
                collection: {},
                topic: {}
            },
            FROM: [
                g = Q.Goal,
                g.collection.LEFT_JOIN(),
                g.topic.LEFT_JOIN()
            ]
        })
    }

    async findById(
        goalUuId: string | Goal
    ): Promise<Goal> {
        let g: QGoal
        return await this._findOne({
            SELECT: {
                '*': Y,
                collection: {},
                topic: {}
            },
            FROM: [
                g = Q.Goal,
                g.collection.LEFT_JOIN(),
                g.topic.LEFT_JOIN()
            ],
            WHERE: g.equals(goalUuId)
        })
    }

    async findAllForTopic(
        topic: Topic | string
    ): Promise<Goal[]> {
        let g: QGoal,
            to: QTopic
        return await this._find({
            SELECT: {
                '*': Y,
                collection: {
                },
                topic: {}
            },
            FROM: [
                g = Q.Goal,
                to = g.topic.LEFT_JOIN(),
                g.collection.LEFT_JOIN()
            ],
            WHERE: to.equals(topic)
        })
    }

}
