import { Goal } from '@airline/tasks';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GoalService } from '../../services/goal.service';

@Component({
  selector: 'cvr-goals',
  templateUrl: './goals.page.html',
  styleUrls: ['./goals.page.css'],
})
export class GoalsPage implements OnInit {

  newGoal = new Goal()

  goals: Observable<Goal[]> = null as any

  self: GoalsPage = this

  constructor(
    private goalService: GoalService
  ) { }

  ngOnInit() {
    this.goals = this.goalService.goals$
  }

  saveGoal(
    goalToAdd: Goal
  ) {
    this.addGoalAsync(goalToAdd).then()
  }

  private async addGoalAsync(
    goalToAdd: Goal
  ): Promise<void> {
    await this.goalService.createGoal(
      goalToAdd
    )
    this.setupNewGoalState()
  }

  setupNewGoalState(): void {
    this.newGoal = new Goal()
  }

  identifyGoal(
    _index: number,
    goal: Goal
  ): string {
    return goal.id as any
  }

}
