/* eslint-disable */
import {
	Theme,
} from '../ddl/Theme';
import {
	ThemeVDescriptor,
} from './validation/VTheme';
import {
	Topic,
} from '../ddl/Topic';
import {
	TopicVDescriptor,
} from './validation/VTopic';
import {
	IDvo,
	Dvo,
} from '@airbridge/validate';
import {
	ApplicationEntity_LocalId as DbEntityId,
} from '@airport/ground-control';
import {
	localhost_colon_3002____at_airline_slash_topics_diSet,
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


export interface IBaseThemeDvo
  extends IDvo<Theme, ThemeVDescriptor<Theme>> {
}

export class BaseThemeDvo
  extends SQDIDvo<Theme, ThemeVDescriptor<Theme>>
	implements IBaseThemeDvo {

	static diSet(): boolean {
		return localhost_colon_3002____at_airline_slash_topics_diSet(1)
	}
	
	constructor() {
		super(1)
	}
}


export interface IBaseTopicDvo
  extends IDvo<Topic, TopicVDescriptor<Topic>> {
}

export class BaseTopicDvo
  extends SQDIDvo<Topic, TopicVDescriptor<Topic>>
	implements IBaseTopicDvo {

	static diSet(): boolean {
		return localhost_colon_3002____at_airline_slash_topics_diSet(0)
	}
	
	constructor() {
		super(0)
	}
}
