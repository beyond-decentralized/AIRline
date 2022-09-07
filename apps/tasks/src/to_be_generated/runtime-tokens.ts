import { APPLICATION_LOADER } from '@airport/apron'
import { ApplicationLoader } from './ApplicationLoader'
import { GOAL_API, tasks, TASK_API } from './common-tokens'
import { GoalDao, TaskDao } from '../dao/dao'
import { GoalApi } from '../api/goal/GoalApi'
import { TaskApi } from '../api/task/TaskApi'

export const GOAL_DAO = tasks.token<any>({
    class: GoalDao,
    interface: 'GoalDao',
    token: 'GOAL_DAO'
})
export const TASK_DAO = tasks.token<any>({
    class: TaskDao,
    interface: 'TaskDao',
    token: 'TASK_DAO'
})

GOAL_API.setClass(GoalApi)
GOAL_API.setDependencies({
    goalDao: GOAL_DAO
})
TASK_API.setClass(TaskApi)
TASK_API.setDependencies({
    taskDao: TASK_DAO
})
APPLICATION_LOADER.setClass(ApplicationLoader)
