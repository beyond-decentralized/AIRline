import { APPLICATION_LOADER } from '@airport/apron'
import { REPOSITORY_API } from '@airport/holding-pattern'
import { ApplicationLoader } from './ApplicationLoader'
import { GOAL_API, tasks, TASK_API } from './common-tokens'
import { GoalConversationDao, GoalDao, TaskConversationDao, TaskDao } from '../dao/dao'
import { GoalApi } from '../api/goal/GoalApi'
import { TaskApi } from '../api/task/TaskApi'
import { CONVERSATION_API } from '@airline/conversations'

export const GOAL_CONVERSATION_DAO = tasks.token<any>({
    class: GoalConversationDao,
    interface: 'GoalConversationDao',
    token: 'GOAL_CONVERSATION_DAO'
})
export const GOAL_DAO = tasks.token<any>({
    class: GoalDao,
    interface: 'GoalDao',
    token: 'GOAL_DAO'
})
export const TASK_CONVERSATION_DAO = tasks.token<any>({
    class: TaskConversationDao,
    interface: 'TaskConversationDao',
    token: 'TASK_CONVERSATION_DAO'
})
export const TASK_DAO = tasks.token<any>({
    class: TaskDao,
    interface: 'TaskDao',
    token: 'TASK_DAO'
})

GOAL_API.setClass(GoalApi)
GOAL_API.setDependencies({
    conversationApi: CONVERSATION_API,
    goalConversationDao: GOAL_CONVERSATION_DAO,
    goalDao: GOAL_DAO,
    repositoryApi: REPOSITORY_API
})
TASK_API.setClass(TaskApi)
TASK_API.setDependencies({
    conversationApi: CONVERSATION_API,
    taskConversationDao: TASK_CONVERSATION_DAO,
    taskDao: TASK_DAO
})
APPLICATION_LOADER.setClass(ApplicationLoader)
