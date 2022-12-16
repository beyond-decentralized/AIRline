import { Task } from '@airline/tasks';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cvr-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.css'],
})
export class TasksPage implements OnInit {

  newTask = new Task()

  tasks: Task[] = null as any

  constructor() { }

  ngOnInit() {
  }

}
