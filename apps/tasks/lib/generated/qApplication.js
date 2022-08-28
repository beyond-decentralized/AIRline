import { airApi } from '@airport/aviation-communication';
import { Goal, GoalConversation, GoalTask, PrerequisiteTask, Subtask, Task, TaskAssignee, TaskConversation, TaskReferenceInComment } from '../ddl/ddl';
const __constructors__ = {
    Goal: Goal,
    GoalConversation: GoalConversation,
    GoalTask: GoalTask,
    PrerequisiteTask: PrerequisiteTask,
    Subtask: Subtask,
    Task: Task,
    TaskAssignee: TaskAssignee,
    TaskConversation: TaskConversation,
    TaskReferenceInComment: TaskReferenceInComment
};
export const Q_APPLICATION = {
    __constructors__,
    domain: 'localhost:8100',
    name: '@airline/tasks'
};
export const Q = Q_APPLICATION;
export function diSet(dbEntityId) {
    return airApi.dS(Q.__dbApplication__, dbEntityId);
}
export function duoDiSet(dbEntityId) {
    return airApi.ddS(Q.__dbApplication__, dbEntityId);
}
airApi.setQApplication(Q_APPLICATION);
//# sourceMappingURL=qApplication.js.map