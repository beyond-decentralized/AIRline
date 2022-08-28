var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injected } from "@airport/direction-indicator";
import { BaseTopicDao } from "../generated/baseDaos";
import { Q } from "../generated/qApplication";
let TopicDao = class TopicDao extends BaseTopicDao {
    async findAllForTheme(theme) {
        let com, con;
        return await this._find({
            SELECT: {},
            FROM: [
                com = Q.Topic,
                con = com.theme.LEFT_JOIN()
            ],
            WHERE: con.equals(theme)
        });
    }
};
TopicDao = __decorate([
    Injected()
], TopicDao);
export { TopicDao };
//# sourceMappingURL=TopicDao.js.map