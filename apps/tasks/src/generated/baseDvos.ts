/* eslint-disable */
import {
	Goal,
} from '../ddl/goal/Goal';
import {
	GoalVDescriptor,
} from './validation/goal/VGoal';
import {
	GoalConversation,
} from '../ddl/goal/GoalConversation';
import {
	GoalConversationVDescriptor,
} from './validation/goal/VGoalConversation';
import {
	GoalTask,
} from '../ddl/goal/GoalTask';
import {
	GoalTaskVDescriptor,
} from './validation/goal/VGoalTask';
import {
	PrerequisiteTask,
} from '../ddl/task/PrerequisiteTask';
import {
	PrerequisiteTaskVDescriptor,
} from './validation/task/VPrerequisiteTask';
import {
	Subtask,
} from '../ddl/task/Subtask';
import {
	SubtaskVDescriptor,
} from './validation/task/VSubtask';
import {
	Task,
} from '../ddl/task/Task';
import {
	TaskVDescriptor,
} from './validation/task/VTask';
import {
	TaskAssignee,
} from '../ddl/task/TaskAssignee';
import {
	TaskAssigneeVDescriptor,
} from './validation/task/VTaskAssignee';
import {
	TaskConversation,
} from '../ddl/task/TaskConversation';
import {
	TaskConversationVDescriptor,
} from './validation/task/VTaskConversation';
import {
	TaskReferenceInComment,
} from '../ddl/task/TaskReferenceInComment';
import {
	TaskReferenceInCommentVDescriptor,
} from './validation/task/VTaskReferenceInComment';
import {
	IDvo,
	Dvo,
} from '@airbridge/validate';
import {
	ApplicationEntity_LocalId as DbEntityId,
} from '@airport/ground-control';
import {
	localhost_colon_3002____at_airline_slash_tasks_diSet,
} from './qApplication';

import Q from './qApplication'

// Application Q object Dependency Injection readiness detection Dvo
export class SQDIDvo<Entity, EntityVDescriptor>
	extends Dvo<Entity, EntityVDescriptor> {

	constructor(
		dbEntityId: DbEntityId
	) {
		super(dbEntityId, Q)
	}
}


export interface IBaseGoalDvo
  extends IDvo<Goal, GoalVDescriptor<Goal>> {
}

export class BaseGoalDvo
  extends SQDIDvo<Goal, GoalVDescriptor<Goal>>
	implements IBaseGoalDvo {

	static diSet(): boolean {
		return localhost_colon_3002____at_airline_slash_tasks_diSet(7)
	}
	
	constructor() {
		super(7)
	}
}


export interface IBaseGoalConversationDvo
  extends IDvo<GoalConversation, GoalConversationVDescriptor<GoalConversation>> {
}

export class BaseGoalConversationDvo
  extends SQDIDvo<GoalConversation, GoalConversationVDescriptor<GoalConversation>>
	implements IBaseGoalConversationDvo {

	static diSet(): boolean {
		return localhost_colon_3002____at_airline_slash_tasks_diSet(0)
	}
	
	constructor() {
		super(0)
	}
}


export interface IBaseGoalTaskDvo
  extends IDvo<GoalTask, GoalTaskVDescriptor<GoalTask>> {
}

export class BaseGoalTaskDvo
  extends SQDIDvo<GoalTask, GoalTaskVDescriptor<GoalTask>>
	implements IBaseGoalTaskDvo {

	static diSet(): boolean {
		return localhost_colon_3002____at_airline_slash_tasks_diSet(6)
	}
	
	constructor() {
		super(6)
	}
}


export interface IBasePrerequisiteTaskDvo
  extends IDvo<PrerequisiteTask, PrerequisiteTaskVDescriptor<PrerequisiteTask>> {
}

export class BasePrerequisiteTaskDvo
  extends SQDIDvo<PrerequisiteTask, PrerequisiteTaskVDescriptor<PrerequisiteTask>>
	implements IBasePrerequisiteTaskDvo {

	static diSet(): boolean {
		return localhost_colon_3002____at_airline_slash_tasks_diSet(1)
	}
	
	constructor() {
		super(1)
	}
}


export interface IBaseSubtaskDvo
  extends IDvo<Subtask, SubtaskVDescriptor<Subtask>> {
}

export class BaseSubtaskDvo
  extends SQDIDvo<Subtask, SubtaskVDescriptor<Subtask>>
	implements IBaseSubtaskDvo {

	static diSet(): boolean {
		return localhost_colon_3002____at_airline_slash_tasks_diSet(2)
	}
	
	constructor() {
		super(2)
	}
}


export interface IBaseTaskDvo
  extends IDvo<Task, TaskVDescriptor<Task>> {
}

export class BaseTaskDvo
  extends SQDIDvo<Task, TaskVDescriptor<Task>>
	implements IBaseTaskDvo {

	static diSet(): boolean {
		return localhost_colon_3002____at_airline_slash_tasks_diSet(5)
	}
	
	constructor() {
		super(5)
	}
}


export interface IBaseTaskAssigneeDvo
  extends IDvo<TaskAssignee, TaskAssigneeVDescriptor<TaskAssignee>> {
}

export class BaseTaskAssigneeDvo
  extends SQDIDvo<TaskAssignee, TaskAssigneeVDescriptor<TaskAssignee>>
	implements IBaseTaskAssigneeDvo {

	static diSet(): boolean {
		return localhost_colon_3002____at_airline_slash_tasks_diSet(3)
	}
	
	constructor() {
		super(3)
	}
}


export interface IBaseTaskConversationDvo
  extends IDvo<TaskConversation, TaskConversationVDescriptor<TaskConversation>> {
}

export class BaseTaskConversationDvo
  extends SQDIDvo<TaskConversation, TaskConversationVDescriptor<TaskConversation>>
	implements IBaseTaskConversationDvo {

	static diSet(): boolean {
		return localhost_colon_3002____at_airline_slash_tasks_diSet(4)
	}
	
	constructor() {
		super(4)
	}
}


export interface IBaseTaskReferenceInCommentDvo
  extends IDvo<TaskReferenceInComment, TaskReferenceInCommentVDescriptor<TaskReferenceInComment>> {
}

export class BaseTaskReferenceInCommentDvo
  extends SQDIDvo<TaskReferenceInComment, TaskReferenceInCommentVDescriptor<TaskReferenceInComment>>
	implements IBaseTaskReferenceInCommentDvo {

	static diSet(): boolean {
		return localhost_colon_3002____at_airline_slash_tasks_diSet(8)
	}
	
	constructor() {
		super(8)
	}
}
