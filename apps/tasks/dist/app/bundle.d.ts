import { Topic, ITopic, TopicESelect, TopicEOptionalId, TopicGraph, QTopicQRelation } from '@airline/topics';
import { AirEntity, IAirEntity, AirEntityESelect, AirEntityEId, AirEntityEUpdateProperties, AirEntityGraph, AirEntityEUpdateColumns, QAirEntity, QAirEntityQId, QAirEntityQRelation } from '@airport/holding-pattern';
import { Conversation, IConversation, ConversationESelect, ConversationEOptionalId, ConversationGraph, QConversationQRelation, Comment, IComment, CommentESelect, CommentEOptionalId, CommentGraph, QCommentQRelation } from '@airline/conversations';
import { UserAccount, IUserAccount, UserAccountESelect, UserAccountEOptionalId, UserAccountGraph, QUserAccountQRelation } from '@airport/travel-document-checkpoint';
import { IQNumberField, IQDateField, IQStringField, IQAirEntityOneToManyRelation, IEntitySelectProperties, IEntityCreateProperties, IEntityUpdateColumns, IEntityUpdateProperties, IEntityIdProperties, IEntityCascadeGraph, IQEntity } from '@airport/tarmaq-query';
import { Dao, IDao, DaoQueryDecorators } from '@airport/tarmaq-dao';
import { ApplicationEntity_LocalId, DbApplication } from '@airport/ground-control';
import { QApplication } from '@airport/aviation-communication';
import { IVStringField, IVNumberField, IVDateField, Dvo, IDvo } from '@airbridge/validate';
import { AirEntityVDescriptor } from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import { TopicVDescriptor, Topic as Topic$1 } from '@airline/topics/dist/app/bundle';
import { ConversationVDescriptor, Conversation as Conversation$1, CommentVDescriptor, Comment as Comment$1 } from '@airline/conversations/lib/to_be_generated/runtime-index';
import { UserAccountVDescriptor, UserAccount as UserAccount$1 } from '@airport/travel-document-checkpoint/lib/to_be_generated/runtime-index';
import { IApiRegistry } from '@airport/check-in';
import { IApplicationLoader, LastIds, JsonApplicationWithLastIds } from '@airport/apron';
import { IApplicationInitializer, ITerminalStore } from '@airport/terminal-map';
import * as _airport_direction_indicator from '@airport/direction-indicator';

declare class GoalConversation$1 extends AirEntity {
    goal: Goal$1;
    conversation: Conversation;
}

declare enum GoalStatus {
    FUTURE = 0,
    CURRENT = 1,
    OUTDATED = 2,
    ACCOMPLISHED = 3
}

declare class PrerequisiteTask$1 extends AirEntity {
    prerequisiteTask: Task$1;
    requiringTask: Task$1;
}

declare class Subtask$1 extends AirEntity {
    supertask: Task$1;
    subtask: Task$1;
}

declare class TaskAssignee$1 extends AirEntity {
    task: Task$1;
    userAccount: UserAccount;
}

declare class TaskConversation$1 extends AirEntity {
    task: Task$1;
    conversation: Conversation;
}

declare enum TaskDurationUnit {
    MINUTES = 0,
    HOURS = 1,
    DAYS = 2,
    WEEKS = 3,
    MONTHS = 4,
    YEARS = 5,
    POINTS = 6
}

declare enum TaskStatus {
    IN_PLANNING = 0,
    PENDING = 1,
    IN_PROGRESS = 2,
    DONE = 3,
    ARCHIVED = 4
}

declare class Task$1 extends AirEntity {
    name: string;
    description: string;
    status: TaskStatus;
    durationUnit: TaskDurationUnit;
    durationLength: number;
    startDate: Date;
    dueDate: Date;
    importance: number;
    urgency: number;
    topic: Topic;
    goalTasks: GoalTask$1[];
    taskConversations: TaskConversation$1[];
    assignees: TaskAssignee$1[];
    superasks: Subtask$1[];
    subtasks: Subtask$1[];
    prerequisiteTasks: PrerequisiteTask$1[];
    requiringTasks: Subtask$1[];
}

declare class GoalTask$1 extends AirEntity {
    goal: Goal$1;
    task: Task$1;
}

declare class Goal$1 extends AirEntity {
    name: string;
    description: string;
    status: GoalStatus;
    importance: number;
    urgency: number;
    topic: Topic;
    goalConversations: GoalConversation$1[];
    goalTasks: GoalTask$1[];
}

declare class Goal extends AirEntity {
    name: string;
    description: string;
    status: GoalStatus;
    importance: number;
    urgency: number;
    topic: Topic;
    goalConversations: GoalConversation$1[];
    goalTasks: GoalTask$1[];
}

interface ITaskConversation extends IAirEntity {
    task?: ITask;
    conversation?: IConversation;
}

interface ITaskAssignee extends IAirEntity {
    task?: ITask;
    userAccount?: IUserAccount;
}

interface ISubtask extends IAirEntity {
    supertask?: ITask;
    subtask?: ITask;
}

interface IPrerequisiteTask extends IAirEntity {
    prerequisiteTask?: ITask;
    requiringTask?: ITask;
}

interface ITask extends IAirEntity {
    name?: string;
    description?: string;
    status?: number;
    durationUnit?: number;
    durationLength?: number;
    startDate?: Date;
    dueDate?: Date;
    importance?: number;
    urgency?: number;
    topic?: ITopic;
    goalTasks?: IGoalTask[];
    taskConversations?: ITaskConversation[];
    assignees?: ITaskAssignee[];
    superasks?: ISubtask[];
    subtasks?: ISubtask[];
    prerequisiteTasks?: IPrerequisiteTask[];
    requiringTasks?: ISubtask[];
}

interface IGoalTask extends IAirEntity {
    goal?: IGoal;
    task?: ITask;
}

interface IGoal extends IAirEntity {
    name?: string;
    description?: string;
    status?: number;
    importance?: number;
    urgency?: number;
    topic?: ITopic;
    goalConversations?: IGoalConversation[];
    goalTasks?: IGoalTask[];
}

