import { Goal } from '@airline/tasks';
import { Theme } from '@airline/topics';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { map, Observable, Subscription } from 'rxjs';
import { GoalService } from '../../services/goal.service';

@Component({
  selector: 'cvr-goals',
  templateUrl: './goals.page.html',
  styleUrls: ['./goals.page.css']
})
export class GoalsPage implements OnInit {

  newGoal = new Goal()

  goals: Observable<Goal[]> = this.goalService.goals$

  numThemes = -1

  themes$: Observable<Theme[]> = this.goalService.themes$.pipe(
    map(themes => {
      console.log(`# Themes on page: ${themes.length}`)
      return themes
    })
  )

  self: GoalsPage = this

  themesSubscription: Subscription = null as any

  constructor(
    private goalService: GoalService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
  //   this.goals = this.goalService.goals$
  //   this.themes$ = this.goalService.themes$.pipe(
  //     map(themes => {
  //       console.log(`goals.page.ts got ${themes.length} Themes`)
  //       // needed for change detection to kick off
  //       return themes
  //     })
  //   ).pipe(delay(0))
  }

  // ngOnDestroy() {
  // }

  getThemes(): void {
    this.themesSubscription = this.themes$.subscribe(themes => {
      this.setNumThemes(themes.length)
    })
  }

  setNumThemes(
    numThemes: number
  ) {
    this.numThemes = numThemes
    // this.cdr.markForCheck()
    this.cdr.detectChanges()
  }

  ungetThemes(): void {
    this.themesSubscription.unsubscribe()
    this.numThemes = -1
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
