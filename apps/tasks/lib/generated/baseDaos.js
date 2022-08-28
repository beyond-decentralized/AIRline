import { Dao, DaoQueryDecorators, } from '@airport/tarmaq-dao';
import { Q, duoDiSet, } from './qApplication';
// Application Q object Dependency Injection readiness detection Dao
export class SQDIDao extends Dao {
    constructor(dbEntityId) {
        super(dbEntityId, Q);
    }
}
export class BaseGoalDao extends SQDIDao {
    constructor() {
        super(7);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(7);
    }
}
BaseGoalDao.Find = new DaoQueryDecorators();
BaseGoalDao.FindOne = new DaoQueryDecorators();
BaseGoalDao.Search = new DaoQueryDecorators();
BaseGoalDao.SearchOne = new DaoQueryDecorators();
export class BaseGoalConversationDao extends SQDIDao {
    constructor() {
        super(0);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(0);
    }
}
BaseGoalConversationDao.Find = new DaoQueryDecorators();
BaseGoalConversationDao.FindOne = new DaoQueryDecorators();
BaseGoalConversationDao.Search = new DaoQueryDecorators();
BaseGoalConversationDao.SearchOne = new DaoQueryDecorators();
export class BaseGoalTaskDao extends SQDIDao {
    constructor() {
        super(6);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(6);
    }
}
BaseGoalTaskDao.Find = new DaoQueryDecorators();
BaseGoalTaskDao.FindOne = new DaoQueryDecorators();
BaseGoalTaskDao.Search = new DaoQueryDecorators();
BaseGoalTaskDao.SearchOne = new DaoQueryDecorators();
export class BasePrerequisiteTaskDao extends SQDIDao {
    constructor() {
        super(1);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(1);
    }
}
BasePrerequisiteTaskDao.Find = new DaoQueryDecorators();
BasePrerequisiteTaskDao.FindOne = new DaoQueryDecorators();
BasePrerequisiteTaskDao.Search = new DaoQueryDecorators();
BasePrerequisiteTaskDao.SearchOne = new DaoQueryDecorators();
export class BaseSubtaskDao extends SQDIDao {
    constructor() {
        super(2);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(2);
    }
}
BaseSubtaskDao.Find = new DaoQueryDecorators();
BaseSubtaskDao.FindOne = new DaoQueryDecorators();
BaseSubtaskDao.Search = new DaoQueryDecorators();
BaseSubtaskDao.SearchOne = new DaoQueryDecorators();
export class BaseTaskDao extends SQDIDao {
    constructor() {
        super(5);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(5);
    }
}
BaseTaskDao.Find = new DaoQueryDecorators();
BaseTaskDao.FindOne = new DaoQueryDecorators();
BaseTaskDao.Search = new DaoQueryDecorators();
BaseTaskDao.SearchOne = new DaoQueryDecorators();
export class BaseTaskAssigneeDao extends SQDIDao {
    constructor() {
        super(3);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(3);
    }
}
BaseTaskAssigneeDao.Find = new DaoQueryDecorators();
BaseTaskAssigneeDao.FindOne = new DaoQueryDecorators();
BaseTaskAssigneeDao.Search = new DaoQueryDecorators();
BaseTaskAssigneeDao.SearchOne = new DaoQueryDecorators();
export class BaseTaskConversationDao extends SQDIDao {
    constructor() {
        super(4);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(4);
    }
}
BaseTaskConversationDao.Find = new DaoQueryDecorators();
BaseTaskConversationDao.FindOne = new DaoQueryDecorators();
BaseTaskConversationDao.Search = new DaoQueryDecorators();
BaseTaskConversationDao.SearchOne = new DaoQueryDecorators();
export class BaseTaskReferenceInCommentDao extends SQDIDao {
    constructor() {
        super(8);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(8);
    }
}
BaseTaskReferenceInCommentDao.Find = new DaoQueryDecorators();
BaseTaskReferenceInCommentDao.FindOne = new DaoQueryDecorators();
BaseTaskReferenceInCommentDao.Search = new DaoQueryDecorators();
BaseTaskReferenceInCommentDao.SearchOne = new DaoQueryDecorators();
//# sourceMappingURL=baseDaos.js.map