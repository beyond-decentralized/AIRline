import { QApplication } from '@airport/aviation-communication';
import { DbApplication, ApplicationEntity_LocalId } from '@airport/ground-control';
import { QGoal } from './goal/qgoal';
import { QGoalConversation } from './goal/qgoalconversation';
import { QGoalTask } from './goal/qgoaltask';
import { QPrerequisiteTask } from './task/qprerequisitetask';
import { QSubtask } from './task/qsubtask';
import { QTask } from './task/qtask';
import { QTaskAssignee } from './task/qtaskassignee';
import { QTaskConversation } from './task/qtaskconversation';
import { QTaskReferenceInComment } from './task/qtaskreferenceincomment';
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
export declare const Q_APPLICATION: LocalQApplication;
export declare const Q: LocalQApplication;
export declare function diSet(dbEntityId: ApplicationEntity_LocalId): boolean;
export declare function duoDiSet(dbEntityId: ApplicationEntity_LocalId): boolean;
//# sourceMappingURL=qApplication.d.ts.map