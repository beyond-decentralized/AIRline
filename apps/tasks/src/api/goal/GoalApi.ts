import { CollectionApi } from "@airline/conversations";
import { Theme, ThemeApi, Topic } from "@airline/topics";
import { Api } from "@airport/air-traffic-control";
import { Inject, Injected } from "@airport/direction-indicator";
import { RepositoryApi } from "@airport/holding-pattern";
import { map, Observable } from "rxjs";
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

    @Inject()
    themeApi: ThemeApi

    @Api()
    searchAll(): Observable<Goal[]> {
        return this.goalDao.searchAll().pipe(
            map(goals => {
                console.log(`TASKS Search returned ${goals.length} goals`)
                return goals
            })
        )
    }

    @Api()
    searchAllThemes(): Observable<Theme[]> {
        return this.themeApi.searchAll().pipe(
            map(themes => {
                console.log(`TASKS Search returned ${themes.length} themes`)
                return themes
            })
        )
    }

    @Api()
    searchById(
        goalId: string
    ): Observable<Goal> {
        return this.goalDao.searchById(goalId)
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
        const repository = await this.repositoryApi.create(goalName, true)
        const collection = await this.collectionApi
            .create(goalName, repository)
        goal.collection = collection

        goal.repository = repository
        await this.goalDao.save(goal)

        await this.repositoryApi.setUiEntryUri(
            'localhost:3003/goal/' + goal.id,
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
