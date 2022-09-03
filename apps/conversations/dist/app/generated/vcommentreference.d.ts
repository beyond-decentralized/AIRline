import { AirEntityVDescriptor } from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import { CommentVDescriptor } from './vcomment';
import { Comment } from '../ddl/Comment';
export interface CommentReferenceVDescriptor<T> extends AirEntityVDescriptor<T> {
    reference?: CommentVDescriptor<Comment>;
    referredFrom?: CommentVDescriptor<Comment>;
}
//# sourceMappingURL=vcommentreference.d.ts.map