var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injected } from "@airport/direction-indicator";
import { BaseCommentDao } from "../generated/baseDaos";
import { Q } from "../generated/qApplication";
let CommentDao = class CommentDao extends BaseCommentDao {
    async findAllForConversation(conversation) {
        let com, con;
        return await this._find({
            SELECT: {},
            FROM: [
                com = Q.Comment,
                con = com.conversation.LEFT_JOIN()
            ],
            WHERE: con.equals(conversation)
        });
    }
};
CommentDao = __decorate([
    Injected()
], CommentDao);
export { CommentDao };
//# sourceMappingURL=CommentDao.js.map