import { Task, TaskStatus } from '@airline/tasks';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'air-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css'],
})
export class TaskEditComponent implements OnInit {

  @ViewChild(IonModal)
  modal: IonModal = null as any

  @Input()
  task: Task = null as any

  @Input()
  onWillDismiss: (e: Event) => void = null as any

  @Input()
  triggerId: string = null as any

  TaskStatus = TaskStatus

  constructor() { }

  ngOnInit() { }

  cancel(): void {
    this.modal.dismiss(null, 'cancel')
  }

  save(): void {
    this.modal.dismiss(null, 'save')
  }

}
