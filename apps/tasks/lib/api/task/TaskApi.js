var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Conversation } from "@airline/conversations";
import { Api } from "@airport/check-in";
import { Inject, Injected } from "@airport/direction-indicator";
import { TaskConversation } from "../../ddl/ddl";
let TaskApi = class TaskApi {
    async findAll() {
        return await this.taskDao.findAll();
    }
    async loadConversationForTask(taskId) {
        const taskConversation = await this.taskConversationDao
            .loadConversationForTask(taskId);
        return taskConversation.conversation;
    }
    async findAllForGoal(goal) {
        return await this.taskDao.findAllForGoal(goal);
    }
    async findAllForTopic(topic) {
        return await this.taskDao.findAllForTopic(topic);
    }
    async save(task) {
        if (!task.id) {
            task.taskConversations = [];
            const taskConversation = new TaskConversation();
            taskConversation.task = task;
            task.taskConversations.push(taskConversation);
            const conversation = new Conversation();
            conversation.name = 'Task: ' + task.name;
            taskConversation.conversation = conversation;
        }
        await this.taskDao.save(task);
        await this.conversationApi.save(task.taskConversations[0].conversation);
    }
};
__decorate([
    Inject()
], TaskApi.prototype, "conversationApi", void 0);
__decorate([
    Inject()
], TaskApi.prototype, "taskConversationDao", void 0);
__decorate([
    Inject()
], TaskApi.prototype, "taskDao", void 0);
__decorate([
    Api()
], TaskApi.prototype, "findAll", null);
__decorate([
    Api()
], TaskApi.prototype, "loadConversationForTask", null);
__decorate([
    Api()
], TaskApi.prototype, "findAllForGoal", null);
__decorate([
    Api()
], TaskApi.prototype, "findAllForTopic", null);
__decorate([
    Api()
], TaskApi.prototype, "save", null);
TaskApi = __decorate([
    Injected()
], TaskApi);
export { TaskApi };
//# sourceMappingURL=TaskApi.js.map