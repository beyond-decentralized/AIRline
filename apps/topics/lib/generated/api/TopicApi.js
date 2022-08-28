var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { TOPIC_API, } from '../../to_be_generated/common-tokens';
import { DEPENDENCY_INJECTION, Inject, Injected, } from '@airport/direction-indicator';
// An API stub for other Applications and UIs to use
let TopicApi = class TopicApi {
    constructor() {
        DEPENDENCY_INJECTION.db().manualInject(this, TOPIC_API);
    }
    async findAllForTheme(theme) {
        return await this.topicApi.findAllForTheme(theme);
    }
    async save(topic) {
        await this.topicApi.save(topic);
    }
};
__decorate([
    Inject()
], TopicApi.prototype, "topicApi", void 0);
TopicApi = __decorate([
    Injected()
], TopicApi);
export { TopicApi };
//# sourceMappingURL=TopicApi.js.map