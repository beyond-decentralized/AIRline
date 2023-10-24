import { QCollection } from "@airline/conversations";
import { QTopic, Topic } from "@airline/topics";
import { Injected } from "@airport/direction-indicator";
import { Y } from "@airport/tarmaq-query";
import { Goal } from "../../ddl/goal/Goal";
import { Task } from "../../ddl/task/Task";
import { BaseTaskDao } from "../../generated/baseDaos";
import Q from "../../generated/qApplication";
import { QGoal } from "../../generated/query/goal/QGoal";
import { QTask } from "../../generated/query/task/QTask";
import { Observable } from "rxjs";

@Injected()
export class TaskDao
    extends BaseTaskDao {

    searchById(
        taskUuId: string
    ): Observable<Task> {
        let t: QTask,
            c: QCollection
        return this._searchOne({
            SELECT: {
                '*': Y,
                collection: {}
            },
            FROM: [
                t = Q.Task,
                c = t.collection.LEFT_JOIN()
            ],
            WHERE: t.equals(taskUuId)
        })
    }

    searchAllForGoalWithGoal(
        goal: Goal | string
    ): Observable<Task[]> {
        let t: QTask,
            g: QGoal
        return this._search({
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

    searchAllForTopicWithGoal(
        topic: Topic | string
    ): Observable<Task[]> {
        let ta: QTask,
            to: QTopic
        return this._search({
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

}