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
} from '@airport/holding-pattern/dist/app/bundle';
import {
	TopicVDescriptor,
	Topic,
} from '@airline/topics/dist/app/bundle';
import {
	GoalTaskVDescriptor,
} from '../goal/VGoalTask';
import {
	GoalTask,
} from '../../../ddl/goal/GoalTask';
import {
	TaskConversationVDescriptor,
} from './VTaskConversation';
import {
	TaskConversation,
} from '../../../ddl/task/TaskConversation';
import {
	TaskAssigneeVDescriptor,
} from './VTaskAssignee';
import {
	TaskAssignee,
} from '../../../ddl/task/TaskAssignee';
import {
	SubtaskVDescriptor,
} from './VSubtask';
import {
	Subtask,
} from '../../../ddl/task/Subtask';
import {
	PrerequisiteTaskVDescriptor,
} from './VPrerequisiteTask';
import {
	PrerequisiteTask,
} from '../../../ddl/task/PrerequisiteTask';
import {
	ITask,
} from '../../entity/task/ITask';



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


