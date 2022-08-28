import { Goal } from '../ddl/goal/goal';
import { GoalESelect, GoalECreateProperties, GoalEUpdateColumns, GoalEUpdateProperties, GoalEId, GoalGraph, QGoal } from './goal/qgoal';
import { GoalConversation } from '../ddl/goal/goalconversation';
import { GoalConversationESelect, GoalConversationECreateProperties, GoalConversationEUpdateColumns, GoalConversationEUpdateProperties, GoalConversationEId, GoalConversationGraph, QGoalConversation } from './goal/qgoalconversation';
import { GoalTask } from '../ddl/goal/goaltask';
import { GoalTaskESelect, GoalTaskECreateProperties, GoalTaskEUpdateColumns, GoalTaskEUpdateProperties, GoalTaskEId, GoalTaskGraph, QGoalTask } from './goal/qgoaltask';
import { PrerequisiteTask } from '../ddl/task/prerequisitetask';
import { PrerequisiteTaskESelect, PrerequisiteTaskECreateProperties, PrerequisiteTaskEUpdateColumns, PrerequisiteTaskEUpdateProperties, PrerequisiteTaskEId, PrerequisiteTaskGraph, QPrerequisiteTask } from './task/qprerequisitetask';
import { Subtask } from '../ddl/task/subtask';
import { SubtaskESelect, SubtaskECreateProperties, SubtaskEUpdateColumns, SubtaskEUpdateProperties, SubtaskEId, SubtaskGraph, QSubtask } from './task/qsubtask';
import { Task } from '../ddl/task/task';
import { TaskESelect, TaskECreateProperties, TaskEUpdateColumns, TaskEUpdateProperties, TaskEId, TaskGraph, QTask } from './task/qtask';
import { TaskAssignee } from '../ddl/task/taskassignee';
import { TaskAssigneeESelect, TaskAssigneeECreateProperties, TaskAssigneeEUpdateColumns, TaskAssigneeEUpdateProperties, TaskAssigneeEId, TaskAssigneeGraph, QTaskAssignee } from './task/qtaskassignee';
import { TaskConversation } from '../ddl/task/taskconversation';
import { TaskConversationESelect, TaskConversationECreateProperties, TaskConversationEUpdateColumns, TaskConversationEUpdateProperties, TaskConversationEId, TaskConversationGraph, QTaskConversation } from './task/qtaskconversation';
import { TaskReferenceInComment } from '../ddl/task/taskreferenceincomment';
import { TaskReferenceInCommentESelect, TaskReferenceInCommentECreateProperties, TaskReferenceInCommentEUpdateColumns, TaskReferenceInCommentEUpdateProperties, TaskReferenceInCommentEId, TaskReferenceInCommentGraph, QTaskReferenceInComment } from './task/qtaskreferenceincomment';
import { IEntityCascadeGraph, IEntityCreateProperties, IEntityIdProperties, IEntitySelectProperties, IEntityUpdateColumns, IEntityUpdateProperties, IQEntity } from '@airport/tarmaq-query';
import { IDao, Dao, DaoQueryDecorators } from '@airport/tarmaq-dao';
import { ApplicationEntity_LocalId as DbEntityId } from '@airport/ground-control';
export declare class SQDIDao<Entity, EntitySelect extends IEntitySelectProperties, EntityCreate extends IEntityCreateProperties, EntityUpdateColumns extends IEntityUpdateColumns, EntityUpdateProperties extends IEntityUpdateProperties, ApplicationEntity_LocalId extends IEntityIdProperties, EntityCascadeGraph extends IEntityCascadeGraph, IQE extends IQEntity> extends Dao<Entity, EntitySelect, EntityCreate, EntityUpdateColumns, EntityUpdateProperties, ApplicationEntity_LocalId, EntityCascadeGraph, IQE> {
    constructor(dbEntityId: DbEntityId);
}
export interface IBaseGoalDao extends IDao<Goal, GoalESelect, GoalECreateProperties, GoalEUpdateColumns, GoalEUpdateProperties, GoalEId, GoalGraph, QGoal> {
}
export declare class BaseGoalDao extends SQDIDao<Goal, GoalESelect, GoalECreateProperties, GoalEUpdateColumns, GoalEUpdateProperties, GoalEId, GoalGraph, QGoal> implements IBaseGoalDao {
    static Find: DaoQueryDecorators<GoalESelect>;
    static FindOne: DaoQueryDecorators<GoalESelect>;
    static Search: DaoQueryDecorators<GoalESelect>;
    static SearchOne: DaoQueryDecorators<GoalESelect>;
    static Save(config: GoalGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseGoalConversationDao extends IDao<GoalConversation, GoalConversationESelect, GoalConversationECreateProperties, GoalConversationEUpdateColumns, GoalConversationEUpdateProperties, GoalConversationEId, GoalConversationGraph, QGoalConversation> {
}
export declare class BaseGoalConversationDao extends SQDIDao<GoalConversation, GoalConversationESelect, GoalConversationECreateProperties, GoalConversationEUpdateColumns, GoalConversationEUpdateProperties, GoalConversationEId, GoalConversationGraph, QGoalConversation> implements IBaseGoalConversationDao {
    static Find: DaoQueryDecorators<GoalConversationESelect>;
    static FindOne: DaoQueryDecorators<GoalConversationESelect>;
    static Search: DaoQueryDecorators<GoalConversationESelect>;
    static SearchOne: DaoQueryDecorators<GoalConversationESelect>;
    static Save(config: GoalConversationGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseGoalTaskDao extends IDao<GoalTask, GoalTaskESelect, GoalTaskECreateProperties, GoalTaskEUpdateColumns, GoalTaskEUpdateProperties, GoalTaskEId, GoalTaskGraph, QGoalTask> {
}
export declare class BaseGoalTaskDao extends SQDIDao<GoalTask, GoalTaskESelect, GoalTaskECreateProperties, GoalTaskEUpdateColumns, GoalTaskEUpdateProperties, GoalTaskEId, GoalTaskGraph, QGoalTask> implements IBaseGoalTaskDao {
    static Find: DaoQueryDecorators<GoalTaskESelect>;
    static FindOne: DaoQueryDecorators<GoalTaskESelect>;
    static Search: DaoQueryDecorators<GoalTaskESelect>;
    static SearchOne: DaoQueryDecorators<GoalTaskESelect>;
    static Save(config: GoalTaskGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBasePrerequisiteTaskDao extends IDao<PrerequisiteTask, PrerequisiteTaskESelect, PrerequisiteTaskECreateProperties, PrerequisiteTaskEUpdateColumns, PrerequisiteTaskEUpdateProperties, PrerequisiteTaskEId, PrerequisiteTaskGraph, QPrerequisiteTask> {
}
export declare class BasePrerequisiteTaskDao extends SQDIDao<PrerequisiteTask, PrerequisiteTaskESelect, PrerequisiteTaskECreateProperties, PrerequisiteTaskEUpdateColumns, PrerequisiteTaskEUpdateProperties, PrerequisiteTaskEId, PrerequisiteTaskGraph, QPrerequisiteTask> implements IBasePrerequisiteTaskDao {
    static Find: DaoQueryDecorators<PrerequisiteTaskESelect>;
    static FindOne: DaoQueryDecorators<PrerequisiteTaskESelect>;
    static Search: DaoQueryDecorators<PrerequisiteTaskESelect>;
    static SearchOne: DaoQueryDecorators<PrerequisiteTaskESelect>;
    static Save(config: PrerequisiteTaskGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseSubtaskDao extends IDao<Subtask, SubtaskESelect, SubtaskECreateProperties, SubtaskEUpdateColumns, SubtaskEUpdateProperties, SubtaskEId, SubtaskGraph, QSubtask> {
}
export declare class BaseSubtaskDao extends SQDIDao<Subtask, SubtaskESelect, SubtaskECreateProperties, SubtaskEUpdateColumns, SubtaskEUpdateProperties, SubtaskEId, SubtaskGraph, QSubtask> implements IBaseSubtaskDao {
    static Find: DaoQueryDecorators<SubtaskESelect>;
    static FindOne: DaoQueryDecorators<SubtaskESelect>;
    static Search: DaoQueryDecorators<SubtaskESelect>;
    static SearchOne: DaoQueryDecorators<SubtaskESelect>;
    static Save(config: SubtaskGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseTaskDao extends IDao<Task, TaskESelect, TaskECreateProperties, TaskEUpdateColumns, TaskEUpdateProperties, TaskEId, TaskGraph, QTask> {
}
export declare class BaseTaskDao extends SQDIDao<Task, TaskESelect, TaskECreateProperties, TaskEUpdateColumns, TaskEUpdateProperties, TaskEId, TaskGraph, QTask> implements IBaseTaskDao {
    static Find: DaoQueryDecorators<TaskESelect>;
    static FindOne: DaoQueryDecorators<TaskESelect>;
    static Search: DaoQueryDecorators<TaskESelect>;
    static SearchOne: DaoQueryDecorators<TaskESelect>;
    static Save(config: TaskGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseTaskAssigneeDao extends IDao<TaskAssignee, TaskAssigneeESelect, TaskAssigneeECreateProperties, TaskAssigneeEUpdateColumns, TaskAssigneeEUpdateProperties, TaskAssigneeEId, TaskAssigneeGraph, QTaskAssignee> {
}
export declare class BaseTaskAssigneeDao extends SQDIDao<TaskAssignee, TaskAssigneeESelect, TaskAssigneeECreateProperties, TaskAssigneeEUpdateColumns, TaskAssigneeEUpdateProperties, TaskAssigneeEId, TaskAssigneeGraph, QTaskAssignee> implements IBaseTaskAssigneeDao {
    static Find: DaoQueryDecorators<TaskAssigneeESelect>;
    static FindOne: DaoQueryDecorators<TaskAssigneeESelect>;
    static Search: DaoQueryDecorators<TaskAssigneeESelect>;
    static SearchOne: DaoQueryDecorators<TaskAssigneeESelect>;
    static Save(config: TaskAssigneeGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseTaskConversationDao extends IDao<TaskConversation, TaskConversationESelect, TaskConversationECreateProperties, TaskConversationEUpdateColumns, TaskConversationEUpdateProperties, TaskConversationEId, TaskConversationGraph, QTaskConversation> {
}
export declare class BaseTaskConversationDao extends SQDIDao<TaskConversation, TaskConversationESelect, TaskConversationECreateProperties, TaskConversationEUpdateColumns, TaskConversationEUpdateProperties, TaskConversationEId, TaskConversationGraph, QTaskConversation> implements IBaseTaskConversationDao {
    static Find: DaoQueryDecorators<TaskConversationESelect>;
    static FindOne: DaoQueryDecorators<TaskConversationESelect>;
    static Search: DaoQueryDecorators<TaskConversationESelect>;
    static SearchOne: DaoQueryDecorators<TaskConversationESelect>;
    static Save(config: TaskConversationGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseTaskReferenceInCommentDao extends IDao<TaskReferenceInComment, TaskReferenceInCommentESelect, TaskReferenceInCommentECreateProperties, TaskReferenceInCommentEUpdateColumns, TaskReferenceInCommentEUpdateProperties, TaskReferenceInCommentEId, TaskReferenceInCommentGraph, QTaskReferenceInComment> {
}
export declare class BaseTaskReferenceInCommentDao extends SQDIDao<TaskReferenceInComment, TaskReferenceInCommentESelect, TaskReferenceInCommentECreateProperties, TaskReferenceInCommentEUpdateColumns, TaskReferenceInCommentEUpdateProperties, TaskReferenceInCommentEId, TaskReferenceInCommentGraph, QTaskReferenceInComment> implements IBaseTaskReferenceInCommentDao {
    static Find: DaoQueryDecorators<TaskReferenceInCommentESelect>;
    static FindOne: DaoQueryDecorators<TaskReferenceInCommentESelect>;
    static Search: DaoQueryDecorators<TaskReferenceInCommentESelect>;
    static SearchOne: DaoQueryDecorators<TaskReferenceInCommentESelect>;
    static Save(config: TaskReferenceInCommentGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
//# sourceMappingURL=baseDaos.d.ts.map