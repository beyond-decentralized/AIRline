import { IAirEntity } from '@airport/holding-pattern';
import { ITask } from './task';
import { IUserAccount } from '@airport/travel-document-checkpoint';
export interface ITaskAssignee extends IAirEntity {
    task?: ITask;
    userAccount?: IUserAccount;
}
//# sourceMappingURL=taskassignee.d.ts.map