import { IAirEntity } from '@airport/holding-pattern';
import { ITask } from './task';
import { IConversation } from '@airline/conversations';
export interface ITaskConversation extends IAirEntity {
    task?: ITask;
    conversation?: IConversation;
}
//# sourceMappingURL=taskconversation.d.ts.map