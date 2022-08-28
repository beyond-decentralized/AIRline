import { Goal, GoalApi, Task, TaskApi } from '@airline/tasks'

export { GoalApi } from '@airline/tasks'

const goalApi = new GoalApi()
const taskApi = new TaskApi()

export async function saveGoal(
    goal: Goal,
    setMessage: (message: string, duration: number) => void
) {
    try {
        await goalApi.save(goal)
        setMessage('Goal saved', 3000)
    } catch (e) {
        console.error(e)
        setMessage('Error saving Goal', 10000)
    }
}

export async function getGoals(
    setGoals: (goals: Goal[]) => void,
    setMessage: (message: string, duration: number) => void
) {
    try {
        const goals = await goalApi.findAll()
        setGoals(goals)
    } catch (e) {
        console.error(e)
        setMessage('Error retrieving Goals', 10000)
    }
}

export async function saveTask(
    task: Task,
    setMessage: (message: string, duration: number) => void
) {
    try {
        await taskApi.save(task)
        setMessage('Task saved', 3000)
    } catch (e) {
        console.error(e)
        setMessage('Error saving Task', 10000)
    }
}

export async function getTasks(
    goalId: string,
    setTasks: (tasks: Task[]) => void,
    setMessage: (message: string, duration: number) => void
) {
    try {
        let tasks
        if (goalId) {
            tasks = await taskApi.findAllForGoal(goalId)
        } else {
            tasks = await taskApi.findAll()
        }
        setTasks(tasks)
    } catch (e) {
        console.error(e)
        setMessage('Error retrieving Tasks', 10000)
    }
}

