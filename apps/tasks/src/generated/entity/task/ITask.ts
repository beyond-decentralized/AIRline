import {
	IAirEntity,
} from '@airport/holding-pattern';
import {
	ITopic,
} from '@airline/topics';
import {
	IGoalTask,
} from '../goal/IGoalTask';
import {
	ITaskConversation,
} from './ITaskConversation';
import {
	ITaskAssignee,
} from './ITaskAssignee';
import {
	ISubtask,
} from './ISubtask';
import {
	IPrerequisiteTask,
} from './IPrerequisiteTask';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface ITask extends IAirEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	name?: string;
	description?: string;
	status?: number;
	durationUnit?: number;
	durationLength?: number;
	startDate?: Date;
	dueDate?: Date;
	importance?: number;
	urgency?: number;

	// Non-Id Relations
	topic?: ITopic;
	goalTasks?: IGoalTask[];
	taskConversations?: ITaskConversation[];
	assignees?: ITaskAssignee[];
	superasks?: ISubtask[];
	subtasks?: ISubtask[];
	prerequisiteTasks?: IPrerequisiteTask[];
	requiringTasks?: ISubtask[];

	// Transient Properties

	// Public Methods
	
}


