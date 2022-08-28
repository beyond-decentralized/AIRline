import {
	COMMENT_API,
} from '../../to_be_generated/common-tokens';
import {
	DEPENDENCY_INJECTION,
	Inject,
	Injected,
} from '@airport/direction-indicator';
import {
	Api,
} from '@airport/check-in';
import {
	CommentDao,
} from '../../dao/CommentDao';
import {
	Comment,
} from '../../ddl/comment';
import {
	Conversation,
} from '../../ddl/Conversation';



// An API stub for other Applications and UIs to use
@Injected()
export class CommentApi {

    constructor() {
        DEPENDENCY_INJECTION.db().manualInject(this, COMMENT_API)
    }
        
    @Inject()
    commentApi: CommentApi
            
    async  findAllForConversation(
        conversation: Conversation | string
    ): Promise<Comment[]> {
        return await this.commentApi.findAllForConversation(conversation)
    }

    async  save(
        comment: Comment
    ): Promise<void> {
        await this.commentApi.save(comment)
    }

}
