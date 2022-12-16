import { Goal, GoalStatus } from '@airline/tasks';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'air-goal-edit',
  templateUrl: './goal-edit.component.html',
  styleUrls: ['./goal-edit.component.css'],
})
export class GoalEditComponent implements OnInit {

  @ViewChild(IonModal)
  modal: IonModal = null as any

  @Input()
  goal: Goal = null as any

  @Input()
  onWillDismiss: (e: Event) => void = null as any

  @Input()
  triggerId: string = null as any

  GoalStatus = GoalStatus

  constructor() { }

  ngOnInit() { }

  cancel(): void {
    this.modal.dismiss(null, 'cancel')
  }

  save(): void {
    this.modal.dismiss(null, 'save')
  }

}
