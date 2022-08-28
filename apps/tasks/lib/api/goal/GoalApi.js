var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Conversation } from "@airline/conversations";
import { Api } from "@airport/check-in";
import { Inject, Injected } from "@airport/direction-indicator";
import { GoalConversation } from "../../ddl/ddl";
let GoalApi = class GoalApi {
    async findAll() {
        return await this.goalDao.findAll();
    }
    async loadConversationForGoal(goalId) {
        const goalConversation = await this.goalConversationDao
            .loadConversationForGoal(goalId);
        return goalConversation.conversation;
    }
    async findAllForTopic(topic) {
        return await this.goalDao.findAllForTopic(topic);
    }
    async save(goal) {
        if (!goal.id) {
            goal.goalConversations = [];
            const taskConversation = new GoalConversation();
            taskConversation.goal = goal;
            goal.goalConversations.push(taskConversation);
            const conversation = new Conversation();
            conversation.name = 'Goal: ' + goal.name;
            taskConversation.conversation = conversation;
        }
        await this.goalDao.save(goal);
        await this.conversationApi.save(goal.goalConversations[0].conversation);
    }
};
__decorate([
    Inject()
], GoalApi.prototype, "conversationApi", void 0);
__decorate([
    Inject()
], GoalApi.prototype, "goalConversationDao", void 0);
__decorate([
    Inject()
], GoalApi.prototype, "goalDao", void 0);
__decorate([
    Api()
], GoalApi.prototype, "findAll", null);
__decorate([
    Api()
], GoalApi.prototype, "loadConversationForGoal", null);
__decorate([
    Api()
], GoalApi.prototype, "findAllForTopic", null);
__decorate([
    Api()
], GoalApi.prototype, "save", null);
GoalApi = __decorate([
    Injected()
], GoalApi);
export { GoalApi };
//# sourceMappingURL=GoalApi.js.map