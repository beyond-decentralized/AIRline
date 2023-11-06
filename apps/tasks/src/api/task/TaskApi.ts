import { CollectionApi } from "@airline/conversations";
import { Topic } from "@airline/topics";
import { Inject, Injected } from "@airport/direction-indicator";
import { TaskDao } from "../../dao/task/TaskDao";
import { Goal } from "../../ddl/goal/Goal";
import { Task } from "../../ddl/task/Task";
import { RepositoryApi } from "@airport/holding-pattern";
import { GoalTask } from "../../ddl/ddl";
import { GoalTaskDao } from "../../dao/dao";
import { Api } from "@airport/air-traffic-control";
import { Observable } from "rxjs";

@Injected()
export class TaskApi {

    @Inject()
    collectionApi: CollectionApi

    @Inject()
    goalTaskDao: GoalTaskDao

    @Inject()
    taskDao: TaskDao

    @Inject()
    repositoryApi: RepositoryApi

    @Api()
    searchAllForGoal(
        goal: Goal | string
    ): Observable<Task[]> {
        return this.taskDao.searchAllForGoalWithGoal(goal)
    }

    @Api()
    searchAllForTopic(
        topic: Topic | string
    ): Observable<Task[]> {
        return this.taskDao.searchAllForTopicWithGoal(topic)
    }

    @Api()
    async create(
        task: Task
    ): Promise<void> {
        if (task.id) {
            throw new Error('Cannot create a Task with an existing ID')
        }

        const taskName = 'Task: ' + task.name
        const repository = await this.repositoryApi.create(taskName, true)
        const collection = await this.collectionApi
            .create(taskName, repository)
        task.collection = collection

        task.repository = repository
        await this.taskDao.save(task)

        const goalTask: GoalTask = new GoalTask()
        const goal = task.goal
        goalTask.task = task
        goalTask.goal = goal
        goalTask.repository = goal.repository
        await this.goalTaskDao.save(goalTask)

        await this.repositoryApi.setUiEntryUri(
            'localhost:3003/task/' + task.id,
            repository
        )
    }

    @Api()
    async save(
        task: Task
    ): Promise<void> {
        await this.taskDao.save(task)
    }

}
