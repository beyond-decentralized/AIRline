import { domain } from "@airport/direction-indicator"

export const tasks = domain('localhost:3003').app('@airline/tasks')

export const GOAL_API = tasks.token<any>({
    class: null,
    interface: 'GoalApi',
    token: 'GOAL_API'
})
export const TASK_API = tasks.token<any>({
    class: null,
    interface: 'TaskApi',
    token: 'TASK_API'
})
