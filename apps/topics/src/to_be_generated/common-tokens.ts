import { domain } from "@airport/direction-indicator"

export const topics = domain('localhost:3002').app('@airline/topics')

export const TOPIC_API = topics.token<any>({
    class: null,
    interface: 'TopicApi',
    token: 'TOPIC_API'
})
export const THEME_API = topics.token<any>({
    class: null,
    interface: 'ThemeApi',
    token: 'THEME_API'
})
