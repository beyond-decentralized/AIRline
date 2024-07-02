import { QTopic, Topic } from "@airline/topics"
import { Injected } from "@airport/direction-indicator"
import { Y } from "@airport/tarmaq-query"
import { Goal } from "../../ddl/goal/Goal"
import { BaseGoalDao } from "../../generated/baseDaos"
import { QGoal } from "../../generated/query/goal/QGoal"
import { Observable } from "rxjs"

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
                g = this.qSchema.Goal,
                g.collection.LEFT_JOIN(),
                g.topic.LEFT_JOIN()
            ]
        })
    }

    searchById(
        goalUuId: string | Goal
    ): Observable<Goal> {
        let g: QGoal
        return this._searchOne({
            SELECT: {
                '*': Y,
                collection: {},
                topic: {}
            },
            FROM: [
                g = this.qSchema.Goal,
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
            t: QTopic
        return await this._find({
            SELECT: {
                '*': Y,
                collection: {},
                topic: {}
            },
            FROM: [
                g = this.qSchema.Goal,
                t = g.topic.LEFT_JOIN(),
                g.collection.LEFT_JOIN()
            ],
            WHERE: t.equals(topic)
        })
    }

}
