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
	TopicVDescriptor,
	Topic,
} from '@airline/topics/lib/to_be_generated/runtime-index';
import {
	GoalTaskVDescriptor,
} from '../goal/vgoaltask';
import {
	GoalTask,
} from '../../ddl/goal/GoalTask';
import {
	TaskConversationVDescriptor,
} from './vtaskconversation';
import {
	TaskConversation,
} from '../../ddl/task/TaskConversation';
import {
	TaskAssigneeVDescriptor,
} from './vtaskassignee';
import {
	TaskAssignee,
} from '../../ddl/task/TaskAssignee';
import {
	SubtaskVDescriptor,
} from './vsubtask';
import {
	Subtask,
} from '../../ddl/task/Subtask';
import {
	PrerequisiteTaskVDescriptor,
} from './vprerequisitetask';
import {
	PrerequisiteTask,
} from '../../ddl/task/PrerequisiteTask';
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
	status?: number | IVNumberField;
	durationUnit?: number | IVNumberField;
	durationLength?: number | IVNumberField;
	startDate?: Date | IVDateField;
	dueDate?: Date | IVDateField;
	importance?: number | IVNumberField;
	urgency?: number | IVNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	topic?: TopicVDescriptor<Topic>
	goalTasks?: GoalTaskVDescriptor<GoalTask>
	taskConversations?: TaskConversationVDescriptor<TaskConversation>
	assignees?: TaskAssigneeVDescriptor<TaskAssignee>
	superasks?: SubtaskVDescriptor<Subtask>
	subtasks?: SubtaskVDescriptor<Subtask>
	prerequisiteTasks?: PrerequisiteTaskVDescriptor<PrerequisiteTask>
	requiringTasks?: SubtaskVDescriptor<Subtask>

}


