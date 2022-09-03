import { IAirEntity } from '@airport/holding-pattern';
import { ITask } from './task';
export interface IPrerequisiteTask extends IAirEntity {
    prerequisiteTask?: ITask;
    requiringTask?: ITask;
}
//# sourceMappingURL=prerequisitetask.d.ts.map