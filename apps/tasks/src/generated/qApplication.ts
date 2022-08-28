import {
    airApi,
    QApplication
} from '@airport/aviation-communication'
import {
    DbApplication,
    ApplicationEntity_LocalId,
}                      from '@airport/ground-control';
import { QGoal } from './goal/qgoal';
import { QGoalConversation } from './goal/qgoalconversation';
import { QGoalTask } from './goal/qgoaltask';
import { QPrerequisiteTask } from './task/qprerequisitetask';
import { QSubtask } from './task/qsubtask';
import { QTask } from './task/qtask';
import { QTaskAssignee } from './task/qtaskassignee';
import { QTaskConversation } from './task/qtaskconversation';
import { QTaskReferenceInComment } from './task/qtaskreferenceincomment';
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

export interface LocalQApplication extends QApplication {

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

export const Q_APPLICATION: LocalQApplication = <any>{
	__constructors__,
  domain: 'localhost:8100',
  name: '@airline/tasks'
};
export const Q: LocalQApplication = Q_APPLICATION

export function diSet(
	dbEntityId: ApplicationEntity_LocalId
): boolean {
	return airApi.dS(Q.__dbApplication__, dbEntityId)
}

export function duoDiSet(
	dbEntityId: ApplicationEntity_LocalId
): boolean {
	return airApi.ddS(Q.__dbApplication__, dbEntityId)
}

airApi.setQApplication(Q_APPLICATION)
