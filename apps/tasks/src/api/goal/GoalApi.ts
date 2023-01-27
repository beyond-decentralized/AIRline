import { Collection, CollectionApi } from "@airline/conversations";
import { Topic } from "@airline/topics";
import { Api } from "@airport/air-traffic-control";
import { Inject, Injected } from "@airport/direction-indicator";
import { RepositoryApi } from "@airport/holding-pattern";
import { GoalDao } from "../../dao/goal/GoalDao";
import { Goal } from "../../ddl/goal/Goal";

@Injected()
export class GoalApi {

    @Inject()
    collectionApi: CollectionApi

    @Inject()
    goalDao: GoalDao

    @Inject()
    repositoryApi: RepositoryApi

    @Api()
    async findAll(): Promise<Goal[]> {
        return await this.goalDao.findAll()
    }

    @Api()
    async findById(
        goalId: string
    ): Promise<Goal> {
        return await this.goalDao.findById(goalId)
    }

    @Api()
    async findAllForTopic(
        topic: Topic | string
    ): Promise<Goal[]> {
        return await this.goalDao.findAllForTopic(topic)
    }

    @Api()
    async create(
        goal: Goal
    ): Promise<void> {
        if (goal.id) {
            throw new Error('Cannot create a Goal with an existing ID')
        }

        const goalName = 'Goal: ' + goal.name
        const repository = await this.repositoryApi.create(goalName)
        const collection = await this.collectionApi
            .create(goalName, repository)
        goal.collection = collection

        goal.repository = repository
        await this.goalDao.save(goal)

        await this.repositoryApi.setUiEntryUri(
            'http://localhost:3003/goal/' + goal.id,
            goal.repository
        )
    }

    @Api()
    async save(
        goal: Goal
    ): Promise<void> {
        await this.goalDao.save(goal)
    }

}
