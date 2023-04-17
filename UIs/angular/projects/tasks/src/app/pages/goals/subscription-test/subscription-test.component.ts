import { Theme } from '@airline/topics';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { map, Observable, Subscription } from 'rxjs';
import { GoalService } from '../../../services/goal.service';

@Component({
  selector: 'cvr-subscription-test',
  templateUrl: './subscription-test.component.html',
  styleUrls: ['./subscription-test.component.css'],
})
export class SubscriptionTestComponent  implements OnInit {


  numThemes = -1

  themes$: Observable<Theme[]> = this.goalService.themes$.pipe(
    map(themes => {
      console.log(`# Themes on page: ${themes.length}`)
      return themes
    })
  )

  themesSubscription: Subscription = null as any

  constructor(
    private goalService: GoalService,
    private cdr: ChangeDetectorRef
    ) { }

  ngOnInit() {}

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

}
