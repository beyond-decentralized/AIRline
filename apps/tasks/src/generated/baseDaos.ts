/* eslint-disable */
import {
	Goal,
} from '../ddl/goal/goal';
import {
	GoalESelect,
	GoalECreateColumns,
	GoalECreateProperties,
	GoalEUpdateColumns,
	GoalEUpdateProperties,
	GoalEId,
	GoalGraph,
	QGoal,
} from './goal/qgoal';
import {
	GoalConversation,
} from '../ddl/goal/goalconversation';
import {
	GoalConversationESelect,
	GoalConversationECreateColumns,
	GoalConversationECreateProperties,
	GoalConversationEUpdateColumns,
	GoalConversationEUpdateProperties,
	GoalConversationEId,
	GoalConversationGraph,
	QGoalConversation,
} from './goal/qgoalconversation';
import {
	GoalTask,
} from '../ddl/goal/goaltask';
import {
	GoalTaskESelect,
	GoalTaskECreateColumns,
	GoalTaskECreateProperties,
	GoalTaskEUpdateColumns,
	GoalTaskEUpdateProperties,
	GoalTaskEId,
	GoalTaskGraph,
	QGoalTask,
} from './goal/qgoaltask';
import {
	PrerequisiteTask,
} from '../ddl/task/prerequisitetask';
import {
	PrerequisiteTaskESelect,
	PrerequisiteTaskECreateColumns,
	PrerequisiteTaskECreateProperties,
	PrerequisiteTaskEUpdateColumns,
	PrerequisiteTaskEUpdateProperties,
	PrerequisiteTaskEId,
	PrerequisiteTaskGraph,
	QPrerequisiteTask,
} from './task/qprerequisitetask';
import {
	Subtask,
} from '../ddl/task/subtask';
import {
	SubtaskESelect,
	SubtaskECreateColumns,
	SubtaskECreateProperties,
	SubtaskEUpdateColumns,
	SubtaskEUpdateProperties,
	SubtaskEId,
	SubtaskGraph,
	QSubtask,
} from './task/qsubtask';
import {
	Task,
} from '../ddl/task/task';
import {
	TaskESelect,
	TaskECreateColumns,
	TaskECreateProperties,
	TaskEUpdateColumns,
	TaskEUpdateProperties,
	TaskEId,
	TaskGraph,
	QTask,
} from './task/qtask';
import {
	TaskAssignee,
} from '../ddl/task/taskassignee';
import {
	TaskAssigneeESelect,
	TaskAssigneeECreateColumns,
	TaskAssigneeECreateProperties,
	TaskAssigneeEUpdateColumns,
	TaskAssigneeEUpdateProperties,
	TaskAssigneeEId,
	TaskAssigneeGraph,
	QTaskAssignee,
} from './task/qtaskassignee';
import {
	TaskConversation,
} from '../ddl/task/taskconversation';
import {
	TaskConversationESelect,
	TaskConversationECreateColumns,
	TaskConversationECreateProperties,
	TaskConversationEUpdateColumns,
	TaskConversationEUpdateProperties,
	TaskConversationEId,
	TaskConversationGraph,
	QTaskConversation,
} from './task/qtaskconversation';
import {
	TaskReferenceInComment,
} from '../ddl/task/taskreferenceincomment';
import {
	TaskReferenceInCommentESelect,
	TaskReferenceInCommentECreateColumns,
	TaskReferenceInCommentECreateProperties,
	TaskReferenceInCommentEUpdateColumns,
	TaskReferenceInCommentEUpdateProperties,
	TaskReferenceInCommentEId,
	TaskReferenceInCommentGraph,
	QTaskReferenceInComment,
} from './task/qtaskreferenceincomment';
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
	localhost_colon_3002____at_airline_slash_tasks_diSet,
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


export interface IBaseGoalDao
  extends IDao<Goal, GoalESelect, GoalECreateProperties, GoalEUpdateColumns, GoalEUpdateProperties, GoalEId, GoalGraph, QGoal> {
}

