import { Dao, DaoQueryDecorators, } from '@airport/tarmaq-dao';
import { Q, duoDiSet, } from './qApplication';
// Application Q object Dependency Injection readiness detection Dao
export class SQDIDao extends Dao {
    constructor(dbEntityId) {
        super(dbEntityId, Q);
    }
}
export class BasePrerequisiteTaskDao extends SQDIDao {
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
BasePrerequisiteTaskDao.Find = new DaoQueryDecorators();
BasePrerequisiteTaskDao.FindOne = new DaoQueryDecorators();
BasePrerequisiteTaskDao.Search = new DaoQueryDecorators();
BasePrerequisiteTaskDao.SearchOne = new DaoQueryDecorators();
export class BaseSubtaskDao extends SQDIDao {
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
BaseSubtaskDao.Find = new DaoQueryDecorators();
BaseSubtaskDao.FindOne = new DaoQueryDecorators();
BaseSubtaskDao.Search = new DaoQueryDecorators();
BaseSubtaskDao.SearchOne = new DaoQueryDecorators();
export class BaseTaskDao extends SQDIDao {
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
BaseTaskDao.Find = new DaoQueryDecorators();
BaseTaskDao.FindOne = new DaoQueryDecorators();
BaseTaskDao.Search = new DaoQueryDecorators();
BaseTaskDao.SearchOne = new DaoQueryDecorators();
export class BaseTaskAssigneeDao extends SQDIDao {
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
BaseTaskAssigneeDao.Find = new DaoQueryDecorators();
BaseTaskAssigneeDao.FindOne = new DaoQueryDecorators();
BaseTaskAssigneeDao.Search = new DaoQueryDecorators();
BaseTaskAssigneeDao.SearchOne = new DaoQueryDecorators();
export class BaseTaskConversationDao extends SQDIDao {
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
BaseTaskConversationDao.Find = new DaoQueryDecorators();
BaseTaskConversationDao.FindOne = new DaoQueryDecorators();
BaseTaskConversationDao.Search = new DaoQueryDecorators();
BaseTaskConversationDao.SearchOne = new DaoQueryDecorators();
export class BaseTaskReferenceInCommentDao extends SQDIDao {
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
BaseTaskReferenceInCommentDao.Find = new DaoQueryDecorators();
BaseTaskReferenceInCommentDao.FindOne = new DaoQueryDecorators();
BaseTaskReferenceInCommentDao.Search = new DaoQueryDecorators();
BaseTaskReferenceInCommentDao.SearchOne = new DaoQueryDecorators();
//# sourceMappingURL=baseDaos.js.map