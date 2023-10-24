import { Task, TaskApi } from '@airline/tasks';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  taskApi = new TaskApi()

  constructor() { }

  async saveTask(
    task: Task
  ) {
    try {
      await this.taskApi.save(task)
    } catch (e) {
      console.error(e)
      alert('Error saving Task')
    }
  }

  getTasks$(
    goalId: string
  ): Observable<Task[] | null> {
    try {
      return this.taskApi.searchAllForGoal(goalId)
    } catch (e) {
      console.error(e)
      alert('Error retrieving Tasks')
    }

    return of(null)
  }

}
