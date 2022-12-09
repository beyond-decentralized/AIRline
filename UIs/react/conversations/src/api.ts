import { Comment, CommentApi, Conversation, ConversationApi, ConversationGroup, ConversationGroupApi, Participant } from '@airline/conversations'
import { SessionStateApi } from '@airport/session-state'
import { UserAccount } from '@airport/travel-document-checkpoint'

const commentApi = new CommentApi()
const conversationGroupApi = new ConversationGroupApi()
const conversationApi = new ConversationApi()
const sessionStateApi = new SessionStateApi()

let loggedInUser: UserAccount

export async function getLoggedInUser(
    setUserAccount: (userAccount: UserAccount) => void,
    setMessage: (message: string, duration: number) => void
) {
    try {
        loggedInUser = await sessionStateApi.getLoggedInUser()
        setUserAccount(loggedInUser)
    } catch (e) {
        console.error(e)
        setMessage('Error retrieving Logged In User', 10000)
    }
}

async function wait(
    millis: number
): Promise<void> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, millis)
    })
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
    newConversation: Conversation,
    setConversationGroup: (conversationGroup: ConversationGroup) => void,
    setMessage: (message: string, timeout: number) => void
): Promise<void> {
    try {
        const conversationGroup = await conversationGroupApi.loadWithDetails(id)
        newConversation.conversationGroup = conversationGroup
        setConversationGroup(conversationGroup)
    } catch (e: any) {
        console.error(e)
        setMessage(e.message, 10000)
    }
}

export async function saveConversation(
    conversation: Conversation,
    participantUserAccounts: UserAccount[],
    moderatorUserAccounts: UserAccount[],
    conversationGroup: ConversationGroup,
    setConversationGroup: (conversationGroup: ConversationGroup) => void,
    showToast: (message: string, duration?: number) => void
): Promise<void> {
    try {
        if (conversation.id) {
            await conversationApi.save(
                conversation,
                participantUserAccounts,
                moderatorUserAccounts
            )
        } else {
            await conversationApi.create(
                conversation.conversationGroup,
                participantUserAccounts,
                moderatorUserAccounts
            )
        }
        setConversationGroup(conversationGroup)
    } catch (e: any) {
        showToast(e.message)
    }
}

export async function populateConversationDetails(
    conversation: Conversation,
    setParticipantUserAccounts: React.Dispatch<React.SetStateAction<UserAccount[]>>,
    setModeratorUserAccounts: React.Dispatch<React.SetStateAction<UserAccount[]>>,
    showToast: (message: string, duration?: number) => void
): Promise<void> {
    if (!conversation.id) {
        while (!loggedInUser) {
            await wait(100)
        }
        setParticipantUserAccounts([loggedInUser])
        setModeratorUserAccounts([loggedInUser])
        return
    }

    try {
        setParticipantUserAccounts(conversation.participants.map(participant => participant.userAccount))
        setModeratorUserAccounts(conversation.moderators.map(moderator => moderator.userAccount))
    } catch (e: any) {
        showToast(e.message)
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
