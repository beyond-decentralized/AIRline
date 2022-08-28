import { Comment, CommentApi, Conversation, ConversationApi } from '@airline/conversations'
import { Goal, GoalApi, Task, TaskApi } from '@airline/tasks'

const goalApi = new GoalApi()
const taskApi = new TaskApi()
const commentApi = new CommentApi()
const conversationApi = new ConversationApi()

export async function loadConversationForType(
    conversationType: string,
    id: string,
    setConversation: (conversation: Conversation) => void,
    setMessage: (message: string, timeout: number) => void
): Promise<void> {
    let conversation: Conversation
    try {
        switch (conversationType) {
            case 'goal':
                conversation = await goalApi.loadConversationForGoal(id)
                break
            case 'task':
                conversation = await taskApi.loadConversationForTask(id)
                break
            default:
                let message = `Unsupported type: ${conversationType}`
                setMessage(message, 10000)
                throw new Error(message)
        }
        setConversation(conversation)
    } catch (e: any) {
        console.error(e)
        setMessage(e.message, 10000)
    }
}

export async function addComment(
    conversation: Conversation,
    commentText: string,
    setConversation: (conversation: Conversation) => void,
    setCommentText: (commentText: string) => void,
    setMessage: (message: string, timeout: number) => void
): Promise<void> {
    const comment = new Comment()
    comment.conversation = conversation
    comment.text = commentText

    try {
        await commentApi.save(comment)
        conversation.comments.push(comment)
        setConversation(conversation)
        setCommentText('')
        setMessage('Comment added', 3000)
    } catch (e: any) {
        console.error(e)
        setMessage(e.message, 10000)
        throw new Error(e.message)
    }
}
