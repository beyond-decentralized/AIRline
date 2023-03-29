import { Component } from '@angular/core';
import { GoalService } from '../services/goal.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  themes$ = this.goalService.themes$

  constructor(
    private goalService: GoalService
  ) { }

}
