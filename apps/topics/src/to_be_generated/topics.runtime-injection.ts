import { application } from './app-declaration'
import { app } from '@airport/direction-indicator'
import { TopicDao, ThemeDao } from '../dao/dao'
import { ThemeApi } from '../api/ThemeApi'
import { TopicApi } from '../api/TopicApi'
import { setApplicationLoader } from '@airport/terminal-map'
import { ApplicationLoader } from './ApplicationLoader'

export const airApp = app(application)

airApp.register(
    ThemeApi, TopicApi, ThemeDao,
    TopicDao
)

airApp.setDependencies(ThemeApi, {
    themeDao: ThemeDao
})
airApp.setDependencies(TopicApi, {
    topicDao: TopicDao
})

setApplicationLoader(ApplicationLoader)
