import { Goal } from '@airline/tasks';
import { Component, Signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoalInfoService } from 'projects/components/src/public-api';
import { GoalService } from '../../services/goal.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'cvr-goal',
  templateUrl: './goal.page.html',
  styleUrls: ['./goal.page.css'],
})
export class GoalPage {

  goal: Signal<Goal>
  self: GoalPage = this

  constructor(
    private goalInfoService: GoalInfoService,
    private goalService: GoalService,
    route: ActivatedRoute,
  ) {
    const goalId = route.snapshot.paramMap.get('goalId') as string
    this.goal = toSignal(this.goalService.getGoal$(goalId), {
      initialValue: null
    }) as Signal<Goal>
  }

  saveGoal(
    goalToEdit: Goal
  ) {
    this.editGoalAsync(goalToEdit).then()
  }

  async editGoalAsync(
    goalToEdit: Goal
  ): Promise<void> {
    await this.goalService.saveGoal(goalToEdit)
  }

  getGoalStatusName(
    goal: Goal
  ) {
    return this.goalInfoService.getGoalStatusName(goal)
  }

}
