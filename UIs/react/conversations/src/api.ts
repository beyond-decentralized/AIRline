import { Comment, CommentApi, Conversation, ConversationApi } from '@airline/conversations'
import { SessionStateApi } from '@airport/session-state'
import { UserAccount } from '@airport/travel-document-checkpoint'

const commentApi = new CommentApi()
const conversationApi = new ConversationApi()
const sessionStateApi = new SessionStateApi()

export async function getLoggedInUser(
    setUserAccount: (userAccount: UserAccount) => void,
    setMessage: (message: string, duration: number) => void
) {
    try {
        const userAccount = await sessionStateApi.getLoggedInUser()
        setUserAccount(userAccount)
    } catch (e) {
        console.error(e)
        setMessage('Error retrieving Logged In User', 10000)
    }
}

export async function getConversationsByTopic(
    setConversations: (conversationsByTopic: Conversation[][]) => void,
    setMessage: (message: string, duration: number) => void
) {
    try {
        const conversations = await conversationApi.findAll()
        const conversationMapByTopicId: { [topicId: string]: Conversation[] } = {}

        for (const conversation of conversations) {
            const topicId = conversation.topic
                ? conversation.topic.id as string : 'null'
            let conversationsForTopic = conversationMapByTopicId[topicId]
            if (!conversationsForTopic) {
                conversationsForTopic = []
                conversationMapByTopicId[topicId] = conversationsForTopic
            }
            conversationsForTopic.push(conversation)
        }
        const conversationsByTopic: Conversation[][] = []
        let conversationsWithNoTopic: Conversation[] | null = null
        for (let topicId in conversationMapByTopicId) {
            if (topicId === 'null') {
                conversationsWithNoTopic = conversationMapByTopicId[topicId]
            } else {
                conversationsByTopic.push(conversationMapByTopicId[topicId])
            }
        }
        if (conversationsWithNoTopic) {
            conversationsByTopic.push(conversationsWithNoTopic)
        }
        setConversations(conversationsByTopic)
    } catch (e) {
        console.error(e)
        setMessage('Error retrieving Conversations', 10000)
    }
}

export async function loadConversation(
    id: string,
    setConversation: (conversation: Conversation) => void,
    setMessage: (message: string, timeout: number) => void
): Promise<void> {
    let conversation: Conversation
    try {
        conversation = await conversationApi.loadWithDetails(id)
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
