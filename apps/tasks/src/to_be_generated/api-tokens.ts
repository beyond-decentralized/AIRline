import { INTER_APP_API_CLIENT } from "@airport/direction-indicator";
import { GoalApi, TaskApi } from '../generated/api/api'
import { GOAL_API, tasks, TASK_API } from "./common-tokens";

tasks.autopilot = true
TASK_API.setClass(TaskApi)
TASK_API.setDependencies({
    interAppApiClient: INTER_APP_API_CLIENT
})

GOAL_API.setClass(GoalApi)
GOAL_API.setDependencies({
    interAppApiClient: INTER_APP_API_CLIENT
})
