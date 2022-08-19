import {
	IEntityVDescriptor,
	IVBooleanField,
	IVDateField,
	IVNumberField,
	IVStringField,
	IVUntypedField,
} from '@airbridge/validate';
import {
	AirEntityVDescriptor,
} from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import {
	TaskConversationVDescriptor,
} from './vtaskconversation';
import {
	TaskConversation,
} from '../ddl/TaskConversation';
import {
	TaskAssigneeVDescriptor,
} from './vtaskassignee';
import {
	TaskAssignee,
} from '../ddl/TaskAssignee';
import {
	SubtaskVDescriptor,
} from './vsubtask';
import {
	Subtask,
} from '../ddl/Subtask';
import {
	PrerequisiteTaskVDescriptor,
} from './vprerequisitetask';
import {
	PrerequisiteTask,
} from '../ddl/PrerequisiteTask';
import {
	ITask,
} from './task';



////////////////////
//  API INTERFACE //
////////////////////

export interface TaskVDescriptor<T>
    extends AirEntityVDescriptor<T> {
	// Id Properties
	
	// Non-Id Properties
	name?: string | IVStringField;
	description?: string | IVStringField;
	state?: number | IVNumberField;
	durationUnit?: number | IVNumberField;
	durationLength?: number | IVNumberField;
	startDate?: Date | IVDateField;
	dueDate?: Date | IVDateField;
	isGoal?: boolean | IVBooleanField;
	importance?: number | IVNumberField;
	urgency?: number | IVNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	taskConversations?: TaskConversationVDescriptor<TaskConversation>
	assignees?: TaskAssigneeVDescriptor<TaskAssignee>
	superasks?: SubtaskVDescriptor<Subtask>
	subtasks?: SubtaskVDescriptor<Subtask>
	prerequisiteTasks?: PrerequisiteTaskVDescriptor<PrerequisiteTask>
	requiringTasks?: SubtaskVDescriptor<Subtask>

}


