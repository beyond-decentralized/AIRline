import { Api } from "@airport/air-traffic-control";
import { Inject, Injected } from "@airport/direction-indicator";
import { CommentDao } from "../dao/CommentDao";
import { Comment } from "../ddl/Comment";
import { Conversation } from "../ddl/Conversation";
import { Observable } from "rxjs";

@Injected()
export class CommentApi {

    @Inject()
    commentDao: CommentDao

    @Api()
    searchAllForConversation(
        conversation: Conversation | string
    ): Observable<Comment[]> {
        return this.commentDao.searchAllForConversation(conversation)
    }

    @Api()
    async save(
        comment: Comment
    ): Promise<void> {
        await this.commentDao.save(comment)
    }
}