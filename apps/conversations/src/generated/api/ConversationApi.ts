import {
	CONVERSATION_API,
} from '../../to_be_generated/common-tokens';
import {
	DEPENDENCY_INJECTION,
	Inject,
	Injected,
} from '@airport/direction-indicator';
import {
	Topic,
} from '@airline/topics';
import {
	RequestManager,
} from '@airport/arrivals-n-departures';
import {
	Api,
} from '@airport/check-in';
import {
	ConversationDao,
} from '../../dao/ConversationDao';
import {
	Conversation,
} from '../../ddl/Conversation';
import {
	Participant,
} from '../../ddl/Participant';



// An API stub for other Applications and UIs to use
@Injected()
export class ConversationApi {

    constructor() {
        DEPENDENCY_INJECTION.db().manualInject(this, CONVERSATION_API)
    }
        
    @Inject()
    conversationApi: ConversationApi
            
    async  findAll(): Promise<Conversation[]> {
        return await this.conversationApi.findAll()
    }

    async  findAllForTopic(
        topic: Topic | string
    ): Promise<Conversation[]> {
        return await this.conversationApi.findAllForTopic(topic)
    }

    async  save(
        conversation: Conversation
    ): Promise<void> {
        await this.conversationApi.save(conversation)
    }

}
