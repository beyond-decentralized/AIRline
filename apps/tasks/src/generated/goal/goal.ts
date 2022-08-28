import {
	IAirEntity,
} from '@airport/holding-pattern';
import {
	ITopic,
} from '@airline/topics';
import {
	IGoalConversation,
} from './goalconversation';
import {
	IGoalTask,
} from './goaltask';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IGoal extends IAirEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	name?: string;
	description?: string;
	status?: number;
	importance?: number;
	urgency?: number;

	// Non-Id Relations
	topic?: ITopic;
	goalConversations?: IGoalConversation[];
	goalTasks?: IGoalTask[];

	// Transient Properties

	// Public Methods
	
}


