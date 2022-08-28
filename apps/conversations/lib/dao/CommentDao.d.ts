import { Comment } from "../ddl/comment";
import { Conversation } from "../ddl/Conversation";
import { BaseCommentDao } from "../generated/baseDaos";
export declare class CommentDao extends BaseCommentDao {
    findAllForConversation(conversation: Conversation | string): Promise<Comment[]>;
}
//# sourceMappingURL=CommentDao.d.ts.map