import { Goal, GoalApi } from '@airline/tasks';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  goalApi = new GoalApi()

  goals$: Observable<Goal[]>

  constructor() {
    this.goals$ = this.goalApi.searchAll()
  }

  async createGoal(
    goal: Goal
  ): Promise<void> {
    try {
      await this.goalApi.create(goal)
    } catch (e) {
      console.error(e)
      alert('Error creating Goal')
    }
  }

  async saveGoal(
    goal: Goal
  ): Promise<void> {
    try {
      await this.goalApi.save(goal)
    } catch (e) {
      console.error(e)
      alert('Error saving Goal')
    }
  }

  async getGoal(
    goalId: string
  ): Promise<Goal> {
    let goal: Goal = null as any
    try {
      goal = await this.goalApi.findById(goalId)
    } catch (e) {
      console.error(e)
      alert('Error retrieving Goal')
    }

    return goal
  }
}
