/* eslint-disable */
import {
	Comment,
} from '../ddl/comment';
import {
	CommentESelect,
	CommentECreateColumns,
	CommentECreateProperties,
	CommentEUpdateColumns,
	CommentEUpdateProperties,
	CommentEId,
	CommentGraph,
	QComment,
} from './qcomment';
import {
	CommentReference,
} from '../ddl/commentreference';
import {
	CommentReferenceESelect,
	CommentReferenceECreateColumns,
	CommentReferenceECreateProperties,
	CommentReferenceEUpdateColumns,
	CommentReferenceEUpdateProperties,
	CommentReferenceEId,
	CommentReferenceGraph,
	QCommentReference,
} from './qcommentreference';
import {
	Conversation,
} from '../ddl/conversation';
import {
	ConversationESelect,
	ConversationECreateColumns,
	ConversationECreateProperties,
	ConversationEUpdateColumns,
	ConversationEUpdateProperties,
	ConversationEId,
	ConversationGraph,
	QConversation,
} from './qconversation';
import {
	Moderator,
} from '../ddl/moderator';
import {
	ModeratorESelect,
	ModeratorECreateColumns,
	ModeratorECreateProperties,
	ModeratorEUpdateColumns,
	ModeratorEUpdateProperties,
	ModeratorEId,
	ModeratorGraph,
	QModerator,
} from './qmoderator';
import {
	Participant,
} from '../ddl/participant';
import {
	ParticipantESelect,
	ParticipantECreateColumns,
	ParticipantECreateProperties,
	ParticipantEUpdateColumns,
	ParticipantEUpdateProperties,
	ParticipantEId,
	ParticipantGraph,
	QParticipant,
} from './qparticipant';
import {
	TakeBackRequest,
} from '../ddl/takebackrequest';
import {
	TakeBackRequestESelect,
	TakeBackRequestECreateColumns,
	TakeBackRequestECreateProperties,
	TakeBackRequestEUpdateColumns,
	TakeBackRequestEUpdateProperties,
	TakeBackRequestEId,
	TakeBackRequestGraph,
	QTakeBackRequest,
} from './qtakebackrequest';
import {
	IEntityCascadeGraph,
	IEntityCreateProperties,
	IEntityIdProperties,
	IEntitySelectProperties,
	IEntityUpdateColumns,
	IEntityUpdateProperties,
	IQEntity,
} from '@airport/tarmaq-query';
import {
	IDao,
	Dao,
	DaoQueryDecorators,
} from '@airport/tarmaq-dao';
import {
	ApplicationEntity_LocalId as DbEntityId,
} from '@airport/ground-control';
import {
	Q,
	duoDiSet,
} from './qApplication';


// Application Q object Dependency Injection readiness detection Dao
export class SQDIDao<Entity,
	EntitySelect extends IEntitySelectProperties,
	EntityCreate extends IEntityCreateProperties,
	EntityUpdateColumns extends IEntityUpdateColumns,
	EntityUpdateProperties extends IEntityUpdateProperties,
	ApplicationEntity_LocalId extends IEntityIdProperties,
	EntityCascadeGraph extends IEntityCascadeGraph,
	IQE extends IQEntity>
	extends Dao<Entity,
		EntitySelect,
		EntityCreate,
		EntityUpdateColumns,
		EntityUpdateProperties,
		ApplicationEntity_LocalId,
		EntityCascadeGraph,
		IQE> {

	constructor(
		dbEntityId: DbEntityId
	) {
		super(dbEntityId, Q)
	}
}


export interface IBaseCommentDao
  extends IDao<Comment, CommentESelect, CommentECreateProperties, CommentEUpdateColumns, CommentEUpdateProperties, CommentEId, CommentGraph, QComment> {
}

export class BaseCommentDao
  extends SQDIDao<Comment, CommentESelect, CommentECreateProperties, CommentEUpdateColumns, CommentEUpdateProperties, CommentEId, CommentGraph, QComment>
	implements IBaseCommentDao {
	
	static Find      = new DaoQueryDecorators<CommentESelect>();
	static FindOne   = new DaoQueryDecorators<CommentESelect>();
	static Search    = new DaoQueryDecorators<CommentESelect>();
	static SearchOne = new DaoQueryDecorators<CommentESelect>();
	static Save(
		config: CommentGraph
	): PropertyDecorator {
		return Dao.BaseSave<CommentGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(5)
	}
	
	constructor() {
		super(5)
	}
}


export interface IBaseCommentReferenceDao
  extends IDao<CommentReference, CommentReferenceESelect, CommentReferenceECreateProperties, CommentReferenceEUpdateColumns, CommentReferenceEUpdateProperties, CommentReferenceEId, CommentReferenceGraph, QCommentReference> {
}

