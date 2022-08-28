import { domain } from "@airport/direction-indicator"

export const topics = domain('beyond-decentralized.world').app('at__airline__slash__topics')

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
