import { APPLICATION_LOADER } from '@airport/apron'
import { API_REGISTRY } from '@airport/check-in'
import { APPLICATION_INITIALIZER, TERMINAL_STORE } from '@airport/terminal-map'
import { ApplicationLoader } from './ApplicationLoader'
import { REQUEST_MANAGER } from '@airport/arrivals-n-departures'
import { TOPIC_API, topics, THEME_API } from './common-tokens'
import { TopicDao, ThemeDao } from '../dao/dao'
import { ThemeApi } from '../api/ThemeApi'
import { TopicApi } from '../api/TopicApi'

export const THEME_DAO = topics.token<any>({
    class: ThemeDao,
    interface: 'ThemeDao',
    token: 'THEME_DAO'
})
export const TOPIC_DAO = topics.token<any>({
    class: TopicDao,
    interface: 'TopicDao',
    token: 'TOPIC_DAO'
})

THEME_API.setClass(ThemeApi)
THEME_API.setDependencies({
    goalDao: THEME_DAO
})
TOPIC_API.setClass(TopicApi)
TOPIC_API.setDependencies({
    taskDao: TOPIC_DAO
})
APPLICATION_LOADER.setClass(ApplicationLoader)
APPLICATION_LOADER.setDependencies({
    applicationInitializer: APPLICATION_INITIALIZER,
    apiRegistry: API_REGISTRY,
    terminalStore: TERMINAL_STORE,
})
