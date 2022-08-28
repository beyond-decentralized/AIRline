var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injected } from "@airport/direction-indicator";
import { BaseConversationDao } from "../generated/baseDaos";
import { Q } from "../generated/qApplication";
let ConversationDao = class ConversationDao extends BaseConversationDao {
    async findAllForTopic(topic) {
        let c, t;
        return await this._find({
            SELECT: {},
            FROM: [
                c = Q.Conversation,
                t = c.topic.LEFT_JOIN()
            ],
            WHERE: t.equals(topic)
        });
    }
};
ConversationDao = __decorate([
    Injected()
], ConversationDao);
export { ConversationDao };
//# sourceMappingURL=ConversationDao.js.map