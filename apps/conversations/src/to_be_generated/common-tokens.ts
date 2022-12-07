import { domain } from "@airport/direction-indicator"

export const conversations = domain('localhost:3002').app('@airline/conversations')

export const COMMENT_API = conversations.token<any>({
    class: null,
    interface: 'CommentApi',
    token: 'COMMENT_API'
})
export const CONVERSATION_API = conversations.token<any>({
    class: null,
    interface: 'ConversationApi',
    token: 'CONVERSATION_API'
})
export const CONVERSATION_GROUP_API = conversations.token<any>({
    class: null,
    interface: 'ConversationGroupApi',
    token: 'CONVERSATION_GROUP_API'
})
