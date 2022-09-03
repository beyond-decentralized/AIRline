import { IAirEntity } from '@airport/holding-pattern';
import { IComment } from './comment';
export interface ICommentReference extends IAirEntity {
    reference?: IComment;
    referredFrom?: IComment;
}
//# sourceMappingURL=commentreference.d.ts.map