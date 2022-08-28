import { IAirEntity } from '@airport/holding-pattern';
import { IGoal } from './goal';
import { IConversation } from '@airline/conversations';
export interface IGoalConversation extends IAirEntity {
    goal?: IGoal;
    conversation?: IConversation;
}
//# sourceMappingURL=goalconversation.d.ts.map