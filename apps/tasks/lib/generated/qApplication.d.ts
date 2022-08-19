import { QApplication } from '@airport/aviation-communication';
import { DbApplication, ApplicationEntity_LocalId } from '@airport/ground-control';
import { QPrerequisiteTask } from './qprerequisitetask';
import { QSubtask } from './qsubtask';
import { QTask } from './qtask';
import { QTaskAssignee } from './qtaskassignee';
import { QTaskConversation } from './qtaskconversation';
import { QTaskReferenceInComment } from './qtaskreferenceincomment';
export interface LocalQApplication extends QApplication {
    db: DbApplication;
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