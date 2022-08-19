/* eslint-disable */
import { AIRPORT_DATABASE } from '@airport/air-traffic-control';
import { DEPENDENCY_INJECTION } from '@airport/direction-indicator';
import { Subtask } from '../ddl/Subtask';
import { TaskAssignee } from '../ddl/TaskAssignee';
import { TaskConversation } from '../ddl/TaskConversation';
import { Task } from '../ddl/Task';
import { PrerequisiteTask } from '../ddl/PrerequisiteTask';
import { TaskReferenceInComment } from '../ddl/TaskReferenceInComment';
DEPENDENCY_INJECTION.db().get(AIRPORT_DATABASE).then(airDb => {
    const accumulator = airDb.getAccumulator('localhost:8100', 'undefined');
    accumulator.add(Subtask, 0);
    accumulator.add(TaskAssignee, 1);
    accumulator.add(TaskConversation, 2);
    accumulator.add(Task, 3);
    accumulator.add(PrerequisiteTask, 4);
    accumulator.add(TaskReferenceInComment, 5);
});
//# sourceMappingURL=entityMappings.js.map