import { Dao, DaoQueryDecorators, } from '@airport/tarmaq-dao';
import { Q, duoDiSet, } from './qApplication';
// Application Q object Dependency Injection readiness detection Dao
export class SQDIDao extends Dao {
    constructor(dbEntityId) {
        super(dbEntityId, Q);
    }
}
export class BaseCommentDao extends SQDIDao {
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
BaseCommentDao.Find = new DaoQueryDecorators();
BaseCommentDao.FindOne = new DaoQueryDecorators();
BaseCommentDao.Search = new DaoQueryDecorators();
BaseCommentDao.SearchOne = new DaoQueryDecorators();
export class BaseCommentReferenceDao extends SQDIDao {
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
BaseCommentReferenceDao.Find = new DaoQueryDecorators();
BaseCommentReferenceDao.FindOne = new DaoQueryDecorators();
BaseCommentReferenceDao.Search = new DaoQueryDecorators();
BaseCommentReferenceDao.SearchOne = new DaoQueryDecorators();
export class BaseConversationDao extends SQDIDao {
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
BaseConversationDao.Find = new DaoQueryDecorators();
BaseConversationDao.FindOne = new DaoQueryDecorators();
BaseConversationDao.Search = new DaoQueryDecorators();
BaseConversationDao.SearchOne = new DaoQueryDecorators();
export class BaseModeratorDao extends SQDIDao {
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
BaseModeratorDao.Find = new DaoQueryDecorators();
BaseModeratorDao.FindOne = new DaoQueryDecorators();
BaseModeratorDao.Search = new DaoQueryDecorators();
BaseModeratorDao.SearchOne = new DaoQueryDecorators();
export class BaseParticipantDao extends SQDIDao {
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
BaseParticipantDao.Find = new DaoQueryDecorators();
BaseParticipantDao.FindOne = new DaoQueryDecorators();
BaseParticipantDao.Search = new DaoQueryDecorators();
BaseParticipantDao.SearchOne = new DaoQueryDecorators();
export class BaseTakeBackRequestDao extends SQDIDao {
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
BaseTakeBackRequestDao.Find = new DaoQueryDecorators();
BaseTakeBackRequestDao.FindOne = new DaoQueryDecorators();
BaseTakeBackRequestDao.Search = new DaoQueryDecorators();
BaseTakeBackRequestDao.SearchOne = new DaoQueryDecorators();
//# sourceMappingURL=baseDaos.js.map