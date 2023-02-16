import { Comment, CommentApi, Conversation, ConversationApi, Collection, CollectionApi } from '@airline/conversations'
import { SessionStateApi } from '@airport/session-state'
import { UserAccount } from '@airport/travel-document-checkpoint'

const commentApi = new CommentApi()
const collectionApi = new CollectionApi()
const conversationApi = new ConversationApi()
const sessionStateApi = new SessionStateApi()

let loggedInUser: UserAccount

async function getLoggedInUser() {
    try {
        loggedInUser = await sessionStateApi.getLoggedInUser()
    } catch (e) {
        console.error(e)
    }
}

getLoggedInUser().then()

async function wait(
    millis: number
): Promise<void> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, millis)
    })
}

export async function getCollectionsByTopic(
    setCollections: (conversationsByTopic: Collection[][]) => void,
    setMessage: (message: string, duration: number) => void
) {
    try {
        const collections = await collectionApi.findAll()
        const collectionMapByTopicId: { [topicId: string]: Collection[] } = {}

        for (const collection of collections) {
            const topicId = collection.topic
                ? collection.topic.id as string : 'null'
            let conversationsForTopic = collectionMapByTopicId[topicId]
            if (!conversationsForTopic) {
                conversationsForTopic = []
                collectionMapByTopicId[topicId] = conversationsForTopic
            }
            conversationsForTopic.push(collection)
        }
        const collectionsByTopic: Collection[][] = []
        let collectionsWithNoTopic: Collection[] | null = null
        for (let topicId in collectionMapByTopicId) {
            if (topicId === 'null') {
                collectionsWithNoTopic = collectionMapByTopicId[topicId]
            } else {
                collectionsByTopic.push(collectionMapByTopicId[topicId])
            }
        }
        if (collectionsWithNoTopic) {
            collectionsByTopic.push(collectionsWithNoTopic)
        }
        setCollections(collectionsByTopic)
    } catch (e) {
        console.error(e)
        setMessage('Error retrieving Conversations', 10000)
    }
}

export async function loadCollection(
    id: string,
    newConversation: Conversation,
    setCollection: (collection: Collection) => void,
    setMessage: (message: string, timeout: number) => void
): Promise<void> {
    try {
        const collection = await collectionApi.loadWithDetails(id)
        newConversation.collection = collection
        setCollection(collection)
    } catch (e: any) {
        console.error(e)
        setMessage(e.message, 10000)
    }
}

export async function saveConversation(
    conversation: Conversation,
    participantUserAccounts: UserAccount[],
    moderatorUserAccounts: UserAccount[],
    collection: Collection,
    setCollection: (collection: Collection) => void,
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
                conversation.collection,
                participantUserAccounts,
                moderatorUserAccounts
            )
        }
        setCollection(collection)
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
