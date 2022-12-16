import { Goal } from '@airline/tasks';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoalInfoService } from 'components';
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

  constructor(
    private goalInfoService: GoalInfoService,
    private goalService: GoalService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.queryParamsSubscription = this.route.queryParams
      .subscribe(params => {
        this.loadGoal(params['goalId']).then()
      })
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe()
  }

  editGoal(_event: Event) {
    this.editGoalAsync().then()
  }

  async editGoalAsync(): Promise<void> {
    await this.goalService.saveGoal(this.goal)
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
