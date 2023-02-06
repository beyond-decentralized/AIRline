import { ApplicationLoader } from './ApplicationLoader'
import { CommentDao, ConversationDao } from '../dao/dao'
import { ConversationApi } from '../api/ConversationApi'
import { CollectionApi } from '../api/CollectionApi'
import { CommentApi } from '../api/CommentApi'
import { RepositoryApi } from '@airport/holding-pattern'
import { CollectionDao } from '../dao/CollectionDao'
import { CollectionConversationDao } from '../dao/CollectionConversationDao'
import { app } from '@airport/direction-indicator'
import { application } from './app-declaration'
import { RequestManager } from '@airport/tower'
import { setApplicationLoader } from '@airport/terminal-map'

export const airApp = app(application)

airApp.register(
    ConversationApi, CollectionApi, CommentApi,
    CommentDao, ConversationDao, CollectionDao,
    CollectionConversationDao
)

airApp.setDependencies(ConversationApi, {
    conversationDao: ConversationDao,
    collectionConversationDao: CollectionConversationDao,
    repositoryApi: RepositoryApi,
    requestManager: RequestManager
})

airApp.setDependencies(CollectionApi, {
    collectionDao: CollectionDao,
    repositoryApi: RepositoryApi
})

airApp.setDependencies(CommentApi, {
    commentDao: CommentDao
})

setApplicationLoader(ApplicationLoader)
