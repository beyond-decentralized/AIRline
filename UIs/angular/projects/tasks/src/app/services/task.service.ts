import { Task, TaskApi } from '@airline/tasks';
import { Injectable } from '@angular/core';

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

  async getTasks(
    goalId: string
  ): Promise<Task[]> {
    let tasks: Task[] = []
    try {
      tasks = await this.taskApi.findAllForGoal(goalId)
    } catch (e) {
      console.error(e)
      alert('Error retrieving Tasks')
    }

    return tasks
  }

}
