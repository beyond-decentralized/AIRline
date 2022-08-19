import { Dvo, } from '@airbridge/validate';
import { Q, duoDiSet, } from './qApplication';
// Application Q object Dependency Injection readiness detection Dvo
export class SQDIDvo extends Dvo {
    constructor(dbEntityId) {
        super(dbEntityId, Q);
    }
}
export class BaseCommentDvo extends SQDIDvo {
    static diSet() {
        return duoDiSet(5);
    }
    constructor() {
        super(5);
    }
}
export class BaseCommentReferenceDvo extends SQDIDvo {
    static diSet() {
        return duoDiSet(0);
    }
    constructor() {
        super(0);
    }
}
export class BaseConversationDvo extends SQDIDvo {
    static diSet() {
        return duoDiSet(3);
    }
    constructor() {
        super(3);
    }
}
export class BaseModeratorDvo extends SQDIDvo {
    static diSet() {
        return duoDiSet(1);
    }
    constructor() {
        super(1);
    }
}
export class BaseParticipantDvo extends SQDIDvo {
    static diSet() {
        return duoDiSet(2);
    }
    constructor() {
        super(2);
    }
}
export class BaseTakeBackRequestDvo extends SQDIDvo {
    static diSet() {
        return duoDiSet(4);
    }
    constructor() {
        super(4);
    }
}
//# sourceMappingURL=baseDvos.js.map