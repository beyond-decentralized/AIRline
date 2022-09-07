import { APPLICATION_LOADER } from '@airport/apron'
import { ApplicationLoader } from './ApplicationLoader'
import { COMMENT_API, conversations, CONVERSATION_API } from './common-tokens'
import { CommentDao, ConversationDao } from '../dao/dao'
import { ConversationApi } from '../api/ConversationApi'
import { CommentApi } from '../api/CommentApi'

export const CONVERSATION_DAO = conversations.token<any>({
    class: ConversationDao,
    interface: 'ConversationDao',
    token: 'CONVERSATION_DAO'
})
export const COMMENT_DAO = conversations.token<any>({
    class: CommentDao,
    interface: 'CommentDao',
    token: 'COMMENT_DAO'
})

CONVERSATION_API.setClass(ConversationApi)
CONVERSATION_API.setDependencies({
    goalDao: CONVERSATION_DAO
})
COMMENT_API.setClass(CommentApi)
COMMENT_API.setDependencies({
    taskDao: COMMENT_DAO
})
APPLICATION_LOADER.setClass(ApplicationLoader)
