import { APPLICATION_LOADER } from '@airport/apron';
import { API_REGISTRY } from '@airport/check-in';
import { APPLICATION_INITIALIZER, TERMINAL_STORE } from '@airport/terminal-map';
import { ApplicationLoader } from './ApplicationLoader';
import { GOAL_API, tasks, TASK_API } from './common-tokens';
import { GoalDao, TaskDao } from '../dao/dao';
import { GoalApi } from '../api/goal/GoalApi';
import { TaskApi } from '../api/task/TaskApi';
export const GOAL_DAO = tasks.token({
    class: GoalDao,
    interface: 'GoalDao',
    token: 'GOAL_DAO'
});
export const TASK_DAO = tasks.token({
    class: TaskDao,
    interface: 'TaskDao',
    token: 'TASK_DAO'
});
GOAL_API.setClass(GoalApi);
GOAL_API.setDependencies({
    goalDao: GOAL_DAO
});
TASK_API.setClass(TaskApi);
TASK_API.setDependencies({
    taskDao: TASK_DAO
});
APPLICATION_LOADER.setClass(ApplicationLoader);
APPLICATION_LOADER.setDependencies({
    applicationInitializer: APPLICATION_INITIALIZER,
    apiRegistry: API_REGISTRY,
    terminalStore: TERMINAL_STORE,
});
//# sourceMappingURL=runtime-tokens.js.map