/* eslint-disable */
import {
	PrerequisiteTask,
} from '../ddl/prerequisitetask';
import {
	PrerequisiteTaskESelect,
	PrerequisiteTaskECreateColumns,
	PrerequisiteTaskECreateProperties,
	PrerequisiteTaskEUpdateColumns,
	PrerequisiteTaskEUpdateProperties,
	PrerequisiteTaskEId,
	PrerequisiteTaskGraph,
	QPrerequisiteTask,
} from './qprerequisitetask';
import {
	Subtask,
} from '../ddl/subtask';
import {
	SubtaskESelect,
	SubtaskECreateColumns,
	SubtaskECreateProperties,
	SubtaskEUpdateColumns,
	SubtaskEUpdateProperties,
	SubtaskEId,
	SubtaskGraph,
	QSubtask,
} from './qsubtask';
import {
	Task,
} from '../ddl/task';
import {
	TaskESelect,
	TaskECreateColumns,
	TaskECreateProperties,
	TaskEUpdateColumns,
	TaskEUpdateProperties,
	TaskEId,
	TaskGraph,
	QTask,
} from './qtask';
import {
	TaskAssignee,
} from '../ddl/taskassignee';
import {
	TaskAssigneeESelect,
	TaskAssigneeECreateColumns,
	TaskAssigneeECreateProperties,
	TaskAssigneeEUpdateColumns,
	TaskAssigneeEUpdateProperties,
	TaskAssigneeEId,
	TaskAssigneeGraph,
	QTaskAssignee,
} from './qtaskassignee';
import {
	TaskConversation,
} from '../ddl/taskconversation';
import {
	TaskConversationESelect,
	TaskConversationECreateColumns,
	TaskConversationECreateProperties,
	TaskConversationEUpdateColumns,
	TaskConversationEUpdateProperties,
	TaskConversationEId,
	TaskConversationGraph,
	QTaskConversation,
} from './qtaskconversation';
import {
	TaskReferenceInComment,
} from '../ddl/taskreferenceincomment';
import {
	TaskReferenceInCommentESelect,
	TaskReferenceInCommentECreateColumns,
	TaskReferenceInCommentECreateProperties,
	TaskReferenceInCommentEUpdateColumns,
	TaskReferenceInCommentEUpdateProperties,
	TaskReferenceInCommentEId,
	TaskReferenceInCommentGraph,
	QTaskReferenceInComment,
} from './qtaskreferenceincomment';
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


export interface IBasePrerequisiteTaskDao
  extends IDao<PrerequisiteTask, PrerequisiteTaskESelect, PrerequisiteTaskECreateProperties, PrerequisiteTaskEUpdateColumns, PrerequisiteTaskEUpdateProperties, PrerequisiteTaskEId, PrerequisiteTaskGraph, QPrerequisiteTask> {
}

export class BasePrerequisiteTaskDao
  extends SQDIDao<PrerequisiteTask, PrerequisiteTaskESelect, PrerequisiteTaskECreateProperties, PrerequisiteTaskEUpdateColumns, PrerequisiteTaskEUpdateProperties, PrerequisiteTaskEId, PrerequisiteTaskGraph, QPrerequisiteTask>
	implements IBasePrerequisiteTaskDao {
	
	static Find      = new DaoQueryDecorators<PrerequisiteTaskESelect>();
	static FindOne   = new DaoQueryDecorators<PrerequisiteTaskESelect>();
	static Search    = new DaoQueryDecorators<PrerequisiteTaskESelect>();
	static SearchOne = new DaoQueryDecorators<PrerequisiteTaskESelect>();
	static Save(
		config: PrerequisiteTaskGraph
	): PropertyDecorator {
		return Dao.BaseSave<PrerequisiteTaskGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(4)
	}
	
	constructor() {
		super(4)
	}
}


export interface IBaseSubtaskDao
  extends IDao<Subtask, SubtaskESelect, SubtaskECreateProperties, SubtaskEUpdateColumns, SubtaskEUpdateProperties, SubtaskEId, SubtaskGraph, QSubtask> {
}

export class BaseSubtaskDao
  extends SQDIDao<Subtask, SubtaskESelect, SubtaskECreateProperties, SubtaskEUpdateColumns, SubtaskEUpdateProperties, SubtaskEId, SubtaskGraph, QSubtask>
	implements IBaseSubtaskDao {
	
	static Find      = new DaoQueryDecorators<SubtaskESelect>();
	static FindOne   = new DaoQueryDecorators<SubtaskESelect>();
	static Search    = new DaoQueryDecorators<SubtaskESelect>();
	static SearchOne = new DaoQueryDecorators<SubtaskESelect>();
	static Save(
		config: SubtaskGraph
	): PropertyDecorator {
		return Dao.BaseSave<SubtaskGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(0)
	}
	
	constructor() {
		super(0)
	}
}


