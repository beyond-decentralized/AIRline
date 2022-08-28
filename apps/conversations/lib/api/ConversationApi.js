var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Api } from "@airport/check-in";
import { Inject, Injected } from "@airport/direction-indicator";
import { Participant } from "../ddl/Participant";
let ConversationApi = class ConversationApi {
    async findAll() {
        return await this.conversationDao.findAll();
    }
    async findAllForTopic(topic) {
        return await this.conversationDao.findAllForTopic(topic);
    }
    async save(conversation) {
        if (!conversation.id) {
            conversation.participants = [];
            const participant = new Participant();
            participant.conversation = conversation;
            participant.userAccount = this.requestManager.userAccount;
            conversation.participants.push(participant);
        }
        await this.conversationDao.save(conversation);
    }
};
__decorate([
    Inject()
], ConversationApi.prototype, "conversationDao", void 0);
__decorate([
    Inject()
], ConversationApi.prototype, "requestManager", void 0);
__decorate([
    Api()
], ConversationApi.prototype, "findAll", null);
__decorate([
    Api()
], ConversationApi.prototype, "findAllForTopic", null);
__decorate([
    Api()
], ConversationApi.prototype, "save", null);
ConversationApi = __decorate([
    Injected()
], ConversationApi);
export { ConversationApi };
//# sourceMappingURL=ConversationApi.js.map