export class BaseCommentReferenceDao
  extends SQDIDao<CommentReference, CommentReferenceESelect, CommentReferenceECreateProperties, CommentReferenceEUpdateColumns, CommentReferenceEUpdateProperties, CommentReferenceEId, CommentReferenceGraph, QCommentReference>
	implements IBaseCommentReferenceDao {
	
	static Find      = new DaoQueryDecorators<CommentReferenceESelect>();
	static FindOne   = new DaoQueryDecorators<CommentReferenceESelect>();
	static Search    = new DaoQueryDecorators<CommentReferenceESelect>();
	static SearchOne = new DaoQueryDecorators<CommentReferenceESelect>();
	static Save(
		config: CommentReferenceGraph
	): PropertyDecorator {
		return Dao.BaseSave<CommentReferenceGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(0)
	}
	
	constructor() {
		super(0)
	}
}


export interface IBaseConversationDao
  extends IDao<Conversation, ConversationESelect, ConversationECreateProperties, ConversationEUpdateColumns, ConversationEUpdateProperties, ConversationEId, ConversationGraph, QConversation> {
}

export class BaseConversationDao
  extends SQDIDao<Conversation, ConversationESelect, ConversationECreateProperties, ConversationEUpdateColumns, ConversationEUpdateProperties, ConversationEId, ConversationGraph, QConversation>
	implements IBaseConversationDao {
	
	static Find      = new DaoQueryDecorators<ConversationESelect>();
	static FindOne   = new DaoQueryDecorators<ConversationESelect>();
	static Search    = new DaoQueryDecorators<ConversationESelect>();
	static SearchOne = new DaoQueryDecorators<ConversationESelect>();
	static Save(
		config: ConversationGraph
	): PropertyDecorator {
		return Dao.BaseSave<ConversationGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(3)
	}
	
	constructor() {
		super(3)
	}
}


export interface IBaseModeratorDao
  extends IDao<Moderator, ModeratorESelect, ModeratorECreateProperties, ModeratorEUpdateColumns, ModeratorEUpdateProperties, ModeratorEId, ModeratorGraph, QModerator> {
}

export class BaseModeratorDao
  extends SQDIDao<Moderator, ModeratorESelect, ModeratorECreateProperties, ModeratorEUpdateColumns, ModeratorEUpdateProperties, ModeratorEId, ModeratorGraph, QModerator>
	implements IBaseModeratorDao {
	
	static Find      = new DaoQueryDecorators<ModeratorESelect>();
	static FindOne   = new DaoQueryDecorators<ModeratorESelect>();
	static Search    = new DaoQueryDecorators<ModeratorESelect>();
	static SearchOne = new DaoQueryDecorators<ModeratorESelect>();
	static Save(
		config: ModeratorGraph
	): PropertyDecorator {
		return Dao.BaseSave<ModeratorGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(1)
	}
	
	constructor() {
		super(1)
	}
}


export interface IBaseParticipantDao
  extends IDao<Participant, ParticipantESelect, ParticipantECreateProperties, ParticipantEUpdateColumns, ParticipantEUpdateProperties, ParticipantEId, ParticipantGraph, QParticipant> {
}

export class BaseParticipantDao
  extends SQDIDao<Participant, ParticipantESelect, ParticipantECreateProperties, ParticipantEUpdateColumns, ParticipantEUpdateProperties, ParticipantEId, ParticipantGraph, QParticipant>
	implements IBaseParticipantDao {
	
	static Find      = new DaoQueryDecorators<ParticipantESelect>();
	static FindOne   = new DaoQueryDecorators<ParticipantESelect>();
	static Search    = new DaoQueryDecorators<ParticipantESelect>();
	static SearchOne = new DaoQueryDecorators<ParticipantESelect>();
	static Save(
		config: ParticipantGraph
	): PropertyDecorator {
		return Dao.BaseSave<ParticipantGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(2)
	}
	
	constructor() {
		super(2)
	}
}


export interface IBaseTakeBackRequestDao
  extends IDao<TakeBackRequest, TakeBackRequestESelect, TakeBackRequestECreateProperties, TakeBackRequestEUpdateColumns, TakeBackRequestEUpdateProperties, TakeBackRequestEId, TakeBackRequestGraph, QTakeBackRequest> {
}

export class BaseTakeBackRequestDao
  extends SQDIDao<TakeBackRequest, TakeBackRequestESelect, TakeBackRequestECreateProperties, TakeBackRequestEUpdateColumns, TakeBackRequestEUpdateProperties, TakeBackRequestEId, TakeBackRequestGraph, QTakeBackRequest>
	implements IBaseTakeBackRequestDao {
	
	static Find      = new DaoQueryDecorators<TakeBackRequestESelect>();
	static FindOne   = new DaoQueryDecorators<TakeBackRequestESelect>();
	static Search    = new DaoQueryDecorators<TakeBackRequestESelect>();
	static SearchOne = new DaoQueryDecorators<TakeBackRequestESelect>();
	static Save(
		config: TakeBackRequestGraph
	): PropertyDecorator {
		return Dao.BaseSave<TakeBackRequestGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(4)
	}
	
	constructor() {
		super(4)
	}
}
