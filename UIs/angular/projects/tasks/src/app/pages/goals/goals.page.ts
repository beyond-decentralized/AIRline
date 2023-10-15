import { Goal } from '@airline/tasks';
import { Component, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { GoalService } from '../../services/goal.service';

@Component({
  selector: 'cvr-goals',
  templateUrl: './goals.page.html',
  styleUrls: ['./goals.page.css']
})
export class GoalsPage implements OnInit {

  newGoal = new Goal()

  goals = toSignal(this.goalService.goals$, {
    initialValue: []
  })

  self: GoalsPage = this

  showSubscriptionTest = false

  toggleSubscriptionTestMessage = 'Show Subscription Test'

  constructor(
    private goalService: GoalService
  ) { }

  ngOnInit() {
  }

  saveGoal(
    goalToAdd: Goal
  ) {
    this.addGoalAsync(goalToAdd).then()
  }

 toggleSubscriptionTest() {
    this.showSubscriptionTest = !this.showSubscriptionTest

    if(this.showSubscriptionTest) {
      this.toggleSubscriptionTestMessage = 'Hide Subscription Test'
    } else {
      this.toggleSubscriptionTestMessage = 'Show Subscription Test'
    }
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
