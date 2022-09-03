import { IAirEntity } from '@airport/holding-pattern';
import { IComment } from './comment';
export interface ITakeBackRequest extends IAirEntity {
    forComment?: IComment;
    viaComment?: IComment;
}
//# sourceMappingURL=takebackrequest.d.ts.map