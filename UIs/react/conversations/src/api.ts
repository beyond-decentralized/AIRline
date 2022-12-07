import { Comment, CommentApi, Conversation, ConversationApi, ConversationGroup, ConversationGroupApi } from '@airline/conversations'
import { SessionStateApi } from '@airport/session-state'
import { UserAccount } from '@airport/travel-document-checkpoint'

const commentApi = new CommentApi()
const conversationGroupApi = new ConversationGroupApi()
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

export async function getConversationGroupsByTopic(
    setConversationGroups: (conversationsByTopic: ConversationGroup[][]) => void,
    setMessage: (message: string, duration: number) => void
) {
    try {
        const conversationGroups = await conversationGroupApi.findAll()
        const conversationGroupMapByTopicId: { [topicId: string]: ConversationGroup[] } = {}

        for (const conversationGroup of conversationGroups) {
            const topicId = conversationGroup.topic
                ? conversationGroup.topic.id as string : 'null'
            let conversationsForTopic = conversationGroupMapByTopicId[topicId]
            if (!conversationsForTopic) {
                conversationsForTopic = []
                conversationGroupMapByTopicId[topicId] = conversationsForTopic
            }
            conversationsForTopic.push(conversationGroup)
        }
        const conversationGroupsByTopic: ConversationGroup[][] = []
        let conversationGroupsWithNoTopic: ConversationGroup[] | null = null
        for (let topicId in conversationGroupMapByTopicId) {
            if (topicId === 'null') {
                conversationGroupsWithNoTopic = conversationGroupMapByTopicId[topicId]
            } else {
                conversationGroupsByTopic.push(conversationGroupMapByTopicId[topicId])
            }
        }
        if (conversationGroupsWithNoTopic) {
            conversationGroupsByTopic.push(conversationGroupsWithNoTopic)
        }
        setConversationGroups(conversationGroupsByTopic)
    } catch (e) {
        console.error(e)
        setMessage('Error retrieving Conversations', 10000)
    }
}

export async function loadConversationGroup(
    id: string,
    setConversationGroup: (conversationGroup: ConversationGroup) => void,
    setMessage: (message: string, timeout: number) => void
): Promise<void> {
    let conversationGroup: ConversationGroup
    try {
        conversationGroup = await conversationGroupApi.loadWithDetails(id)
        setConversationGroup(conversationGroup)
    } catch (e: any) {
        console.error(e)
        setMessage(e.message, 10000)
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
    comment.repository = conversation.repository

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
