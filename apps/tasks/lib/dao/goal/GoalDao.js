var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injected } from "@airport/direction-indicator";
import { BaseGoalDao } from "../../generated/baseDaos";
import { Q } from "../../generated/qApplication";
import { Y } from "@airport/tarmaq-query";
let GoalDao = class GoalDao extends BaseGoalDao {
    async findAll() {
        return await this.findAll();
    }
    async findById(goalUuId) {
        let g, tc, c, p, u;
        return await this._findOne({
            SELECT: {
                '*': Y,
                goalConversations: {
                    conversation: {
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
        });
    }
    async findAllForTopic(topic) {
        let g, to;
        return await this._find({
            SELECT: {},
            FROM: [
                g = Q.Goal,
                to = g.topic.LEFT_JOIN()
            ],
            WHERE: to.equals(topic)
        });
    }
};
GoalDao = __decorate([
    Injected()
], GoalDao);
export { GoalDao };
//# sourceMappingURL=GoalDao.js.map