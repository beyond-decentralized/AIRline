import { Injected } from "@airport/direction-indicator";
import { Comment } from "../ddl/comment";
import { Conversation } from "../ddl/Conversation";
import { BaseCommentDao } from "../generated/baseDaos";
import Q from "../generated/qApplication";
import { QComment } from "../generated/qcomment";
import { QConversation } from "../generated/qconversation";

@Injected()
export class CommentDao
    extends BaseCommentDao {

    async findAllForConversation(
        conversation: Conversation | string
    ): Promise<Comment[]> {
        let com: QComment,
            con: QConversation
        return await this._find({
            SELECT: {},
            FROM: [
                com = Q.Comment,
                con = com.conversation.LEFT_JOIN()
            ],
            WHERE: con.equals(conversation)
        })
    }

}