import { domain } from "@airport/direction-indicator";
export const tasks = domain('beyond-decentralized.world').app('at__airline__slash__tasks');
export const GOAL_API = tasks.token({
    class: null,
    interface: 'GoalApi',
    token: 'GOAL_API'
});
export const TASK_API = tasks.token({
    class: null,
    interface: 'TaskApi',
    token: 'TASK_API'
});
//# sourceMappingURL=common-tokens.js.map