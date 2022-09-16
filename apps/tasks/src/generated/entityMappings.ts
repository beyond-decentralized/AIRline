/* eslint-disable */
import { AIRPORT_DATABASE } from '@airport/air-traffic-control';
import { DEPENDENCY_INJECTION } from '@airport/direction-indicator';
import { GoalConversation } from '../ddl/goal/GoalConversation';
import { PrerequisiteTask } from '../ddl/task/PrerequisiteTask';
import { Subtask } from '../ddl/task/Subtask';
import { TaskAssignee } from '../ddl/task/TaskAssignee';
import { TaskConversation } from '../ddl/task/TaskConversation';
import { Task } from '../ddl/task/Task';
import { GoalTask } from '../ddl/goal/GoalTask';
import { Goal } from '../ddl/goal/Goal';
import { TaskReferenceInComment } from '../ddl/task/TaskReferenceInComment';

DEPENDENCY_INJECTION.db().get(AIRPORT_DATABASE).then(airDb => {
  const accumulator = airDb.getAccumulator('localhost:3003', '@airline/tasks');
  accumulator.add(GoalConversation, 0);
  accumulator.add(PrerequisiteTask, 1);
  accumulator.add(Subtask, 2);
  accumulator.add(TaskAssignee, 3);
  accumulator.add(TaskConversation, 4);
  accumulator.add(Task, 5);
  accumulator.add(GoalTask, 6);
  accumulator.add(Goal, 7);
  accumulator.add(TaskReferenceInComment, 8);
});
