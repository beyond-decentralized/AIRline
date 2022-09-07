import {
	GOAL_API,
} from '../../../to_be_generated/common-tokens';
import {
	DEPENDENCY_INJECTION,
	Inject,
	Injected,
} from '@airport/direction-indicator';
import {
	Conversation,
	ConversationApi,
} from '@airline/conversations';
import {
	Topic,
} from '@airline/topics';
import {
	Api,
} from '@airport/check-in';
import {
	GoalConversationDao,
} from '../../../dao/goal/GoalConversationDao';
import {
	GoalDao,
} from '../../../dao/goal/GoalDao';
import {
	GoalConversation,
} from '../../../ddl/ddl';
import {
	Goal,
} from '../../../ddl/goal/Goal';



// An API stub for other Applications and UIs to use
@Injected()
export class GoalApi {

    constructor() {
        DEPENDENCY_INJECTION.db().manualInject(this, GOAL_API)
    }
        
    @Inject()
    goalApi: GoalApi
            
    async  findAll(): Promise<Goal[]> {
        return await this.goalApi.findAll()
    }

    async  loadConversationForGoal(
        goalId: Goal | string
    ): Promise<Conversation> {
        return await this.goalApi.loadConversationForGoal(goalId)
    }

    async  findAllForTopic(
        topic: Topic | string
    ): Promise<Goal[]> {
        return await this.goalApi.findAllForTopic(topic)
    }

    async  save(
        goal: Goal
    ): Promise<void> {
        await this.goalApi.save(goal)
    }

}
