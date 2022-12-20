import { setApplicationLoader } from '@airport/apron'
import { ApplicationLoader } from './ApplicationLoader'
import { CommentDao, ConversationDao } from '../dao/dao'
import { ConversationApi } from '../api/ConversationApi'
import { CollectionApi } from '../api/CollectionApi'
import { CommentApi } from '../api/CommentApi'
import { RequestManager } from '@airport/arrivals-n-departures'
import { RepositoryApi } from '@airport/holding-pattern'
import { CollectionDao } from '../dao/CollectionDao'
import { CollectionConversationDao } from '../dao/CollectionConversationDao'
import { app } from '@airport/direction-indicator'
import { application } from './app-declaration'

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
