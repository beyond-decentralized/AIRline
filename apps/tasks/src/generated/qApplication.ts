import {
    airApi,
    QApplication
} from '@airport/aviation-communication'
import {
    DbApplication,
    ApplicationEntity_LocalId,
}                      from '@airport/ground-control';
import { QPrerequisiteTask } from './qprerequisitetask';
import { QSubtask } from './qsubtask';
import { QTask } from './qtask';
import { QTaskAssignee } from './qtaskassignee';
import { QTaskConversation } from './qtaskconversation';
import { QTaskReferenceInComment } from './qtaskreferenceincomment';
import {
  PrerequisiteTask,
  Subtask,
  Task,
  TaskAssignee,
  TaskConversation,
  TaskReferenceInComment
} from '../ddl/ddl';

export interface LocalQApplication extends QApplication {

    db: DbApplication;

  PrerequisiteTask: QPrerequisiteTask;
	Subtask: QSubtask;
	Task: QTask;
	TaskAssignee: QTaskAssignee;
	TaskConversation: QTaskConversation;
	TaskReferenceInComment: QTaskReferenceInComment;

}

const __constructors__ = {
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
