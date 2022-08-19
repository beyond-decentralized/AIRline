import {
	IAirEntity,
} from '@airport/holding-pattern';
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
	state?: number;
	durationUnit?: number;
	durationLength?: number;
	startDate?: Date;
	dueDate?: Date;
	isGoal?: boolean;
	importance?: number;
	urgency?: number;

	// Non-Id Relations
	taskConversations?: ITaskConversation[];
	assignees?: ITaskAssignee[];
	superasks?: ISubtask[];
	subtasks?: ISubtask[];
	prerequisiteTasks?: IPrerequisiteTask[];
	requiringTasks?: ISubtask[];

	// Transient Properties

	// Public Methods
	
}


