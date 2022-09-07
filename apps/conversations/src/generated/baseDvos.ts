/* eslint-disable */
import {
	Comment,
} from '../ddl/comment';
import {
	CommentVDescriptor,
} from './vcomment';
import {
	CommentReference,
} from '../ddl/commentreference';
import {
	CommentReferenceVDescriptor,
} from './vcommentreference';
import {
	Conversation,
} from '../ddl/conversation';
import {
	ConversationVDescriptor,
} from './vconversation';
import {
	Moderator,
} from '../ddl/moderator';
import {
	ModeratorVDescriptor,
} from './vmoderator';
import {
	Participant,
} from '../ddl/participant';
import {
	ParticipantVDescriptor,
} from './vparticipant';
import {
	TakeBackRequest,
} from '../ddl/takebackrequest';
import {
	TakeBackRequestVDescriptor,
} from './vtakebackrequest';
import {
	IDvo,
	Dvo,
} from '@airbridge/validate';
import {
	ApplicationEntity_LocalId as DbEntityId,
} from '@airport/ground-control';
import {
	localhost_colon_3002____at_airline_slash_conversations_diSet,
} from './qApplication';

import Q from './qApplication'

// Application Q object Dependency Injection readiness detection Dvo
export class SQDIDvo<Entity, EntityVDescriptor>
	extends Dvo<Entity, EntityVDescriptor> {

	constructor(
		dbEntityId: DbEntityId
	) {
		super(dbEntityId, Q)
	}
}


export interface IBaseCommentDvo
  extends IDvo<Comment, CommentVDescriptor<Comment>> {
}

export class BaseCommentDvo
  extends SQDIDvo<Comment, CommentVDescriptor<Comment>>
	implements IBaseCommentDvo {

	static diSet(): boolean {
		return localhost_colon_3002____at_airline_slash_conversations_diSet(5)
	}
	
	constructor() {
		super(5)
	}
}


export interface IBaseCommentReferenceDvo
  extends IDvo<CommentReference, CommentReferenceVDescriptor<CommentReference>> {
}

export class BaseCommentReferenceDvo
  extends SQDIDvo<CommentReference, CommentReferenceVDescriptor<CommentReference>>
	implements IBaseCommentReferenceDvo {

	static diSet(): boolean {
		return localhost_colon_3002____at_airline_slash_conversations_diSet(0)
	}
	
	constructor() {
		super(0)
	}
}


export interface IBaseConversationDvo
  extends IDvo<Conversation, ConversationVDescriptor<Conversation>> {
}

export class BaseConversationDvo
  extends SQDIDvo<Conversation, ConversationVDescriptor<Conversation>>
	implements IBaseConversationDvo {

	static diSet(): boolean {
		return localhost_colon_3002____at_airline_slash_conversations_diSet(3)
	}
	
	constructor() {
		super(3)
	}
}


export interface IBaseModeratorDvo
  extends IDvo<Moderator, ModeratorVDescriptor<Moderator>> {
}

export class BaseModeratorDvo
  extends SQDIDvo<Moderator, ModeratorVDescriptor<Moderator>>
	implements IBaseModeratorDvo {

	static diSet(): boolean {
		return localhost_colon_3002____at_airline_slash_conversations_diSet(1)
	}
	
	constructor() {
		super(1)
	}
}


export interface IBaseParticipantDvo
  extends IDvo<Participant, ParticipantVDescriptor<Participant>> {
}

export class BaseParticipantDvo
  extends SQDIDvo<Participant, ParticipantVDescriptor<Participant>>
	implements IBaseParticipantDvo {

	static diSet(): boolean {
		return localhost_colon_3002____at_airline_slash_conversations_diSet(2)
	}
	
	constructor() {
		super(2)
	}
}


export interface IBaseTakeBackRequestDvo
  extends IDvo<TakeBackRequest, TakeBackRequestVDescriptor<TakeBackRequest>> {
}

export class BaseTakeBackRequestDvo
  extends SQDIDvo<TakeBackRequest, TakeBackRequestVDescriptor<TakeBackRequest>>
	implements IBaseTakeBackRequestDvo {

	static diSet(): boolean {
		return localhost_colon_3002____at_airline_slash_conversations_diSet(4)
	}
	
	constructor() {
		super(4)
	}
}
