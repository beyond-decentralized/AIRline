import { CommentDao } from "../dao/CommentDao";
import { Comment } from "../ddl/comment";
import { Conversation } from "../ddl/Conversation";
export declare class CommentApi {
    commentDao: CommentDao;
    findAllForConversation(conversation: Conversation | string): Promise<Comment[]>;
    save(comment: Comment): Promise<void>;
}
//# sourceMappingURL=CommentApi.d.ts.map