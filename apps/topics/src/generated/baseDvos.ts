/* eslint-disable */
import {
	Theme,
} from '../ddl/theme';
import {
	ThemeVDescriptor,
} from './vtheme';
import {
	Topic,
} from '../ddl/topic';
import {
	TopicVDescriptor,
} from './vtopic';
import {
	IDvo,
	Dvo,
} from '@airbridge/validate';
import {
	ApplicationEntity_LocalId as DbEntityId,
} from '@airport/ground-control';
import {
	Q,
	duoDiSet,
} from './qApplication';


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
		return duoDiSet(1)
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
		return duoDiSet(0)
	}
	
	constructor() {
		super(0)
	}
}
