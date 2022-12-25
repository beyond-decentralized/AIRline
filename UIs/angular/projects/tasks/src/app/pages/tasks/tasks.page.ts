import { Goal, Task } from '@airline/tasks';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { GoalService } from '../../services/goal.service';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'cvr-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.css'],
})
export class TasksPage implements OnInit {

  currentTask: Task = null as any
  goal: Goal = null as any
  newTask = new Task()
  tasks: Task[] = null as any
  queryParamsSubscription: Subscription = null as any
  self = this

  constructor(
    private goalService: GoalService,
    private route: ActivatedRoute,
    private taskService: TaskService,
  ) { }

  ngOnInit() {
    this.queryParamsSubscription = this.route.queryParams
      .subscribe(params => {
        this.loadData(params['goalId']).then()
      })
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe()
  }

  async loadData(
    goalId: string
  ): Promise<void> {
    this.goal = await this.goalService.getGoal(goalId)
    this.tasks = await this.taskService.getTasks(goalId)
  }

  setCurrentTask(
    task: Task
  ) {
    this.currentTask = task
  }

  identifyTask(
    _index: number,
    task: Task
  ) {
    return task.id
  }

  saveTask(
    taskToSave: Task
  ) {
    let task: Task
    if (taskToSave === this.newTask) {
      task = this.newTask
    } else {
      task = this.currentTask
    }
    this.saveTaskAsync(task).then()
  }

  async saveTaskAsync(
    task: Task
  ): Promise<void> {
    await this.taskService.saveTask(
      task
    )
    this.newTask = new Task()
    this.currentTask = null as any
  }

}
