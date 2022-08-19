/* eslint-disable */
import {
	PrerequisiteTask,
} from '../ddl/prerequisitetask';
import {
	PrerequisiteTaskVDescriptor,
} from './vprerequisitetask';
import {
	Subtask,
} from '../ddl/subtask';
import {
	SubtaskVDescriptor,
} from './vsubtask';
import {
	Task,
} from '../ddl/task';
import {
	TaskVDescriptor,
} from './vtask';
import {
	TaskAssignee,
} from '../ddl/taskassignee';
import {
	TaskAssigneeVDescriptor,
} from './vtaskassignee';
import {
	TaskConversation,
} from '../ddl/taskconversation';
import {
	TaskConversationVDescriptor,
} from './vtaskconversation';
import {
	TaskReferenceInComment,
} from '../ddl/taskreferenceincomment';
import {
	TaskReferenceInCommentVDescriptor,
} from './vtaskreferenceincomment';
import {
	IDvo,
	Dvo,
} from '@airbridge/validate';
import {
	ApplicationEntity_LocalId as DbEntityId,
} from '@airport/ground-control';
import {
	Q,
	duoDiSet,
} from './qApplication';


// Application Q object Dependency Injection readiness detection Dvo
export class SQDIDvo<Entity, EntityVDescriptor>
	extends Dvo<Entity, EntityVDescriptor> {

	constructor(
		dbEntityId: DbEntityId
	) {
		super(dbEntityId, Q)
	}
}


export interface IBasePrerequisiteTaskDvo
  extends IDvo<PrerequisiteTask, PrerequisiteTaskVDescriptor<PrerequisiteTask>> {
}

export class BasePrerequisiteTaskDvo
  extends SQDIDvo<PrerequisiteTask, PrerequisiteTaskVDescriptor<PrerequisiteTask>>
	implements IBasePrerequisiteTaskDvo {

	static diSet(): boolean {
		return duoDiSet(4)
	}
	
	constructor() {
		super(4)
	}
}


export interface IBaseSubtaskDvo
  extends IDvo<Subtask, SubtaskVDescriptor<Subtask>> {
}

export class BaseSubtaskDvo
  extends SQDIDvo<Subtask, SubtaskVDescriptor<Subtask>>
	implements IBaseSubtaskDvo {

	static diSet(): boolean {
		return duoDiSet(0)
	}
	
	constructor() {
		super(0)
	}
}


export interface IBaseTaskDvo
  extends IDvo<Task, TaskVDescriptor<Task>> {
}

export class BaseTaskDvo
  extends SQDIDvo<Task, TaskVDescriptor<Task>>
	implements IBaseTaskDvo {

	static diSet(): boolean {
		return duoDiSet(3)
	}
	
	constructor() {
		super(3)
	}
}


export interface IBaseTaskAssigneeDvo
  extends IDvo<TaskAssignee, TaskAssigneeVDescriptor<TaskAssignee>> {
}

export class BaseTaskAssigneeDvo
  extends SQDIDvo<TaskAssignee, TaskAssigneeVDescriptor<TaskAssignee>>
	implements IBaseTaskAssigneeDvo {

	static diSet(): boolean {
		return duoDiSet(1)
	}
	
	constructor() {
		super(1)
	}
}


export interface IBaseTaskConversationDvo
  extends IDvo<TaskConversation, TaskConversationVDescriptor<TaskConversation>> {
}

export class BaseTaskConversationDvo
  extends SQDIDvo<TaskConversation, TaskConversationVDescriptor<TaskConversation>>
	implements IBaseTaskConversationDvo {

	static diSet(): boolean {
		return duoDiSet(2)
	}
	
	constructor() {
		super(2)
	}
}


export interface IBaseTaskReferenceInCommentDvo
  extends IDvo<TaskReferenceInComment, TaskReferenceInCommentVDescriptor<TaskReferenceInComment>> {
}

export class BaseTaskReferenceInCommentDvo
  extends SQDIDvo<TaskReferenceInComment, TaskReferenceInCommentVDescriptor<TaskReferenceInComment>>
	implements IBaseTaskReferenceInCommentDvo {

	static diSet(): boolean {
		return duoDiSet(5)
	}
	
	constructor() {
		super(5)
	}
}
