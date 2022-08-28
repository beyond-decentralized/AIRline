import { Api } from "@airport/check-in";
import { Inject, Injected } from "@airport/direction-indicator";
import { CommentDao } from "../dao/CommentDao";
import { Comment } from "../ddl/comment";
import { Conversation } from "../ddl/Conversation";

@Injected()
export class CommentApi {

    @Inject()
    commentDao: CommentDao

    @Api()
    async findAllForConversation(
        conversation: Conversation | string
    ): Promise<Comment[]> {
        return await this.commentDao.findAllForConversation(conversation)
    }

    @Api()
    async save(
        comment: Comment
    ): Promise<void> {
        await this.commentDao.save(comment)
    }
}