import { Dao, DaoQueryDecorators, } from '@airport/tarmaq-dao';
import { Q, duoDiSet, } from './qApplication';
// Application Q object Dependency Injection readiness detection Dao
export class SQDIDao extends Dao {
    constructor(dbEntityId) {
        super(dbEntityId, Q);
    }
}
export class BaseThemeDao extends SQDIDao {
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
BaseThemeDao.Find = new DaoQueryDecorators();
BaseThemeDao.FindOne = new DaoQueryDecorators();
BaseThemeDao.Search = new DaoQueryDecorators();
BaseThemeDao.SearchOne = new DaoQueryDecorators();
export class BaseTopicDao extends SQDIDao {
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
BaseTopicDao.Find = new DaoQueryDecorators();
BaseTopicDao.FindOne = new DaoQueryDecorators();
BaseTopicDao.Search = new DaoQueryDecorators();
BaseTopicDao.SearchOne = new DaoQueryDecorators();
//# sourceMappingURL=baseDaos.js.map