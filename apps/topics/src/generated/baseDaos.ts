/* eslint-disable */
import {
	Theme,
} from '../ddl/Theme';
import {
	ThemeESelect,
	ThemeECreateColumns,
	ThemeECreateProperties,
	ThemeEUpdateColumns,
	ThemeEUpdateProperties,
	ThemeEId,
	ThemeGraph,
	QTheme,
} from './query/QTheme';
import {
	Topic,
} from '../ddl/Topic';
import {
	TopicESelect,
	TopicECreateColumns,
	TopicECreateProperties,
	TopicEUpdateColumns,
	TopicEUpdateProperties,
	TopicEId,
	TopicGraph,
	QTopic,
} from './query/QTopic';
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
	localhost_colon_3002____at_airline_slash_topics_diSet,
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


export interface IBaseThemeDao
  extends IDao<Theme, ThemeESelect, ThemeECreateProperties, ThemeEUpdateColumns, ThemeEUpdateProperties, ThemeEId, ThemeGraph, QTheme> {
}

export class BaseThemeDao
  extends SQDIDao<Theme, ThemeESelect, ThemeECreateProperties, ThemeEUpdateColumns, ThemeEUpdateProperties, ThemeEId, ThemeGraph, QTheme>
	implements IBaseThemeDao {
	
	static Find      = new DaoQueryDecorators<ThemeESelect>();
	static FindOne   = new DaoQueryDecorators<ThemeESelect>();
	static Search    = new DaoQueryDecorators<ThemeESelect>();
	static SearchOne = new DaoQueryDecorators<ThemeESelect>();
	static Save(
		config: ThemeGraph
	): PropertyDecorator {
		return Dao.BaseSave<ThemeGraph>(config);
  }

	static diSet(): boolean {
		return localhost_colon_3002____at_airline_slash_topics_diSet(1)
	}
	
	constructor() {
		super(1)
	}
}


export interface IBaseTopicDao
  extends IDao<Topic, TopicESelect, TopicECreateProperties, TopicEUpdateColumns, TopicEUpdateProperties, TopicEId, TopicGraph, QTopic> {
}

export class BaseTopicDao
  extends SQDIDao<Topic, TopicESelect, TopicECreateProperties, TopicEUpdateColumns, TopicEUpdateProperties, TopicEId, TopicGraph, QTopic>
	implements IBaseTopicDao {
	
	static Find      = new DaoQueryDecorators<TopicESelect>();
	static FindOne   = new DaoQueryDecorators<TopicESelect>();
	static Search    = new DaoQueryDecorators<TopicESelect>();
	static SearchOne = new DaoQueryDecorators<TopicESelect>();
	static Save(
		config: TopicGraph
	): PropertyDecorator {
		return Dao.BaseSave<TopicGraph>(config);
  }

	static diSet(): boolean {
		return localhost_colon_3002____at_airline_slash_topics_diSet(0)
	}
	
	constructor() {
		super(0)
	}
}
