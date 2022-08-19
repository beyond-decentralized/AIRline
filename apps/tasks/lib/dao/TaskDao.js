var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injected } from "@airport/direction-indicator";
import { BaseTaskDao } from "../generated/baseDaos";
import { Q } from "../generated/qApplication";
let TaskDao = class TaskDao extends BaseTaskDao {
    async findById(taskUuId) {
        let t;
        return this._find({
            SELECT: {},
            FROM: [
                t = Q.Task
            ],
            WHERE: t.equals(taskUuId)
        });
    }
};
TaskDao = __decorate([
    Injected()
], TaskDao);
export { TaskDao };
//# sourceMappingURL=TaskDao.js.map