export class BaseGoalDao
  extends SQDIDao<Goal, GoalESelect, GoalECreateProperties, GoalEUpdateColumns, GoalEUpdateProperties, GoalEId, GoalGraph, QGoal>
	implements IBaseGoalDao {
	
	static Find      = new DaoQueryDecorators<GoalESelect>();
	static FindOne   = new DaoQueryDecorators<GoalESelect>();
	static Search    = new DaoQueryDecorators<GoalESelect>();
	static SearchOne = new DaoQueryDecorators<GoalESelect>();
	static Save(
		config: GoalGraph
	): PropertyDecorator {
		return Dao.BaseSave<GoalGraph>(config);
  }

	static diSet(): boolean {
		return localhost_colon_3002____at_airline_slash_tasks_diSet(7)
	}
	
	constructor() {
		super(7)
	}
}


export interface IBaseGoalConversationDao
  extends IDao<GoalConversation, GoalConversationESelect, GoalConversationECreateProperties, GoalConversationEUpdateColumns, GoalConversationEUpdateProperties, GoalConversationEId, GoalConversationGraph, QGoalConversation> {
}

export class BaseGoalConversationDao
  extends SQDIDao<GoalConversation, GoalConversationESelect, GoalConversationECreateProperties, GoalConversationEUpdateColumns, GoalConversationEUpdateProperties, GoalConversationEId, GoalConversationGraph, QGoalConversation>
	implements IBaseGoalConversationDao {
	
	static Find      = new DaoQueryDecorators<GoalConversationESelect>();
	static FindOne   = new DaoQueryDecorators<GoalConversationESelect>();
	static Search    = new DaoQueryDecorators<GoalConversationESelect>();
	static SearchOne = new DaoQueryDecorators<GoalConversationESelect>();
	static Save(
		config: GoalConversationGraph
	): PropertyDecorator {
		return Dao.BaseSave<GoalConversationGraph>(config);
  }

	static diSet(): boolean {
		return localhost_colon_3002____at_airline_slash_tasks_diSet(0)
	}
	
	constructor() {
		super(0)
	}
}


export interface IBaseGoalTaskDao
  extends IDao<GoalTask, GoalTaskESelect, GoalTaskECreateProperties, GoalTaskEUpdateColumns, GoalTaskEUpdateProperties, GoalTaskEId, GoalTaskGraph, QGoalTask> {
}

export class BaseGoalTaskDao
  extends SQDIDao<GoalTask, GoalTaskESelect, GoalTaskECreateProperties, GoalTaskEUpdateColumns, GoalTaskEUpdateProperties, GoalTaskEId, GoalTaskGraph, QGoalTask>
	implements IBaseGoalTaskDao {
	
	static Find      = new DaoQueryDecorators<GoalTaskESelect>();
	static FindOne   = new DaoQueryDecorators<GoalTaskESelect>();
	static Search    = new DaoQueryDecorators<GoalTaskESelect>();
	static SearchOne = new DaoQueryDecorators<GoalTaskESelect>();
	static Save(
		config: GoalTaskGraph
	): PropertyDecorator {
		return Dao.BaseSave<GoalTaskGraph>(config);
  }

	static diSet(): boolean {
		return localhost_colon_3002____at_airline_slash_tasks_diSet(6)
	}
	
	constructor() {
		super(6)
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
		return localhost_colon_3002____at_airline_slash_tasks_diSet(1)
	}
	
	constructor() {
		super(1)
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
		return localhost_colon_3002____at_airline_slash_tasks_diSet(2)
	}
	
	constructor() {
		super(2)
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
		return localhost_colon_3002____at_airline_slash_tasks_diSet(5)
	}
	
	constructor() {
		super(5)
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
		return localhost_colon_3002____at_airline_slash_tasks_diSet(3)
	}
	
	constructor() {
		super(3)
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
		return localhost_colon_3002____at_airline_slash_tasks_diSet(4)
	}
	
	constructor() {
		super(4)
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
		return localhost_colon_3002____at_airline_slash_tasks_diSet(8)
	}
	
	constructor() {
		super(8)
	}
}
