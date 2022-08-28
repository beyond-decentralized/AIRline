var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { GOAL_API, } from '../../to_be_generated/common-tokens';
import { DEPENDENCY_INJECTION, Inject, Injected, } from '@airport/direction-indicator';
// An API stub for other Applications and UIs to use
let GoalApi = class GoalApi {
    constructor() {
        DEPENDENCY_INJECTION.db().manualInject(this, GOAL_API);
    }
    async findAll() {
        return await this.goalApi.findAll();
    }
    async loadConversationForGoal(goalId) {
        return await this.goalApi.loadConversationForGoal(goalId);
    }
    async findAllForTopic(topic) {
        return await this.goalApi.findAllForTopic(topic);
    }
    async save(goal) {
        await this.goalApi.save(goal);
    }
};
__decorate([
    Inject()
], GoalApi.prototype, "goalApi", void 0);
GoalApi = __decorate([
    Injected()
], GoalApi);
export { GoalApi };
//# sourceMappingURL=GoalApi.js.map