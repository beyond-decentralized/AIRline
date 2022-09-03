import { Conversation, Comment, IConversation, ConversationESelect, ConversationEOptionalId, ConversationGraph, QConversationQRelation, IComment, CommentESelect, CommentEOptionalId, CommentGraph, QCommentQRelation } from '@airline/conversations';
import { Topic, ITopic, TopicESelect, TopicEOptionalId, TopicGraph, QTopicQRelation } from '@airline/topics';
import { AirEntity, IAirEntity, AirEntityESelect, AirEntityEId, AirEntityEUpdateProperties, AirEntityGraph, AirEntityEUpdateColumns, QAirEntity, QAirEntityQId, QAirEntityQRelation } from '@airport/holding-pattern';
import { UserAccount, IUserAccount, UserAccountESelect, UserAccountEOptionalId, UserAccountGraph, QUserAccountQRelation } from '@airport/travel-document-checkpoint';
import { QApplication } from '@airport/aviation-communication';
import { DbApplication, ApplicationEntity_LocalId } from '@airport/ground-control';
import { IQNumberField, IQDateField, IQStringField, IQAirEntityOneToManyRelation } from '@airport/tarmaq-query';
import * as _airport_direction_indicator from '@airport/direction-indicator';

declare class GoalConversation extends AirEntity {
    goal: Goal;
    conversation: Conversation;
}

declare enum GoalStatus {
    FUTURE = 0,
    CURRENT = 1,
    OUTDATED = 2,
    ACCOMPLISHED = 3
}

declare class PrerequisiteTask extends AirEntity {
    prerequisiteTask: Task;
    requiringTask: Task;
}

declare class Subtask extends AirEntity {
    supertask: Task;
    subtask: Task;
}

declare class TaskAssignee extends AirEntity {
    task: Task;
    userAccount: UserAccount;
}

declare class TaskConversation extends AirEntity {
    task: Task;
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
    goalTasks: GoalTask[];
    taskConversations: TaskConversation[];
    assignees: TaskAssignee[];
    superasks: Subtask[];
    subtasks: Subtask[];
    prerequisiteTasks: PrerequisiteTask[];
    requiringTasks: Subtask[];
}

declare class GoalTask extends AirEntity {
    goal: Goal;
    task: Task;
}

declare class Goal extends AirEntity {
    name: string;
    description: string;
    status: GoalStatus;
    importance: number;
    urgency: number;
    topic: Topic;
    goalConversations: GoalConversation[];
    goalTasks: GoalTask[];
}

declare class GoalApi {
    constructor();
    goalApi: GoalApi;
    findAll(): Promise<Goal[]>;
    loadConversationForGoal(goalId: Goal | string): Promise<Conversation>;
    findAllForTopic(topic: Topic | string): Promise<Goal[]>;
    save(goal: Goal): Promise<void>;
}

declare class TaskApi {
    constructor();
    taskApi: TaskApi;
    findAll(): Promise<Task[]>;
    loadConversationForTask(taskId: string | Task): Promise<Conversation>;
    findAllForGoal(goal: Goal | string): Promise<Task[]>;
    findAllForTopic(topic: Topic | string): Promise<Task[]>;
    save(task: Task): Promise<void>;
}

declare class TaskReferenceInComment extends AirEntity {
    comment: Comment;
    task: Task;
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

declare const tasks: _airport_direction_indicator.IInjectionApplication;
declare const GOAL_API: _airport_direction_indicator.IDependencyInjectionToken<any>;
declare const TASK_API: _airport_direction_indicator.IDependencyInjectionToken<any>;

export { GOAL_API, Goal, GoalApi, GoalConversation, GoalConversationECreateColumns, GoalConversationECreateProperties, GoalConversationEId, GoalConversationEOptionalId, GoalConversationESelect, GoalConversationEUpdateColumns, GoalConversationEUpdateProperties, GoalConversationGraph, GoalECreateColumns, GoalECreateProperties, GoalEId, GoalEOptionalId, GoalESelect, GoalEUpdateColumns, GoalEUpdateProperties, GoalGraph, GoalStatus, GoalTask, GoalTaskECreateColumns, GoalTaskECreateProperties, GoalTaskEId, GoalTaskEOptionalId, GoalTaskESelect, GoalTaskEUpdateColumns, GoalTaskEUpdateProperties, GoalTaskGraph, IGoal, IGoalConversation, IGoalTask, IPrerequisiteTask, ISubtask, ITask, ITaskAssignee, ITaskConversation, ITaskReferenceInComment, LocalQApplication, PrerequisiteTask, PrerequisiteTaskECreateColumns, PrerequisiteTaskECreateProperties, PrerequisiteTaskEId, PrerequisiteTaskEOptionalId, PrerequisiteTaskESelect, PrerequisiteTaskEUpdateColumns, PrerequisiteTaskEUpdateProperties, PrerequisiteTaskGraph, Q, QGoal, QGoalConversation, QGoalConversationQId, QGoalConversationQRelation, QGoalQId, QGoalQRelation, QGoalTask, QGoalTaskQId, QGoalTaskQRelation, QPrerequisiteTask, QPrerequisiteTaskQId, QPrerequisiteTaskQRelation, QSubtask, QSubtaskQId, QSubtaskQRelation, QTask, QTaskAssignee, QTaskAssigneeQId, QTaskAssigneeQRelation, QTaskConversation, QTaskConversationQId, QTaskConversationQRelation, QTaskQId, QTaskQRelation, QTaskReferenceInComment, QTaskReferenceInCommentQId, QTaskReferenceInCommentQRelation, Q_APPLICATION, Subtask, SubtaskECreateColumns, SubtaskECreateProperties, SubtaskEId, SubtaskEOptionalId, SubtaskESelect, SubtaskEUpdateColumns, SubtaskEUpdateProperties, SubtaskGraph, TASK_API, Task, TaskApi, TaskAssignee, TaskAssigneeECreateColumns, TaskAssigneeECreateProperties, TaskAssigneeEId, TaskAssigneeEOptionalId, TaskAssigneeESelect, TaskAssigneeEUpdateColumns, TaskAssigneeEUpdateProperties, TaskAssigneeGraph, TaskConversation, TaskConversationECreateColumns, TaskConversationECreateProperties, TaskConversationEId, TaskConversationEOptionalId, TaskConversationESelect, TaskConversationEUpdateColumns, TaskConversationEUpdateProperties, TaskConversationGraph, TaskDurationUnit, TaskECreateColumns, TaskECreateProperties, TaskEId, TaskEOptionalId, TaskESelect, TaskEUpdateColumns, TaskEUpdateProperties, TaskGraph, TaskReferenceInComment, TaskReferenceInCommentECreateColumns, TaskReferenceInCommentECreateProperties, TaskReferenceInCommentEId, TaskReferenceInCommentEOptionalId, TaskReferenceInCommentESelect, TaskReferenceInCommentEUpdateColumns, TaskReferenceInCommentEUpdateProperties, TaskReferenceInCommentGraph, TaskStatus, diSet, duoDiSet, tasks };
