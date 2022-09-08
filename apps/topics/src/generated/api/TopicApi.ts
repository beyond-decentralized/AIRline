import {
	TOPIC_API,
} from '../../to_be_generated/common-tokens';
import {
	DEPENDENCY_INJECTION,
	Inject,
	Injected,
} from '@airport/direction-indicator';
import {
	Api,
} from '@airport/check-in';
import {
	TopicDao,
} from '../../dao/TopicDao';
import {
	Topic,
} from '../../ddl/topic';
import {
	Theme,
} from '../../ddl/Theme';



// An API stub for other Applications and UIs to use
@Injected()
export class TopicApi {
        
    @Inject()
    topicApi: TopicApi

    constructor() {
        DEPENDENCY_INJECTION.db().manualInject(this, 'topicApi', TOPIC_API)
    }
            
    async  findAllForTheme(
        theme: Theme | string
    ): Promise<Topic[]> {
        return await this.topicApi.findAllForTheme(theme)
    }

    async  save(
        topic: Topic
    ): Promise<void> {
        await this.topicApi.save(topic)
    }

}
