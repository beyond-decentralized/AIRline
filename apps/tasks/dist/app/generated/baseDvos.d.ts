import { Goal } from '../ddl/goal/goal';
import { GoalVDescriptor } from './goal/vgoal';
import { GoalConversation } from '../ddl/goal/goalconversation';
import { GoalConversationVDescriptor } from './goal/vgoalconversation';
import { GoalTask } from '../ddl/goal/goaltask';
import { GoalTaskVDescriptor } from './goal/vgoaltask';
import { PrerequisiteTask } from '../ddl/task/prerequisitetask';
import { PrerequisiteTaskVDescriptor } from './task/vprerequisitetask';
import { Subtask } from '../ddl/task/subtask';
import { SubtaskVDescriptor } from './task/vsubtask';
import { Task } from '../ddl/task/task';
import { TaskVDescriptor } from './task/vtask';
import { TaskAssignee } from '../ddl/task/taskassignee';
import { TaskAssigneeVDescriptor } from './task/vtaskassignee';
import { TaskConversation } from '../ddl/task/taskconversation';
import { TaskConversationVDescriptor } from './task/vtaskconversation';
import { TaskReferenceInComment } from '../ddl/task/taskreferenceincomment';
import { TaskReferenceInCommentVDescriptor } from './task/vtaskreferenceincomment';
import { IDvo, Dvo } from '@airbridge/validate';
import { ApplicationEntity_LocalId as DbEntityId } from '@airport/ground-control';
export declare class SQDIDvo<Entity, EntityVDescriptor> extends Dvo<Entity, EntityVDescriptor> {
    constructor(dbEntityId: DbEntityId);
}
export interface IBaseGoalDvo extends IDvo<Goal, GoalVDescriptor<Goal>> {
}
export declare class BaseGoalDvo extends SQDIDvo<Goal, GoalVDescriptor<Goal>> implements IBaseGoalDvo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseGoalConversationDvo extends IDvo<GoalConversation, GoalConversationVDescriptor<GoalConversation>> {
}
export declare class BaseGoalConversationDvo extends SQDIDvo<GoalConversation, GoalConversationVDescriptor<GoalConversation>> implements IBaseGoalConversationDvo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseGoalTaskDvo extends IDvo<GoalTask, GoalTaskVDescriptor<GoalTask>> {
}
export declare class BaseGoalTaskDvo extends SQDIDvo<GoalTask, GoalTaskVDescriptor<GoalTask>> implements IBaseGoalTaskDvo {
    static diSet(): boolean;
    constructor();
}
export interface IBasePrerequisiteTaskDvo extends IDvo<PrerequisiteTask, PrerequisiteTaskVDescriptor<PrerequisiteTask>> {
}
export declare class BasePrerequisiteTaskDvo extends SQDIDvo<PrerequisiteTask, PrerequisiteTaskVDescriptor<PrerequisiteTask>> implements IBasePrerequisiteTaskDvo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseSubtaskDvo extends IDvo<Subtask, SubtaskVDescriptor<Subtask>> {
}
export declare class BaseSubtaskDvo extends SQDIDvo<Subtask, SubtaskVDescriptor<Subtask>> implements IBaseSubtaskDvo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseTaskDvo extends IDvo<Task, TaskVDescriptor<Task>> {
}
export declare class BaseTaskDvo extends SQDIDvo<Task, TaskVDescriptor<Task>> implements IBaseTaskDvo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseTaskAssigneeDvo extends IDvo<TaskAssignee, TaskAssigneeVDescriptor<TaskAssignee>> {
}
export declare class BaseTaskAssigneeDvo extends SQDIDvo<TaskAssignee, TaskAssigneeVDescriptor<TaskAssignee>> implements IBaseTaskAssigneeDvo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseTaskConversationDvo extends IDvo<TaskConversation, TaskConversationVDescriptor<TaskConversation>> {
}
export declare class BaseTaskConversationDvo extends SQDIDvo<TaskConversation, TaskConversationVDescriptor<TaskConversation>> implements IBaseTaskConversationDvo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseTaskReferenceInCommentDvo extends IDvo<TaskReferenceInComment, TaskReferenceInCommentVDescriptor<TaskReferenceInComment>> {
}
export declare class BaseTaskReferenceInCommentDvo extends SQDIDvo<TaskReferenceInComment, TaskReferenceInCommentVDescriptor<TaskReferenceInComment>> implements IBaseTaskReferenceInCommentDvo {
    static diSet(): boolean;
    constructor();
}
//# sourceMappingURL=baseDvos.d.ts.map