interface IGoalConversation extends IAirEntity {
    goal?: IGoal;
    conversation?: IConversation;
}

/**
 * SELECT - All fields and relations (optional).
 */
interface GoalConversationESelect extends AirEntityESelect, GoalConversationEOptionalId {
    goal?: GoalESelect;
    conversation?: ConversationESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
interface GoalConversationEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
interface GoalConversationEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
interface GoalConversationEUpdateProperties extends AirEntityEUpdateProperties {
    goal?: GoalEOptionalId;
    conversation?: ConversationEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
interface GoalConversationGraph extends GoalConversationEOptionalId, AirEntityGraph {
    goal?: GoalGraph;
    conversation?: ConversationGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
interface GoalConversationEUpdateColumns extends AirEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
    SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_LID?: number | IQNumberField;
    GOALS_RID_1?: number | IQNumberField;
    GOALS_AID_1?: number | IQNumberField;
    GOALS_ARID_1?: number | IQNumberField;
    CONVERSATIONS_RID_1?: number | IQNumberField;
    CONVERSATIONS_AID_1?: number | IQNumberField;
    CONVERSATIONS_ARID_1?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
interface GoalConversationECreateProperties extends Partial<GoalConversationEId>, GoalConversationEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
interface GoalConversationECreateColumns extends GoalConversationEId, GoalConversationEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
interface QGoalConversation<IQE extends QGoalConversation = any> extends QAirEntity<IQE | QGoalConversation> {
    goal: QGoalQRelation;
    conversation: QConversationQRelation;
}
interface QGoalConversationQId extends QAirEntityQId {
}
interface QGoalConversationQRelation extends QAirEntityQRelation<IGoalConversation, QGoalConversation>, QGoalConversationQId {
}

/**
 * SELECT - All fields and relations (optional).
 */
interface TaskConversationESelect extends AirEntityESelect, TaskConversationEOptionalId {
    task?: TaskESelect;
    conversation?: ConversationESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
interface TaskConversationEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
interface TaskConversationEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
interface TaskConversationEUpdateProperties extends AirEntityEUpdateProperties {
    task?: TaskEOptionalId;
    conversation?: ConversationEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
interface TaskConversationGraph extends TaskConversationEOptionalId, AirEntityGraph {
    task?: TaskGraph;
    conversation?: ConversationGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
interface TaskConversationEUpdateColumns extends AirEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
    SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_LID?: number | IQNumberField;
    TASKS_RID_1?: number | IQNumberField;
    TASKS_AID_1?: number | IQNumberField;
    TASKS_ARID_1?: number | IQNumberField;
    CONVERSATIONS_RID_1?: number | IQNumberField;
    CONVERSATIONS_AID_1?: number | IQNumberField;
    CONVERSATIONS_ARID_1?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
interface TaskConversationECreateProperties extends Partial<TaskConversationEId>, TaskConversationEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
interface TaskConversationECreateColumns extends TaskConversationEId, TaskConversationEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
interface QTaskConversation<IQE extends QTaskConversation = any> extends QAirEntity<IQE | QTaskConversation> {
    task: QTaskQRelation;
    conversation: QConversationQRelation;
}
interface QTaskConversationQId extends QAirEntityQId {
}
interface QTaskConversationQRelation extends QAirEntityQRelation<ITaskConversation, QTaskConversation>, QTaskConversationQId {
}

/**
 * SELECT - All fields and relations (optional).
 */
interface TaskAssigneeESelect extends AirEntityESelect, TaskAssigneeEOptionalId {
    task?: TaskESelect;
    userAccount?: UserAccountESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
interface TaskAssigneeEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
interface TaskAssigneeEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
interface TaskAssigneeEUpdateProperties extends AirEntityEUpdateProperties {
    task?: TaskEOptionalId;
    userAccount?: UserAccountEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
interface TaskAssigneeGraph extends TaskAssigneeEOptionalId, AirEntityGraph {
    task?: TaskGraph;
    userAccount?: UserAccountGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
interface TaskAssigneeEUpdateColumns extends AirEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
    SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_LID?: number | IQNumberField;
    TASKS_RID_1?: number | IQNumberField;
    TASKS_AID_1?: number | IQNumberField;
    TASKS_ARID_1?: number | IQNumberField;
    ASSIGNED_TO_GUID?: string | IQStringField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
interface TaskAssigneeECreateProperties extends Partial<TaskAssigneeEId>, TaskAssigneeEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
interface TaskAssigneeECreateColumns extends TaskAssigneeEId, TaskAssigneeEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
interface QTaskAssignee<IQE extends QTaskAssignee = any> extends QAirEntity<IQE | QTaskAssignee> {
    task: QTaskQRelation;
    userAccount: QUserAccountQRelation;
}
interface QTaskAssigneeQId extends QAirEntityQId {
}
interface QTaskAssigneeQRelation extends QAirEntityQRelation<ITaskAssignee, QTaskAssignee>, QTaskAssigneeQId {
}

/**
 * SELECT - All fields and relations (optional).
 */
interface SubtaskESelect extends AirEntityESelect, SubtaskEOptionalId {
    supertask?: TaskESelect;
    subtask?: TaskESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
interface SubtaskEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
interface SubtaskEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
interface SubtaskEUpdateProperties extends AirEntityEUpdateProperties {
    supertask?: TaskEOptionalId;
    subtask?: TaskEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
interface SubtaskGraph extends SubtaskEOptionalId, AirEntityGraph {
    supertask?: TaskGraph;
    subtask?: TaskGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
interface SubtaskEUpdateColumns extends AirEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
    SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_LID?: number | IQNumberField;
    TASKS_RID_1?: number | IQNumberField;
    TASKS_AID_1?: number | IQNumberField;
    TASKS_ARID_1?: number | IQNumberField;
    TASKS_RID_2?: number | IQNumberField;
    TASKS_AID_2?: number | IQNumberField;
    TASKS_ARID_2?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
interface SubtaskECreateProperties extends Partial<SubtaskEId>, SubtaskEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
interface SubtaskECreateColumns extends SubtaskEId, SubtaskEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
interface QSubtask<IQE extends QSubtask = any> extends QAirEntity<IQE | QSubtask> {
    supertask: QTaskQRelation;
    subtask: QTaskQRelation;
}
interface QSubtaskQId extends QAirEntityQId {
}
interface QSubtaskQRelation extends QAirEntityQRelation<ISubtask, QSubtask>, QSubtaskQId {
}

/**
 * SELECT - All fields and relations (optional).
 */
interface PrerequisiteTaskESelect extends AirEntityESelect, PrerequisiteTaskEOptionalId {
    prerequisiteTask?: TaskESelect;
    requiringTask?: TaskESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
interface PrerequisiteTaskEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
interface PrerequisiteTaskEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
interface PrerequisiteTaskEUpdateProperties extends AirEntityEUpdateProperties {
    prerequisiteTask?: TaskEOptionalId;
    requiringTask?: TaskEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
interface PrerequisiteTaskGraph extends PrerequisiteTaskEOptionalId, AirEntityGraph {
    prerequisiteTask?: TaskGraph;
    requiringTask?: TaskGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
interface PrerequisiteTaskEUpdateColumns extends AirEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
    SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_LID?: number | IQNumberField;
    TASKS_RID_1?: number | IQNumberField;
    TASKS_AID_1?: number | IQNumberField;
    TASKS_ARID_1?: number | IQNumberField;
    TASKS_RID_2?: number | IQNumberField;
    TASKS_AID_2?: number | IQNumberField;
    TASKS_ARID_2?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
interface PrerequisiteTaskECreateProperties extends Partial<PrerequisiteTaskEId>, PrerequisiteTaskEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
interface PrerequisiteTaskECreateColumns extends PrerequisiteTaskEId, PrerequisiteTaskEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
interface QPrerequisiteTask<IQE extends QPrerequisiteTask = any> extends QAirEntity<IQE | QPrerequisiteTask> {
    prerequisiteTask: QTaskQRelation;
    requiringTask: QTaskQRelation;
}
interface QPrerequisiteTaskQId extends QAirEntityQId {
}
interface QPrerequisiteTaskQRelation extends QAirEntityQRelation<IPrerequisiteTask, QPrerequisiteTask>, QPrerequisiteTaskQId {
}

/**
 * SELECT - All fields and relations (optional).
 */
interface TaskESelect extends AirEntityESelect, TaskEOptionalId {
    name?: string | IQStringField;
    description?: string | IQStringField;
    status?: number | IQNumberField;
    durationUnit?: number | IQNumberField;
    durationLength?: number | IQNumberField;
    startDate?: Date | IQDateField;
    dueDate?: Date | IQDateField;
    importance?: number | IQNumberField;
    urgency?: number | IQNumberField;
    topic?: TopicESelect;
    goalTasks?: GoalTaskESelect;
    taskConversations?: TaskConversationESelect;
    assignees?: TaskAssigneeESelect;
    superasks?: SubtaskESelect;
    subtasks?: SubtaskESelect;
    prerequisiteTasks?: PrerequisiteTaskESelect;
    requiringTasks?: SubtaskESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
interface TaskEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
interface TaskEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
interface TaskEUpdateProperties extends AirEntityEUpdateProperties {
    name?: string | IQStringField;
    description?: string | IQStringField;
    status?: number | IQNumberField;
    durationUnit?: number | IQNumberField;
    durationLength?: number | IQNumberField;
    startDate?: Date | IQDateField;
    dueDate?: Date | IQDateField;
    importance?: number | IQNumberField;
    urgency?: number | IQNumberField;
    topic?: TopicEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
interface TaskGraph extends TaskEOptionalId, AirEntityGraph {
    name?: string | IQStringField;
    description?: string | IQStringField;
    status?: number | IQNumberField;
    durationUnit?: number | IQNumberField;
    durationLength?: number | IQNumberField;
    startDate?: Date | IQDateField;
    dueDate?: Date | IQDateField;
    importance?: number | IQNumberField;
    urgency?: number | IQNumberField;
    topic?: TopicGraph;
    goalTasks?: GoalTaskGraph[];
    taskConversations?: TaskConversationGraph[];
    assignees?: TaskAssigneeGraph[];
    superasks?: SubtaskGraph[];
    subtasks?: SubtaskGraph[];
    prerequisiteTasks?: PrerequisiteTaskGraph[];
    requiringTasks?: SubtaskGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
interface TaskEUpdateColumns extends AirEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
    SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_LID?: number | IQNumberField;
    NAME?: string | IQStringField;
    DESCRIPTION?: string | IQStringField;
    STATUS?: number | IQNumberField;
    DURATION_UNIT?: number | IQNumberField;
    DURATION_LENGTH?: number | IQNumberField;
    START_DATE?: Date | IQDateField;
    DUE_DATE?: Date | IQDateField;
    IMPORTANCE?: number | IQNumberField;
    URGENCY?: number | IQNumberField;
    TOPIC_RID_1?: number | IQNumberField;
    TOPIC_AID_1?: number | IQNumberField;
    TOPIC_ARID_1?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
interface TaskECreateProperties extends Partial<TaskEId>, TaskEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
interface TaskECreateColumns extends TaskEId, TaskEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
interface QTask<IQE extends QTask = any> extends QAirEntity<IQE | QTask> {
    name: IQStringField;
    description: IQStringField;
    status: IQNumberField;
    durationUnit: IQNumberField;
    durationLength: IQNumberField;
    startDate: IQDateField;
    dueDate: IQDateField;
    importance: IQNumberField;
    urgency: IQNumberField;
    topic: QTopicQRelation;
    goalTasks: IQAirEntityOneToManyRelation<IGoalTask, QGoalTask>;
    taskConversations: IQAirEntityOneToManyRelation<ITaskConversation, QTaskConversation>;
    assignees: IQAirEntityOneToManyRelation<ITaskAssignee, QTaskAssignee>;
    superasks: IQAirEntityOneToManyRelation<ISubtask, QSubtask>;
    subtasks: IQAirEntityOneToManyRelation<ISubtask, QSubtask>;
    prerequisiteTasks: IQAirEntityOneToManyRelation<IPrerequisiteTask, QPrerequisiteTask>;
    requiringTasks: IQAirEntityOneToManyRelation<ISubtask, QSubtask>;
}
interface QTaskQId extends QAirEntityQId {
}
interface QTaskQRelation extends QAirEntityQRelation<ITask, QTask>, QTaskQId {
}

/**
 * SELECT - All fields and relations (optional).
 */
interface GoalTaskESelect extends AirEntityESelect, GoalTaskEOptionalId {
    goal?: GoalESelect;
    task?: TaskESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
interface GoalTaskEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
interface GoalTaskEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
interface GoalTaskEUpdateProperties extends AirEntityEUpdateProperties {
    goal?: GoalEOptionalId;
    task?: TaskEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
interface GoalTaskGraph extends GoalTaskEOptionalId, AirEntityGraph {
    goal?: GoalGraph;
    task?: TaskGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
interface GoalTaskEUpdateColumns extends AirEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
    SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_LID?: number | IQNumberField;
    GOALS_RID_1?: number | IQNumberField;
    GOALS_AID_1?: number | IQNumberField;
    GOALS_ARID_1?: number | IQNumberField;
    TASKS_RID_1?: number | IQNumberField;
    TASKS_AID_1?: number | IQNumberField;
    TASKS_ARID_1?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
interface GoalTaskECreateProperties extends Partial<GoalTaskEId>, GoalTaskEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
interface GoalTaskECreateColumns extends GoalTaskEId, GoalTaskEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
interface QGoalTask<IQE extends QGoalTask = any> extends QAirEntity<IQE | QGoalTask> {
    goal: QGoalQRelation;
    task: QTaskQRelation;
}
interface QGoalTaskQId extends QAirEntityQId {
}
interface QGoalTaskQRelation extends QAirEntityQRelation<IGoalTask, QGoalTask>, QGoalTaskQId {
}

/**
 * SELECT - All fields and relations (optional).
 */
interface GoalESelect extends AirEntityESelect, GoalEOptionalId {
    name?: string | IQStringField;
    description?: string | IQStringField;
    status?: number | IQNumberField;
    importance?: number | IQNumberField;
    urgency?: number | IQNumberField;
    topic?: TopicESelect;
    goalConversations?: GoalConversationESelect;
    goalTasks?: GoalTaskESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
interface GoalEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
interface GoalEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
interface GoalEUpdateProperties extends AirEntityEUpdateProperties {
    name?: string | IQStringField;
    description?: string | IQStringField;
    status?: number | IQNumberField;
    importance?: number | IQNumberField;
    urgency?: number | IQNumberField;
    topic?: TopicEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
interface GoalGraph extends GoalEOptionalId, AirEntityGraph {
    name?: string | IQStringField;
    description?: string | IQStringField;
    status?: number | IQNumberField;
    importance?: number | IQNumberField;
    urgency?: number | IQNumberField;
    topic?: TopicGraph;
    goalConversations?: GoalConversationGraph[];
    goalTasks?: GoalTaskGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
interface GoalEUpdateColumns extends AirEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
    SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_LID?: number | IQNumberField;
    NAME?: string | IQStringField;
    DESCRIPTION?: string | IQStringField;
    STATUS?: number | IQNumberField;
    IMPORTANCE?: number | IQNumberField;
    URGENCY?: number | IQNumberField;
    TOPIC_RID_1?: number | IQNumberField;
    TOPIC_AID_1?: number | IQNumberField;
    TOPIC_ARID_1?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
interface GoalECreateProperties extends Partial<GoalEId>, GoalEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
interface GoalECreateColumns extends GoalEId, GoalEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
interface QGoal<IQE extends QGoal = any> extends QAirEntity<IQE | QGoal> {
    name: IQStringField;
    description: IQStringField;
    status: IQNumberField;
    importance: IQNumberField;
    urgency: IQNumberField;
    topic: QTopicQRelation;
    goalConversations: IQAirEntityOneToManyRelation<IGoalConversation, QGoalConversation>;
    goalTasks: IQAirEntityOneToManyRelation<IGoalTask, QGoalTask>;
}
interface QGoalQId extends QAirEntityQId {
}
interface QGoalQRelation extends QAirEntityQRelation<IGoal, QGoal>, QGoalQId {
}

declare class GoalConversation extends AirEntity {
    goal: Goal$1;
    conversation: Conversation;
}

declare class GoalTask extends AirEntity {
    goal: Goal$1;
    task: Task$1;
}

declare class PrerequisiteTask extends AirEntity {
    prerequisiteTask: Task$1;
    requiringTask: Task$1;
}

declare class Subtask extends AirEntity {
    supertask: Task$1;
    subtask: Task$1;
}

declare class Task extends AirEntity {
    name: string;
    description: string;
    status: TaskStatus;
    durationUnit: TaskDurationUnit;
    durationLength: number;
    startDate: Date;
    dueDate: Date;
    importance: number;
    urgency: number;
    topic: Topic;
    goalTasks: GoalTask$1[];
    taskConversations: TaskConversation$1[];
    assignees: TaskAssignee$1[];
    superasks: Subtask$1[];
    subtasks: Subtask$1[];
    prerequisiteTasks: PrerequisiteTask$1[];
    requiringTasks: Subtask$1[];
}

declare class TaskAssignee extends AirEntity {
    task: Task$1;
    userAccount: UserAccount;
}

declare class TaskConversation extends AirEntity {
    task: Task$1;
    conversation: Conversation;
}

declare class TaskReferenceInComment$1 extends AirEntity {
    comment: Comment;
    task: Task$1;
}

interface ITaskReferenceInComment extends IAirEntity {
    comment?: IComment;
    task?: ITask;
}

/**
 * SELECT - All fields and relations (optional).
 */
interface TaskReferenceInCommentESelect extends AirEntityESelect, TaskReferenceInCommentEOptionalId {
    comment?: CommentESelect;
    task?: TaskESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
interface TaskReferenceInCommentEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
interface TaskReferenceInCommentEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
interface TaskReferenceInCommentEUpdateProperties extends AirEntityEUpdateProperties {
    comment?: CommentEOptionalId;
    task?: TaskEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
interface TaskReferenceInCommentGraph extends TaskReferenceInCommentEOptionalId, AirEntityGraph {
    comment?: CommentGraph;
    task?: TaskGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
interface TaskReferenceInCommentEUpdateColumns extends AirEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
    SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_LID?: number | IQNumberField;
    COMMENTS_RID_1?: number | IQNumberField;
    COMMENTS_AID_1?: number | IQNumberField;
    COMMENTS_ARID_1?: number | IQNumberField;
    TASKS_RID_1?: number | IQNumberField;
    TASKS_AID_1?: number | IQNumberField;
    TASKS_ARID_1?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
interface TaskReferenceInCommentECreateProperties extends Partial<TaskReferenceInCommentEId>, TaskReferenceInCommentEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
interface TaskReferenceInCommentECreateColumns extends TaskReferenceInCommentEId, TaskReferenceInCommentEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
interface QTaskReferenceInComment<IQE extends QTaskReferenceInComment = any> extends QAirEntity<IQE | QTaskReferenceInComment> {
    comment: QCommentQRelation;
    task: QTaskQRelation;
}
interface QTaskReferenceInCommentQId extends QAirEntityQId {
}
interface QTaskReferenceInCommentQRelation extends QAirEntityQRelation<ITaskReferenceInComment, QTaskReferenceInComment>, QTaskReferenceInCommentQId {
}

declare class SQDIDao<Entity, EntitySelect extends IEntitySelectProperties, EntityCreate extends IEntityCreateProperties, EntityUpdateColumns extends IEntityUpdateColumns, EntityUpdateProperties extends IEntityUpdateProperties, ApplicationEntity_LocalId extends IEntityIdProperties, EntityCascadeGraph extends IEntityCascadeGraph, IQE extends IQEntity> extends Dao<Entity, EntitySelect, EntityCreate, EntityUpdateColumns, EntityUpdateProperties, ApplicationEntity_LocalId, EntityCascadeGraph, IQE> {
    constructor(dbEntityId: ApplicationEntity_LocalId);
}
interface IBaseGoalDao extends IDao<Goal, GoalESelect, GoalECreateProperties, GoalEUpdateColumns, GoalEUpdateProperties, GoalEId, GoalGraph, QGoal> {
}
declare class BaseGoalDao extends SQDIDao<Goal, GoalESelect, GoalECreateProperties, GoalEUpdateColumns, GoalEUpdateProperties, GoalEId, GoalGraph, QGoal> implements IBaseGoalDao {
    static Find: DaoQueryDecorators<GoalESelect>;
    static FindOne: DaoQueryDecorators<GoalESelect>;
    static Search: DaoQueryDecorators<GoalESelect>;
    static SearchOne: DaoQueryDecorators<GoalESelect>;
    static Save(config: GoalGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
interface IBaseGoalConversationDao extends IDao<GoalConversation, GoalConversationESelect, GoalConversationECreateProperties, GoalConversationEUpdateColumns, GoalConversationEUpdateProperties, GoalConversationEId, GoalConversationGraph, QGoalConversation> {
}
declare class BaseGoalConversationDao extends SQDIDao<GoalConversation, GoalConversationESelect, GoalConversationECreateProperties, GoalConversationEUpdateColumns, GoalConversationEUpdateProperties, GoalConversationEId, GoalConversationGraph, QGoalConversation> implements IBaseGoalConversationDao {
    static Find: DaoQueryDecorators<GoalConversationESelect>;
    static FindOne: DaoQueryDecorators<GoalConversationESelect>;
    static Search: DaoQueryDecorators<GoalConversationESelect>;
    static SearchOne: DaoQueryDecorators<GoalConversationESelect>;
    static Save(config: GoalConversationGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
interface IBaseGoalTaskDao extends IDao<GoalTask, GoalTaskESelect, GoalTaskECreateProperties, GoalTaskEUpdateColumns, GoalTaskEUpdateProperties, GoalTaskEId, GoalTaskGraph, QGoalTask> {
}
declare class BaseGoalTaskDao extends SQDIDao<GoalTask, GoalTaskESelect, GoalTaskECreateProperties, GoalTaskEUpdateColumns, GoalTaskEUpdateProperties, GoalTaskEId, GoalTaskGraph, QGoalTask> implements IBaseGoalTaskDao {
    static Find: DaoQueryDecorators<GoalTaskESelect>;
    static FindOne: DaoQueryDecorators<GoalTaskESelect>;
    static Search: DaoQueryDecorators<GoalTaskESelect>;
    static SearchOne: DaoQueryDecorators<GoalTaskESelect>;
    static Save(config: GoalTaskGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
interface IBasePrerequisiteTaskDao extends IDao<PrerequisiteTask, PrerequisiteTaskESelect, PrerequisiteTaskECreateProperties, PrerequisiteTaskEUpdateColumns, PrerequisiteTaskEUpdateProperties, PrerequisiteTaskEId, PrerequisiteTaskGraph, QPrerequisiteTask> {
}
declare class BasePrerequisiteTaskDao extends SQDIDao<PrerequisiteTask, PrerequisiteTaskESelect, PrerequisiteTaskECreateProperties, PrerequisiteTaskEUpdateColumns, PrerequisiteTaskEUpdateProperties, PrerequisiteTaskEId, PrerequisiteTaskGraph, QPrerequisiteTask> implements IBasePrerequisiteTaskDao {
    static Find: DaoQueryDecorators<PrerequisiteTaskESelect>;
    static FindOne: DaoQueryDecorators<PrerequisiteTaskESelect>;
    static Search: DaoQueryDecorators<PrerequisiteTaskESelect>;
    static SearchOne: DaoQueryDecorators<PrerequisiteTaskESelect>;
    static Save(config: PrerequisiteTaskGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
interface IBaseSubtaskDao extends IDao<Subtask, SubtaskESelect, SubtaskECreateProperties, SubtaskEUpdateColumns, SubtaskEUpdateProperties, SubtaskEId, SubtaskGraph, QSubtask> {
}
declare class BaseSubtaskDao extends SQDIDao<Subtask, SubtaskESelect, SubtaskECreateProperties, SubtaskEUpdateColumns, SubtaskEUpdateProperties, SubtaskEId, SubtaskGraph, QSubtask> implements IBaseSubtaskDao {
    static Find: DaoQueryDecorators<SubtaskESelect>;
    static FindOne: DaoQueryDecorators<SubtaskESelect>;
    static Search: DaoQueryDecorators<SubtaskESelect>;
    static SearchOne: DaoQueryDecorators<SubtaskESelect>;
    static Save(config: SubtaskGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
interface IBaseTaskDao extends IDao<Task, TaskESelect, TaskECreateProperties, TaskEUpdateColumns, TaskEUpdateProperties, TaskEId, TaskGraph, QTask> {
}
declare class BaseTaskDao extends SQDIDao<Task, TaskESelect, TaskECreateProperties, TaskEUpdateColumns, TaskEUpdateProperties, TaskEId, TaskGraph, QTask> implements IBaseTaskDao {
    static Find: DaoQueryDecorators<TaskESelect>;
    static FindOne: DaoQueryDecorators<TaskESelect>;
    static Search: DaoQueryDecorators<TaskESelect>;
    static SearchOne: DaoQueryDecorators<TaskESelect>;
    static Save(config: TaskGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
interface IBaseTaskAssigneeDao extends IDao<TaskAssignee, TaskAssigneeESelect, TaskAssigneeECreateProperties, TaskAssigneeEUpdateColumns, TaskAssigneeEUpdateProperties, TaskAssigneeEId, TaskAssigneeGraph, QTaskAssignee> {
}
declare class BaseTaskAssigneeDao extends SQDIDao<TaskAssignee, TaskAssigneeESelect, TaskAssigneeECreateProperties, TaskAssigneeEUpdateColumns, TaskAssigneeEUpdateProperties, TaskAssigneeEId, TaskAssigneeGraph, QTaskAssignee> implements IBaseTaskAssigneeDao {
    static Find: DaoQueryDecorators<TaskAssigneeESelect>;
    static FindOne: DaoQueryDecorators<TaskAssigneeESelect>;
    static Search: DaoQueryDecorators<TaskAssigneeESelect>;
    static SearchOne: DaoQueryDecorators<TaskAssigneeESelect>;
    static Save(config: TaskAssigneeGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
interface IBaseTaskConversationDao extends IDao<TaskConversation, TaskConversationESelect, TaskConversationECreateProperties, TaskConversationEUpdateColumns, TaskConversationEUpdateProperties, TaskConversationEId, TaskConversationGraph, QTaskConversation> {
}
declare class BaseTaskConversationDao extends SQDIDao<TaskConversation, TaskConversationESelect, TaskConversationECreateProperties, TaskConversationEUpdateColumns, TaskConversationEUpdateProperties, TaskConversationEId, TaskConversationGraph, QTaskConversation> implements IBaseTaskConversationDao {
    static Find: DaoQueryDecorators<TaskConversationESelect>;
    static FindOne: DaoQueryDecorators<TaskConversationESelect>;
    static Search: DaoQueryDecorators<TaskConversationESelect>;
    static SearchOne: DaoQueryDecorators<TaskConversationESelect>;
    static Save(config: TaskConversationGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
interface IBaseTaskReferenceInCommentDao extends IDao<TaskReferenceInComment$1, TaskReferenceInCommentESelect, TaskReferenceInCommentECreateProperties, TaskReferenceInCommentEUpdateColumns, TaskReferenceInCommentEUpdateProperties, TaskReferenceInCommentEId, TaskReferenceInCommentGraph, QTaskReferenceInComment> {
}
declare class BaseTaskReferenceInCommentDao extends SQDIDao<TaskReferenceInComment$1, TaskReferenceInCommentESelect, TaskReferenceInCommentECreateProperties, TaskReferenceInCommentEUpdateColumns, TaskReferenceInCommentEUpdateProperties, TaskReferenceInCommentEId, TaskReferenceInCommentGraph, QTaskReferenceInComment> implements IBaseTaskReferenceInCommentDao {
    static Find: DaoQueryDecorators<TaskReferenceInCommentESelect>;
    static FindOne: DaoQueryDecorators<TaskReferenceInCommentESelect>;
    static Search: DaoQueryDecorators<TaskReferenceInCommentESelect>;
    static SearchOne: DaoQueryDecorators<TaskReferenceInCommentESelect>;
    static Save(config: TaskReferenceInCommentGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}

declare class GoalDao extends BaseGoalDao {
    findAll(): Promise<Goal$1[]>;
    findById(goalUuId: string | Goal$1): Promise<Goal$1>;
    findAllForTopic(topic: Topic | string): Promise<Goal$1[]>;
}

declare class TaskDao extends BaseTaskDao {
    findById(taskUuId: string): Promise<Task$1>;
    findAllForGoal(goal: Goal$1 | string): Promise<Task$1[]>;
    findAllForTopic(topic: Topic | string): Promise<Task$1[]>;
}

declare class TaskReferenceInComment extends AirEntity {
    comment: Comment;
    task: Task$1;
}

declare const MAPPED_SUPERCLASS: any[];

interface LocalQApplication extends QApplication {
    db: DbApplication;
    Goal: QGoal;
    GoalConversation: QGoalConversation;
    GoalTask: QGoalTask;
    PrerequisiteTask: QPrerequisiteTask;
    Subtask: QSubtask;
    Task: QTask;
    TaskAssignee: QTaskAssignee;
    TaskConversation: QTaskConversation;
    TaskReferenceInComment: QTaskReferenceInComment;
}
declare const Q_APPLICATION: LocalQApplication;
declare const Q: LocalQApplication;
declare function diSet(dbEntityId: ApplicationEntity_LocalId): boolean;
declare function duoDiSet(dbEntityId: ApplicationEntity_LocalId): boolean;

interface GoalConversationVDescriptor<T> extends AirEntityVDescriptor<T> {
    goal?: GoalVDescriptor<Goal$1>;
    conversation?: ConversationVDescriptor<Conversation$1>;
}

interface TaskConversationVDescriptor<T> extends AirEntityVDescriptor<T> {
    task?: TaskVDescriptor<Task$1>;
    conversation?: ConversationVDescriptor<Conversation$1>;
}

interface TaskAssigneeVDescriptor<T> extends AirEntityVDescriptor<T> {
    task?: TaskVDescriptor<Task$1>;
    userAccount?: UserAccountVDescriptor<UserAccount$1>;
}

interface SubtaskVDescriptor<T> extends AirEntityVDescriptor<T> {
    supertask?: TaskVDescriptor<Task$1>;
    subtask?: TaskVDescriptor<Task$1>;
}

interface PrerequisiteTaskVDescriptor<T> extends AirEntityVDescriptor<T> {
    prerequisiteTask?: TaskVDescriptor<Task$1>;
    requiringTask?: TaskVDescriptor<Task$1>;
}

interface TaskVDescriptor<T> extends AirEntityVDescriptor<T> {
    name?: string | IVStringField;
    description?: string | IVStringField;
    status?: number | IVNumberField;
    durationUnit?: number | IVNumberField;
    durationLength?: number | IVNumberField;
    startDate?: Date | IVDateField;
    dueDate?: Date | IVDateField;
    importance?: number | IVNumberField;
    urgency?: number | IVNumberField;
    topic?: TopicVDescriptor<Topic$1>;
    goalTasks?: GoalTaskVDescriptor<GoalTask$1>;
    taskConversations?: TaskConversationVDescriptor<TaskConversation$1>;
    assignees?: TaskAssigneeVDescriptor<TaskAssignee$1>;
    superasks?: SubtaskVDescriptor<Subtask$1>;
    subtasks?: SubtaskVDescriptor<Subtask$1>;
    prerequisiteTasks?: PrerequisiteTaskVDescriptor<PrerequisiteTask$1>;
    requiringTasks?: SubtaskVDescriptor<Subtask$1>;
}

interface GoalTaskVDescriptor<T> extends AirEntityVDescriptor<T> {
    goal?: GoalVDescriptor<Goal$1>;
    task?: TaskVDescriptor<Task$1>;
}

interface GoalVDescriptor<T> extends AirEntityVDescriptor<T> {
    name?: string | IVStringField;
    description?: string | IVStringField;
    status?: number | IVNumberField;
    importance?: number | IVNumberField;
    urgency?: number | IVNumberField;
    topic?: TopicVDescriptor<Topic$1>;
    goalConversations?: GoalConversationVDescriptor<GoalConversation$1>;
    goalTasks?: GoalTaskVDescriptor<GoalTask$1>;
}

interface TaskReferenceInCommentVDescriptor<T> extends AirEntityVDescriptor<T> {
    comment?: CommentVDescriptor<Comment$1>;
    task?: TaskVDescriptor<Task$1>;
}

declare class SQDIDvo<Entity, EntityVDescriptor> extends Dvo<Entity, EntityVDescriptor> {
    constructor(dbEntityId: ApplicationEntity_LocalId);
}
interface IBaseGoalDvo extends IDvo<Goal, GoalVDescriptor<Goal>> {
}
declare class BaseGoalDvo extends SQDIDvo<Goal, GoalVDescriptor<Goal>> implements IBaseGoalDvo {
    static diSet(): boolean;
    constructor();
}
interface IBaseGoalConversationDvo extends IDvo<GoalConversation, GoalConversationVDescriptor<GoalConversation>> {
}
declare class BaseGoalConversationDvo extends SQDIDvo<GoalConversation, GoalConversationVDescriptor<GoalConversation>> implements IBaseGoalConversationDvo {
    static diSet(): boolean;
    constructor();
}
interface IBaseGoalTaskDvo extends IDvo<GoalTask, GoalTaskVDescriptor<GoalTask>> {
}
declare class BaseGoalTaskDvo extends SQDIDvo<GoalTask, GoalTaskVDescriptor<GoalTask>> implements IBaseGoalTaskDvo {
    static diSet(): boolean;
    constructor();
}
interface IBasePrerequisiteTaskDvo extends IDvo<PrerequisiteTask, PrerequisiteTaskVDescriptor<PrerequisiteTask>> {
}
declare class BasePrerequisiteTaskDvo extends SQDIDvo<PrerequisiteTask, PrerequisiteTaskVDescriptor<PrerequisiteTask>> implements IBasePrerequisiteTaskDvo {
    static diSet(): boolean;
    constructor();
}
interface IBaseSubtaskDvo extends IDvo<Subtask, SubtaskVDescriptor<Subtask>> {
}
declare class BaseSubtaskDvo extends SQDIDvo<Subtask, SubtaskVDescriptor<Subtask>> implements IBaseSubtaskDvo {
    static diSet(): boolean;
    constructor();
}
interface IBaseTaskDvo extends IDvo<Task, TaskVDescriptor<Task>> {
}
declare class BaseTaskDvo extends SQDIDvo<Task, TaskVDescriptor<Task>> implements IBaseTaskDvo {
    static diSet(): boolean;
    constructor();
}
interface IBaseTaskAssigneeDvo extends IDvo<TaskAssignee, TaskAssigneeVDescriptor<TaskAssignee>> {
}
declare class BaseTaskAssigneeDvo extends SQDIDvo<TaskAssignee, TaskAssigneeVDescriptor<TaskAssignee>> implements IBaseTaskAssigneeDvo {
    static diSet(): boolean;
    constructor();
}
interface IBaseTaskConversationDvo extends IDvo<TaskConversation, TaskConversationVDescriptor<TaskConversation>> {
}
declare class BaseTaskConversationDvo extends SQDIDvo<TaskConversation, TaskConversationVDescriptor<TaskConversation>> implements IBaseTaskConversationDvo {
    static diSet(): boolean;
    constructor();
}
interface IBaseTaskReferenceInCommentDvo extends IDvo<TaskReferenceInComment$1, TaskReferenceInCommentVDescriptor<TaskReferenceInComment$1>> {
}
declare class BaseTaskReferenceInCommentDvo extends SQDIDvo<TaskReferenceInComment$1, TaskReferenceInCommentVDescriptor<TaskReferenceInComment$1>> implements IBaseTaskReferenceInCommentDvo {
    static diSet(): boolean;
    constructor();
}

declare class ApplicationLoader implements IApplicationLoader {
    applicationInitializer: IApplicationInitializer;
    terminalStore: ITerminalStore;
    apiRegistry: IApiRegistry;
    private initializing;
    load(lastIds: LastIds): Promise<void>;
    initialize(): Promise<void>;
    getApplication(): JsonApplicationWithLastIds;
}

declare const GOAL_DAO: _airport_direction_indicator.IDependencyInjectionToken<any>;
declare const TASK_DAO: _airport_direction_indicator.IDependencyInjectionToken<any>;

export { ApplicationLoader, BaseGoalConversationDao, BaseGoalConversationDvo, BaseGoalDao, BaseGoalDvo, BaseGoalTaskDao, BaseGoalTaskDvo, BasePrerequisiteTaskDao, BasePrerequisiteTaskDvo, BaseSubtaskDao, BaseSubtaskDvo, BaseTaskAssigneeDao, BaseTaskAssigneeDvo, BaseTaskConversationDao, BaseTaskConversationDvo, BaseTaskDao, BaseTaskDvo, BaseTaskReferenceInCommentDao, BaseTaskReferenceInCommentDvo, GOAL_DAO, Goal$1 as Goal, GoalConversation$1 as GoalConversation, GoalConversationECreateColumns, GoalConversationECreateProperties, GoalConversationEId, GoalConversationEOptionalId, GoalConversationESelect, GoalConversationEUpdateColumns, GoalConversationEUpdateProperties, GoalConversationGraph, GoalConversationVDescriptor, GoalDao, GoalECreateColumns, GoalECreateProperties, GoalEId, GoalEOptionalId, GoalESelect, GoalEUpdateColumns, GoalEUpdateProperties, GoalGraph, GoalStatus, GoalTask$1 as GoalTask, GoalTaskECreateColumns, GoalTaskECreateProperties, GoalTaskEId, GoalTaskEOptionalId, GoalTaskESelect, GoalTaskEUpdateColumns, GoalTaskEUpdateProperties, GoalTaskGraph, GoalTaskVDescriptor, GoalVDescriptor, IBaseGoalConversationDao, IBaseGoalConversationDvo, IBaseGoalDao, IBaseGoalDvo, IBaseGoalTaskDao, IBaseGoalTaskDvo, IBasePrerequisiteTaskDao, IBasePrerequisiteTaskDvo, IBaseSubtaskDao, IBaseSubtaskDvo, IBaseTaskAssigneeDao, IBaseTaskAssigneeDvo, IBaseTaskConversationDao, IBaseTaskConversationDvo, IBaseTaskDao, IBaseTaskDvo, IBaseTaskReferenceInCommentDao, IBaseTaskReferenceInCommentDvo, IGoal, IGoalConversation, IGoalTask, IPrerequisiteTask, ISubtask, ITask, ITaskAssignee, ITaskConversation, ITaskReferenceInComment, LocalQApplication, MAPPED_SUPERCLASS, PrerequisiteTask$1 as PrerequisiteTask, PrerequisiteTaskECreateColumns, PrerequisiteTaskECreateProperties, PrerequisiteTaskEId, PrerequisiteTaskEOptionalId, PrerequisiteTaskESelect, PrerequisiteTaskEUpdateColumns, PrerequisiteTaskEUpdateProperties, PrerequisiteTaskGraph, PrerequisiteTaskVDescriptor, Q, QGoal, QGoalConversation, QGoalConversationQId, QGoalConversationQRelation, QGoalQId, QGoalQRelation, QGoalTask, QGoalTaskQId, QGoalTaskQRelation, QPrerequisiteTask, QPrerequisiteTaskQId, QPrerequisiteTaskQRelation, QSubtask, QSubtaskQId, QSubtaskQRelation, QTask, QTaskAssignee, QTaskAssigneeQId, QTaskAssigneeQRelation, QTaskConversation, QTaskConversationQId, QTaskConversationQRelation, QTaskQId, QTaskQRelation, QTaskReferenceInComment, QTaskReferenceInCommentQId, QTaskReferenceInCommentQRelation, Q_APPLICATION, SQDIDao, SQDIDvo, Subtask$1 as Subtask, SubtaskECreateColumns, SubtaskECreateProperties, SubtaskEId, SubtaskEOptionalId, SubtaskESelect, SubtaskEUpdateColumns, SubtaskEUpdateProperties, SubtaskGraph, SubtaskVDescriptor, TASK_DAO, Task$1 as Task, TaskAssignee$1 as TaskAssignee, TaskAssigneeECreateColumns, TaskAssigneeECreateProperties, TaskAssigneeEId, TaskAssigneeEOptionalId, TaskAssigneeESelect, TaskAssigneeEUpdateColumns, TaskAssigneeEUpdateProperties, TaskAssigneeGraph, TaskAssigneeVDescriptor, TaskConversation$1 as TaskConversation, TaskConversationECreateColumns, TaskConversationECreateProperties, TaskConversationEId, TaskConversationEOptionalId, TaskConversationESelect, TaskConversationEUpdateColumns, TaskConversationEUpdateProperties, TaskConversationGraph, TaskConversationVDescriptor, TaskDao, TaskDurationUnit, TaskECreateColumns, TaskECreateProperties, TaskEId, TaskEOptionalId, TaskESelect, TaskEUpdateColumns, TaskEUpdateProperties, TaskGraph, TaskReferenceInComment, TaskReferenceInCommentECreateColumns, TaskReferenceInCommentECreateProperties, TaskReferenceInCommentEId, TaskReferenceInCommentEOptionalId, TaskReferenceInCommentESelect, TaskReferenceInCommentEUpdateColumns, TaskReferenceInCommentEUpdateProperties, TaskReferenceInCommentGraph, TaskReferenceInCommentVDescriptor, TaskStatus, TaskVDescriptor, diSet, duoDiSet };
