var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { AirEntity } from "@airport/holding-pattern";
import { Column, Entity, ManyToOne, OneToMany, Table } from "@airport/tarmaq-entity";
let Conversation = class Conversation extends AirEntity {
    constructor() {
        super(...arguments);
        this.participants = [];
        this.moderators = [];
        this.comments = [];
    }
};
__decorate([
    Column({ name: 'NAME' })
], Conversation.prototype, "name", void 0);
__decorate([
    ManyToOne()
], Conversation.prototype, "topic", void 0);
__decorate([
    OneToMany({ mappedBy: "conversation" })
], Conversation.prototype, "participants", void 0);
__decorate([
    OneToMany({ mappedBy: "conversation" })
], Conversation.prototype, "moderators", void 0);
__decorate([
    OneToMany({ mappedBy: "conversation" })
], Conversation.prototype, "comments", void 0);
Conversation = __decorate([
    Entity(),
    Table({ name: 'CONVERSATIONS' })
], Conversation);
export { Conversation };
//# sourceMappingURL=Conversation.js.map