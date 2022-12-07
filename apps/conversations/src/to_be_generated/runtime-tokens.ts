import { APPLICATION_LOADER } from '@airport/apron'
import { ApplicationLoader } from './ApplicationLoader'
import { COMMENT_API, conversations, CONVERSATION_API, CONVERSATION_GROUP_API } from './common-tokens'
import { CommentDao, ConversationDao } from '../dao/dao'
import { ConversationApi } from '../api/ConversationApi'
import { ConversationGroupApi } from '../api/ConversationGroupApi'
import { CommentApi } from '../api/CommentApi'
import { REQUEST_MANAGER } from '@airport/arrivals-n-departures'
import { REPOSITORY_API } from '@airport/holding-pattern'
import { ConversationGroupDao } from '../dao/ConversationGroupDao'

export const COMMENT_DAO = conversations.token<any>({
    class: CommentDao,
    interface: 'CommentDao',
    token: 'COMMENT_DAO'
})
export const CONVERSATION_DAO = conversations.token<any>({
    class: ConversationDao,
    interface: 'ConversationDao',
    token: 'CONVERSATION_DAO'
})
export const CONVERSATION_GROUP_DAO = conversations.token<any>({
    class: ConversationGroupDao,
    interface: 'ConversationGroupDao',
    token: 'CONVERSATION_GROUP_DAO'
})

CONVERSATION_API.setClass(ConversationApi)
CONVERSATION_API.setDependencies({
    conversationDao: CONVERSATION_DAO,
    requestManager: REQUEST_MANAGER
})

CONVERSATION_GROUP_API.setClass(ConversationGroupApi)
CONVERSATION_GROUP_API.setDependencies({
    conversationGroupDao: CONVERSATION_GROUP_DAO,
    repositoryApi: REPOSITORY_API
})
COMMENT_API.setClass(CommentApi)
COMMENT_API.setDependencies({
    commentDao: COMMENT_DAO
})
APPLICATION_LOADER.setClass(ApplicationLoader)
