import { Goal } from '@airline/tasks';
import { Component, OnInit } from '@angular/core';
import { GoalService } from '../../services/goal.service';

@Component({
  selector: 'cvr-goals',
  templateUrl: './goals.page.html',
  styleUrls: ['./goals.page.css'],
})
export class GoalsPage implements OnInit {

  newGoal = new Goal()

  goals: Goal[] = null as any

  constructor(
    private goalService: GoalService
  ) { }

  ngOnInit() {
    this.goalService.getGoals().then(goals => {
      this.goals = goals
    })
  }

  identifyGoal(
    _index: number,
    goal: Goal
  ): string {
    return goal.id as any
  }

}
