import { Injected } from "@airport/direction-indicator";
import { BaseTaskDao } from "../generated/baseDaos";
import { Q } from "../generated/qApplication";
import { QTask } from "../generated/qtask";

@Injected()
export class TaskDao
    extends BaseTaskDao {

    async findById(
        taskUuId: string
    ) {
        let t: QTask
        return this._find({
            SELECT: {},
            FROM: [
                t = Q.Task
            ],
            WHERE: t.equals(taskUuId)
        })
    }

}