import { Injected } from "@airport/direction-indicator"
import { Comment } from "../ddl/Comment"
import { Conversation } from "../ddl/Conversation"
import { BaseCommentDao } from "../generated/baseDaos"
import { QComment } from "../generated/query/QComment"
import { QConversation } from "../generated/query/QConversation"
import { Observable } from "rxjs"

@Injected()
export class CommentDao
    extends BaseCommentDao {

    searchAllForConversation(
        conversation: Conversation | string
    ): Observable<Comment[]> {
        let com: QComment,
            con: QConversation
        return this._search({
            SELECT: {},
            FROM: [
                com = this.qSchema.Comment,
                con = com.conversation.LEFT_JOIN()
            ],
            WHERE: con.equals(conversation),
            ORDER_BY: [com.createdAt.ASC()]
        })
    }

}