export interface IBaseTaskDao
  extends IDao<Task, TaskESelect, TaskECreateProperties, TaskEUpdateColumns, TaskEUpdateProperties, TaskEId, TaskGraph, QTask> {
}

export class BaseTaskDao
  extends SQDIDao<Task, TaskESelect, TaskECreateProperties, TaskEUpdateColumns, TaskEUpdateProperties, TaskEId, TaskGraph, QTask>
	implements IBaseTaskDao {
	
	static Find      = new DaoQueryDecorators<TaskESelect>();
	static FindOne   = new DaoQueryDecorators<TaskESelect>();
	static Search    = new DaoQueryDecorators<TaskESelect>();
	static SearchOne = new DaoQueryDecorators<TaskESelect>();
	static Save(
		config: TaskGraph
	): PropertyDecorator {
		return Dao.BaseSave<TaskGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(3)
	}
	
	constructor() {
		super(3)
	}
}


export interface IBaseTaskAssigneeDao
  extends IDao<TaskAssignee, TaskAssigneeESelect, TaskAssigneeECreateProperties, TaskAssigneeEUpdateColumns, TaskAssigneeEUpdateProperties, TaskAssigneeEId, TaskAssigneeGraph, QTaskAssignee> {
}

export class BaseTaskAssigneeDao
  extends SQDIDao<TaskAssignee, TaskAssigneeESelect, TaskAssigneeECreateProperties, TaskAssigneeEUpdateColumns, TaskAssigneeEUpdateProperties, TaskAssigneeEId, TaskAssigneeGraph, QTaskAssignee>
	implements IBaseTaskAssigneeDao {
	
	static Find      = new DaoQueryDecorators<TaskAssigneeESelect>();
	static FindOne   = new DaoQueryDecorators<TaskAssigneeESelect>();
	static Search    = new DaoQueryDecorators<TaskAssigneeESelect>();
	static SearchOne = new DaoQueryDecorators<TaskAssigneeESelect>();
	static Save(
		config: TaskAssigneeGraph
	): PropertyDecorator {
		return Dao.BaseSave<TaskAssigneeGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(1)
	}
	
	constructor() {
		super(1)
	}
}


export interface IBaseTaskConversationDao
  extends IDao<TaskConversation, TaskConversationESelect, TaskConversationECreateProperties, TaskConversationEUpdateColumns, TaskConversationEUpdateProperties, TaskConversationEId, TaskConversationGraph, QTaskConversation> {
}

export class BaseTaskConversationDao
  extends SQDIDao<TaskConversation, TaskConversationESelect, TaskConversationECreateProperties, TaskConversationEUpdateColumns, TaskConversationEUpdateProperties, TaskConversationEId, TaskConversationGraph, QTaskConversation>
	implements IBaseTaskConversationDao {
	
	static Find      = new DaoQueryDecorators<TaskConversationESelect>();
	static FindOne   = new DaoQueryDecorators<TaskConversationESelect>();
	static Search    = new DaoQueryDecorators<TaskConversationESelect>();
	static SearchOne = new DaoQueryDecorators<TaskConversationESelect>();
	static Save(
		config: TaskConversationGraph
	): PropertyDecorator {
		return Dao.BaseSave<TaskConversationGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(2)
	}
	
	constructor() {
		super(2)
	}
}


export interface IBaseTaskReferenceInCommentDao
  extends IDao<TaskReferenceInComment, TaskReferenceInCommentESelect, TaskReferenceInCommentECreateProperties, TaskReferenceInCommentEUpdateColumns, TaskReferenceInCommentEUpdateProperties, TaskReferenceInCommentEId, TaskReferenceInCommentGraph, QTaskReferenceInComment> {
}

export class BaseTaskReferenceInCommentDao
  extends SQDIDao<TaskReferenceInComment, TaskReferenceInCommentESelect, TaskReferenceInCommentECreateProperties, TaskReferenceInCommentEUpdateColumns, TaskReferenceInCommentEUpdateProperties, TaskReferenceInCommentEId, TaskReferenceInCommentGraph, QTaskReferenceInComment>
	implements IBaseTaskReferenceInCommentDao {
	
	static Find      = new DaoQueryDecorators<TaskReferenceInCommentESelect>();
	static FindOne   = new DaoQueryDecorators<TaskReferenceInCommentESelect>();
	static Search    = new DaoQueryDecorators<TaskReferenceInCommentESelect>();
	static SearchOne = new DaoQueryDecorators<TaskReferenceInCommentESelect>();
	static Save(
		config: TaskReferenceInCommentGraph
	): PropertyDecorator {
		return Dao.BaseSave<TaskReferenceInCommentGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(5)
	}
	
	constructor() {
		super(5)
	}
}
