import { APPLICATION_LOADER } from '@airport/apron'
import { ApplicationLoader } from './ApplicationLoader'
import { COMMENT_API, conversations, CONVERSATION_API, COLLECTION_API } from './common-tokens'
import { CommentDao, ConversationDao } from '../dao/dao'
import { ConversationApi } from '../api/ConversationApi'
import { CollectionApi } from '../api/CollectionApi'
import { CommentApi } from '../api/CommentApi'
import { REQUEST_MANAGER } from '@airport/arrivals-n-departures'
import { REPOSITORY_API } from '@airport/holding-pattern'
import { CollectionDao } from '../dao/CollectionDao'
import { CollectionConversationDao } from '../dao/CollectionConversationDao'

export const COMMENT_DAO = conversations.token<CommentDao>({
    class: CommentDao,
    interface: 'CommentDao',
    token: 'COMMENT_DAO'
})
export const CONVERSATION_DAO = conversations.token<ConversationDao>({
    class: ConversationDao,
    interface: 'ConversationDao',
    token: 'CONVERSATION_DAO'
})
export const COLLECTION_DAO = conversations.token<CollectionDao>({
    class: CollectionDao,
    interface: 'CollectionDao',
    token: 'COLLECTION_DAO'
})
export const COLLECTION_CONVERSATION_DAO = conversations.token<CollectionConversationDao>({
    class: CollectionConversationDao,
    interface: 'CollectionConversationDao',
    token: 'COLLECTION_CONVERSATION_DAO'
})

CONVERSATION_API.setClass(ConversationApi)
CONVERSATION_API.setDependencies({
    conversationDao: CONVERSATION_DAO,
    collectionConversationDao: COLLECTION_CONVERSATION_DAO,
    repositoryApi: REPOSITORY_API,
    requestManager: REQUEST_MANAGER
})

COLLECTION_API.setClass(CollectionApi)
COLLECTION_API.setDependencies({
    collectionDao: COLLECTION_DAO,
    repositoryApi: REPOSITORY_API
})
COMMENT_API.setClass(CommentApi)
COMMENT_API.setDependencies({
    commentDao: COMMENT_DAO
})
APPLICATION_LOADER.setClass(ApplicationLoader)
