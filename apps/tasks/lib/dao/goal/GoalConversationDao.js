var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injected } from "@airport/direction-indicator";
import { Y } from "@airport/tarmaq-query";
import { BaseGoalConversationDao } from "../../generated/baseDaos";
import { Q } from "../../generated/qApplication";
let GoalConversationDao = class GoalConversationDao extends BaseGoalConversationDao {
    async loadConversationForGoal(task) {
        let gc, c, g, co, m, p;
        return await this._findOne({
            SELECT: {
                conversation: {
                    comments: {},
                    moderators: {},
                    name: Y,
                    participants: {}
                }
            },
            FROM: [
                gc = Q.GoalConversation,
                c = gc.conversation.INNER_JOIN(),
                g = gc.goal.INNER_JOIN(),
                co = c.comments.LEFT_JOIN(),
                m = c.moderators.LEFT_JOIN(),
                p = c.participants.LEFT_JOIN()
            ],
            WHERE: g.equals(task)
        });
    }
};
GoalConversationDao = __decorate([
    Injected()
], GoalConversationDao);
export { GoalConversationDao };
//# sourceMappingURL=GoalConversationDao.js.map