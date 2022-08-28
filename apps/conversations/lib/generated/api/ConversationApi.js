var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { CONVERSATION_API, } from '../../to_be_generated/common-tokens';
import { DEPENDENCY_INJECTION, Inject, Injected, } from '@airport/direction-indicator';
// An API stub for other Applications and UIs to use
let ConversationApi = class ConversationApi {
    constructor() {
        DEPENDENCY_INJECTION.db().manualInject(this, CONVERSATION_API);
    }
    async findAll() {
        return await this.conversationApi.findAll();
    }
    async findAllForTopic(topic) {
        return await this.conversationApi.findAllForTopic(topic);
    }
    async save(conversation) {
        await this.conversationApi.save(conversation);
    }
};
__decorate([
    Inject()
], ConversationApi.prototype, "conversationApi", void 0);
ConversationApi = __decorate([
    Injected()
], ConversationApi);
export { ConversationApi };
//# sourceMappingURL=ConversationApi.js.map