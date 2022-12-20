import { TOPIC_API, topics, THEME_API } from './app-declaration'
import { TopicDao, ThemeDao } from '../dao/dao'
import { ThemeApi } from '../api/ThemeApi'
import { TopicApi } from '../api/TopicApi'
import { APPLICATION_LOADER } from '@airport/web-tower'
import { ApplicationLoader } from './ApplicationLoader'

export const THEME_DAO = topics.token<ThemeDao>({
    class: ThemeDao,
    interface: 'ThemeDao',
    token: 'THEME_DAO'
})
export const TOPIC_DAO = topics.token<TopicDao>({
    class: TopicDao,
    interface: 'TopicDao',
    token: 'TOPIC_DAO'
})

THEME_API.setClass(ThemeApi)
THEME_API.setDependencies({
    themeDao: THEME_DAO
})
TOPIC_API.setClass(TopicApi)
TOPIC_API.setDependencies({
    topicDao: TOPIC_DAO
})
APPLICATION_LOADER.setClass(ApplicationLoader)