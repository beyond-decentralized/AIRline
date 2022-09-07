import {
	TASK_API,
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
	TaskConversationDao,
} from '../../../dao/task/TaskConversationDao';
import {
	TaskDao,
} from '../../../dao/task/TaskDao';
import {
	TaskConversation,
} from '../../../ddl/ddl';
import {
	Goal,
} from '../../../ddl/goal/Goal';
import {
	Task,
} from '../../../ddl/task/Task';



// An API stub for other Applications and UIs to use
@Injected()
export class TaskApi {

    constructor() {
        DEPENDENCY_INJECTION.db().manualInject(this, TASK_API)
    }
        
    @Inject()
    taskApi: TaskApi
            
    async  findAll(): Promise<Task[]> {
        return await this.taskApi.findAll()
    }

    async  loadConversationForTask(
        taskId: string | Task
    ): Promise<Conversation> {
        return await this.taskApi.loadConversationForTask(taskId)
    }

    async  findAllForGoal(
        goal: Goal | string
    ): Promise<Task[]> {
        return await this.taskApi.findAllForGoal(goal)
    }

    async  findAllForTopic(
        topic: Topic | string
    ): Promise<Task[]> {
        return await this.taskApi.findAllForTopic(topic)
    }

    async  save(
        task: Task
    ): Promise<void> {
        await this.taskApi.save(task)
    }

}
