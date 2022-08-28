var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { TASK_API, } from '../../to_be_generated/common-tokens';
import { DEPENDENCY_INJECTION, Inject, Injected, } from '@airport/direction-indicator';
// An API stub for other Applications and UIs to use
let TaskApi = class TaskApi {
    constructor() {
        DEPENDENCY_INJECTION.db().manualInject(this, TASK_API);
    }
    async findAll() {
        return await this.taskApi.findAll();
    }
    async loadConversationForTask(taskId) {
        return await this.taskApi.loadConversationForTask(taskId);
    }
    async findAllForGoal(goal) {
        return await this.taskApi.findAllForGoal(goal);
    }
    async findAllForTopic(topic) {
        return await this.taskApi.findAllForTopic(topic);
    }
    async save(task) {
        await this.taskApi.save(task);
    }
};
__decorate([
    Inject()
], TaskApi.prototype, "taskApi", void 0);
TaskApi = __decorate([
    Injected()
], TaskApi);
export { TaskApi };
//# sourceMappingURL=TaskApi.js.map