import { Goal, Task } from '@airline/tasks';
import { Component, Signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoalService } from '../../services/goal.service';
import { TaskService } from '../../services/task.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'cvr-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.css'],
})
export class TasksPage {

  currentTask: Task = null as any
  goal: Signal<Goal | null>
  newTask = new Task()
  tasks: Signal<Task[]>
  self = this

  constructor(
    private goalService: GoalService,
    route: ActivatedRoute,
    private taskService: TaskService,
  ) {
    const goalId = route.snapshot.paramMap.get('goalId') as string
    this.goal = toSignal(this.goalService.getGoal$(goalId), {
      initialValue: null
    }) as Signal<Goal>
    this.tasks = toSignal(this.taskService.getTasks$(goalId), {
      initialValue: null
    }) as Signal<Task[]>
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
