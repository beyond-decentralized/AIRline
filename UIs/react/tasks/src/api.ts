import { Goal, GoalApi, Task, TaskApi } from '@airline/tasks'

export { GoalApi } from '@airline/tasks'

const goalApi = new GoalApi()
const taskApi = new TaskApi()

export async function createGoal(
    goal: Goal,
    setMessage: (message: string, duration: number) => void
) {
    try {
        await goalApi.create(goal)
        setMessage('Goal created', 3000)
    } catch (e) {
        console.error(e)
        setMessage('Error creating Goal', 10000)
    }
}

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

export async function getGoal(
    goalId: string,
    setGoal: (goal: Goal) => void,
    setMessage: (message: string, duration: number) => void
) {
    try {
        const goal = await goalApi.findById(goalId)
        setGoal(goal)
    } catch (e) {
        console.error(e)
        setMessage('Error retrieving Goal', 10000)
    }
}

export async function createTask(
    task: Task,
    setMessage: (message: string, duration: number) => void
) {
    try {
        await taskApi.create(task)
        setMessage('Task created', 3000)
    } catch (e) {
        console.error(e)
        setMessage('Error creating Task', 10000)
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
        const tasks = await taskApi.findAllForGoal(goalId)
        setTasks(tasks)
    } catch (e) {
        console.error(e)
        setMessage('Error retrieving Tasks', 10000)
    }
}

