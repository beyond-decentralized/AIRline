import { TOPIC_API, topics, THEME_API } from './common-tokens'
import { TopicDao, ThemeDao } from '../dao/dao'
import { ThemeApi } from '../api/ThemeApi'
import { TopicApi } from '../api/TopicApi'
import { APPLICATION_LOADER } from '@airport/web-tower'
import { ApplicationLoader } from './ApplicationLoader'

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
