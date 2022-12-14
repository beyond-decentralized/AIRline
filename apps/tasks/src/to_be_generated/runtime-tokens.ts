import { APPLICATION_LOADER } from '@airport/apron'
import { REPOSITORY_API } from '@airport/holding-pattern'
import { ApplicationLoader } from './ApplicationLoader'
import { GOAL_API, tasks, TASK_API } from './common-tokens'
import { GoalDao, GoalTaskDao, TaskDao } from '../dao/dao'
import { GoalApi } from '../api/goal/GoalApi'
import { TaskApi } from '../api/task/TaskApi'
import { COLLECTION_API } from '@airline/conversations'

export const GOAL_DAO = tasks.token<any>({
    class: GoalDao,
    interface: 'GoalDao',
    token: 'GOAL_DAO'
})
export const GOAL_TASK_DAO = tasks.token<any>({
    class: GoalTaskDao,
    interface: 'GoalTaskDao',
    token: 'GOAL_TASK_DAO'
})
export const TASK_DAO = tasks.token<any>({
    class: TaskDao,
    interface: 'TaskDao',
    token: 'TASK_DAO'
})

GOAL_API.setClass(GoalApi)
GOAL_API.setDependencies({
    collectionApi: COLLECTION_API,
    goalDao: GOAL_DAO,
    repositoryApi: REPOSITORY_API
})
TASK_API.setClass(TaskApi)
TASK_API.setDependencies({
    collectionApi: COLLECTION_API,
    goalTaskDao: GOAL_TASK_DAO,
    taskDao: TASK_DAO,
    repositoryApi: REPOSITORY_API
})
APPLICATION_LOADER.setClass(ApplicationLoader)
