import { PrerequisiteTask } from '../ddl/prerequisitetask';
import { PrerequisiteTaskESelect, PrerequisiteTaskECreateProperties, PrerequisiteTaskEUpdateColumns, PrerequisiteTaskEUpdateProperties, PrerequisiteTaskEId, PrerequisiteTaskGraph, QPrerequisiteTask } from './qprerequisitetask';
import { Subtask } from '../ddl/subtask';
import { SubtaskESelect, SubtaskECreateProperties, SubtaskEUpdateColumns, SubtaskEUpdateProperties, SubtaskEId, SubtaskGraph, QSubtask } from './qsubtask';
import { Task } from '../ddl/task';
import { TaskESelect, TaskECreateProperties, TaskEUpdateColumns, TaskEUpdateProperties, TaskEId, TaskGraph, QTask } from './qtask';
import { TaskAssignee } from '../ddl/taskassignee';
import { TaskAssigneeESelect, TaskAssigneeECreateProperties, TaskAssigneeEUpdateColumns, TaskAssigneeEUpdateProperties, TaskAssigneeEId, TaskAssigneeGraph, QTaskAssignee } from './qtaskassignee';
import { TaskConversation } from '../ddl/taskconversation';
import { TaskConversationESelect, TaskConversationECreateProperties, TaskConversationEUpdateColumns, TaskConversationEUpdateProperties, TaskConversationEId, TaskConversationGraph, QTaskConversation } from './qtaskconversation';
import { TaskReferenceInComment } from '../ddl/taskreferenceincomment';
import { TaskReferenceInCommentESelect, TaskReferenceInCommentECreateProperties, TaskReferenceInCommentEUpdateColumns, TaskReferenceInCommentEUpdateProperties, TaskReferenceInCommentEId, TaskReferenceInCommentGraph, QTaskReferenceInComment } from './qtaskreferenceincomment';
import { IEntityCascadeGraph, IEntityCreateProperties, IEntityIdProperties, IEntitySelectProperties, IEntityUpdateColumns, IEntityUpdateProperties, IQEntity } from '@airport/tarmaq-query';
import { IDao, Dao, DaoQueryDecorators } from '@airport/tarmaq-dao';
import { ApplicationEntity_LocalId as DbEntityId } from '@airport/ground-control';
export declare class SQDIDao<Entity, EntitySelect extends IEntitySelectProperties, EntityCreate extends IEntityCreateProperties, EntityUpdateColumns extends IEntityUpdateColumns, EntityUpdateProperties extends IEntityUpdateProperties, ApplicationEntity_LocalId extends IEntityIdProperties, EntityCascadeGraph extends IEntityCascadeGraph, IQE extends IQEntity> extends Dao<Entity, EntitySelect, EntityCreate, EntityUpdateColumns, EntityUpdateProperties, ApplicationEntity_LocalId, EntityCascadeGraph, IQE> {
    constructor(dbEntityId: DbEntityId);
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