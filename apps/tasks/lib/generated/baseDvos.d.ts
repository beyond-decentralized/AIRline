import { PrerequisiteTask } from '../ddl/prerequisitetask';
import { PrerequisiteTaskVDescriptor } from './vprerequisitetask';
import { Subtask } from '../ddl/subtask';
import { SubtaskVDescriptor } from './vsubtask';
import { Task } from '../ddl/task';
import { TaskVDescriptor } from './vtask';
import { TaskAssignee } from '../ddl/taskassignee';
import { TaskAssigneeVDescriptor } from './vtaskassignee';
import { TaskConversation } from '../ddl/taskconversation';
import { TaskConversationVDescriptor } from './vtaskconversation';
import { TaskReferenceInComment } from '../ddl/taskreferenceincomment';
import { TaskReferenceInCommentVDescriptor } from './vtaskreferenceincomment';
import { IDvo, Dvo } from '@airbridge/validate';
import { ApplicationEntity_LocalId as DbEntityId } from '@airport/ground-control';
export declare class SQDIDvo<Entity, EntityVDescriptor> extends Dvo<Entity, EntityVDescriptor> {
    constructor(dbEntityId: DbEntityId);
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