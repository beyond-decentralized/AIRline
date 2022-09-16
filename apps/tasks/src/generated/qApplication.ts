import {
    airApi,
    QApp
} from '@airport/aviation-communication'
import {
    DbApplication,
    ApplicationEntity_LocalId,
}                      from '@airport/ground-control';
import { QGoal } from './query/goal/QGoal';
import { QGoalConversation } from './query/goal/QGoalConversation';
import { QGoalTask } from './query/goal/QGoalTask';
import { QPrerequisiteTask } from './query/task/QPrerequisiteTask';
import { QSubtask } from './query/task/QSubtask';
import { QTask } from './query/task/QTask';
import { QTaskAssignee } from './query/task/QTaskAssignee';
import { QTaskConversation } from './query/task/QTaskConversation';
import { QTaskReferenceInComment } from './query/task/QTaskReferenceInComment';
import {
  Goal,
  GoalConversation,
  GoalTask,
  PrerequisiteTask,
  Subtask,
  Task,
  TaskAssignee,
  TaskConversation,
  TaskReferenceInComment
} from '../ddl/ddl';

export interface localhost_colon_3003____at_airline_slash_tasks_LocalQApp extends QApp {

    db: DbApplication;

  Goal: QGoal;
	GoalConversation: QGoalConversation;
	GoalTask: QGoalTask;
	PrerequisiteTask: QPrerequisiteTask;
	Subtask: QSubtask;
	Task: QTask;
	TaskAssignee: QTaskAssignee;
	TaskConversation: QTaskConversation;
	TaskReferenceInComment: QTaskReferenceInComment;

}

const __constructors__ = {
	Goal: Goal,
	GoalConversation: GoalConversation,
	GoalTask: GoalTask,
	PrerequisiteTask: PrerequisiteTask,
	Subtask: Subtask,
	Task: Task,
	TaskAssignee: TaskAssignee,
	TaskConversation: TaskConversation,
	TaskReferenceInComment: TaskReferenceInComment
};

export const Q_localhost_colon_3003____at_airline_slash_tasks: localhost_colon_3003____at_airline_slash_tasks_LocalQApp = <any>{
	__constructors__,
  domain: 'localhost:3003',
  name: '@airline/tasks'
};
export default Q_localhost_colon_3003____at_airline_slash_tasks

export function localhost_colon_3003____at_airline_slash_tasks_diSet(
	dbEntityId: ApplicationEntity_LocalId
): boolean {
	return airApi.dS(Q_localhost_colon_3003____at_airline_slash_tasks.__dbApplication__, dbEntityId)
}

airApi.setQApp(Q_localhost_colon_3003____at_airline_slash_tasks)
