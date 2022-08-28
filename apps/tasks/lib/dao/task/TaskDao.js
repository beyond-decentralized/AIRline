var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injected } from "@airport/direction-indicator";
import { Y } from "@airport/tarmaq-query";
import { BaseTaskDao } from "../../generated/baseDaos";
import { Q } from "../../generated/qApplication";
let TaskDao = class TaskDao extends BaseTaskDao {
    async findById(taskUuId) {
        let t, tc, c, p, u;
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
        });
    }
    async findAllForGoal(goal) {
        let t, gt, g;
        return await this._find({
            SELECT: {
                '*': Y,
                goalTasks: {}
            },
            FROM: [
                t = Q.Task,
                gt = t.goalTasks.LEFT_JOIN(),
                g = gt.goal.LEFT_JOIN()
            ],
            WHERE: g.equals(goal)
        });
    }
    async findAllForTopic(topic) {
        let ta, to;
        return await this._find({
            SELECT: {},
            FROM: [
                ta = Q.Task,
                to = ta.topic.LEFT_JOIN()
            ],
            WHERE: to.equals(topic)
        });
    }
};
TaskDao = __decorate([
    Injected()
], TaskDao);
export { TaskDao };
//# sourceMappingURL=TaskDao.js.map