import {
	IAirEntity,
} from '@airport/holding-pattern';
import {
	ITopic,
} from '@airline/topics';
import {
	IGoalTask,
} from '../goal/goaltask';
import {
	ITaskConversation,
} from './taskconversation';
import {
	ITaskAssignee,
} from './taskassignee';
import {
	ISubtask,
} from './subtask';
import {
	IPrerequisiteTask,
} from './prerequisitetask';



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


