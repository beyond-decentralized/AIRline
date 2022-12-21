import { setApplicationLoader } from '@airport/apron'
import { RepositoryApi } from '@airport/holding-pattern'
import { ApplicationLoader } from './ApplicationLoader'
import { GoalDao, GoalTaskDao, TaskDao } from '../dao/dao'
import { GoalApi } from '../api/goal/GoalApi'
import { TaskApi } from '../api/task/TaskApi'
import { CollectionApi } from '@airline/conversations'
import { app } from '@airport/direction-indicator'
import { application } from './app-declaration'

export const airApp = app(application)

airApp.register(
    GoalApi, TaskApi, GoalDao,
    GoalTaskDao, TaskDao
)

airApp.setDependencies(GoalApi, {
    collectionApi: CollectionApi,
    goalDao: GoalDao,
    repositoryApi: RepositoryApi
})
airApp.setDependencies(TaskApi, {
    collectionApi: CollectionApi,
    goalTaskDao: GoalTaskDao,
    taskDao: TaskDao,
    repositoryApi: RepositoryApi
})

setApplicationLoader(ApplicationLoader)
