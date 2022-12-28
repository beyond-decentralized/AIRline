import { Goal, GoalStatus } from '@airline/tasks';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoalInfoService {

  constructor() { }

  getGoalStatusName(
    goal: Goal
  ): string {
    switch (goal.status) {
      case GoalStatus.ACCOMPLISHED:
        return 'Accomplished'
      case GoalStatus.CURRENT:
        return 'Current'
      case GoalStatus.FUTURE:
        return 'Future'
      case GoalStatus.OUTDATED:
        return 'Outdated'
      default:
        return 'Unknown'
    }
  }

}
