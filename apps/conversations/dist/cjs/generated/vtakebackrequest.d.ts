import { AirEntityVDescriptor } from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import { CommentVDescriptor } from './vcomment';
import { Comment } from '../ddl/Comment';
export interface TakeBackRequestVDescriptor<T> extends AirEntityVDescriptor<T> {
    forComment?: CommentVDescriptor<Comment>;
    viaComment?: CommentVDescriptor<Comment>;
}
//# sourceMappingURL=vtakebackrequest.d.ts.map