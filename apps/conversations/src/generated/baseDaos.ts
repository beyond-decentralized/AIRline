/* eslint-disable */
import {
	Comment,
} from '../ddl/Comment';
import {
	CommentESelect,
	CommentECreateColumns,
	CommentECreateProperties,
	CommentEUpdateColumns,
	CommentEUpdateProperties,
	CommentEId,
	CommentGraph,
	QComment,
} from './query/QComment';
import {
	CommentReference,
} from '../ddl/CommentReference';
import {
	CommentReferenceESelect,
	CommentReferenceECreateColumns,
	CommentReferenceECreateProperties,
	CommentReferenceEUpdateColumns,
	CommentReferenceEUpdateProperties,
	CommentReferenceEId,
	CommentReferenceGraph,
	QCommentReference,
} from './query/QCommentReference';
import {
	Conversation,
} from '../ddl/Conversation';
import {
	ConversationESelect,
	ConversationECreateColumns,
	ConversationECreateProperties,
	ConversationEUpdateColumns,
	ConversationEUpdateProperties,
	ConversationEId,
	ConversationGraph,
	QConversation,
} from './query/QConversation';
import {
	Moderator,
} from '../ddl/Moderator';
import {
	ModeratorESelect,
	ModeratorECreateColumns,
	ModeratorECreateProperties,
	ModeratorEUpdateColumns,
	ModeratorEUpdateProperties,
	ModeratorEId,
	ModeratorGraph,
	QModerator,
} from './query/QModerator';
import {
	Participant,
} from '../ddl/Participant';
import {
	ParticipantESelect,
	ParticipantECreateColumns,
	ParticipantECreateProperties,
	ParticipantEUpdateColumns,
	ParticipantEUpdateProperties,
	ParticipantEId,
	ParticipantGraph,
	QParticipant,
} from './query/QParticipant';
import {
	TakeBackRequest,
} from '../ddl/TakeBackRequest';
import {
	TakeBackRequestESelect,
	TakeBackRequestECreateColumns,
	TakeBackRequestECreateProperties,
	TakeBackRequestEUpdateColumns,
	TakeBackRequestEUpdateProperties,
	TakeBackRequestEId,
	TakeBackRequestGraph,
	QTakeBackRequest,
} from './query/QTakeBackRequest';
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
	localhost_colon_3002____at_airline_slash_conversations_diSet,
} from './qApplication';

import Q from './qApplication'

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
		return localhost_colon_3002____at_airline_slash_conversations_diSet(5)
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
		return localhost_colon_3002____at_airline_slash_conversations_diSet(0)
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
		return localhost_colon_3002____at_airline_slash_conversations_diSet(3)
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
		return localhost_colon_3002____at_airline_slash_conversations_diSet(1)
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
		return localhost_colon_3002____at_airline_slash_conversations_diSet(2)
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
		return localhost_colon_3002____at_airline_slash_conversations_diSet(4)
	}
	
	constructor() {
		super(4)
	}
}
