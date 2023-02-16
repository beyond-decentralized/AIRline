import { Goal } from '@airline/tasks';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoalInfoService } from 'projects/components/src/public-api';
import { Subscription } from 'rxjs';
import { GoalService } from '../../services/goal.service';

@Component({
  selector: 'cvr-goal',
  templateUrl: './goal.page.html',
  styleUrls: ['./goal.page.css'],
})
export class GoalPage implements OnInit {

  goal: Goal = null as any
  queryParamsSubscription: Subscription = null as any

  self: GoalPage = this

  constructor(
    private goalInfoService: GoalInfoService,
    private goalService: GoalService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.queryParamsSubscription = this.route.params
      .subscribe(params => {
        this.loadGoal(params['goalId']).then()
      })
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe()
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
    this.goal = {
      ...this.goal
    }
  }

  async loadGoal(
    goalId: string
  ): Promise<void> {
    this.goal = await this.goalService.getGoal(goalId);
  }

  getGoalStatusName(
    goal: Goal
  ) {
    return this.goalInfoService.getGoalStatusName(goal)
  }

}
