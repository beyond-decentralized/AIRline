var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { AirEntity } from "@airport/holding-pattern";
import { Column, DbNumber, Entity, ManyToOne, OneToMany, Table } from "@airport/tarmaq-entity";
let Goal = class Goal extends AirEntity {
};
__decorate([
    Column({ name: "NAME", nullable: false })
], Goal.prototype, "name", void 0);
__decorate([
    Column({ name: "DESCRIPTION" })
], Goal.prototype, "description", void 0);
__decorate([
    Column({ name: "STATUS", nullable: false }),
    DbNumber()
], Goal.prototype, "status", void 0);
__decorate([
    Column({ name: "IMPORTANCE", nullable: true })
], Goal.prototype, "importance", void 0);
__decorate([
    Column({ name: "URGENCY", nullable: true })
], Goal.prototype, "urgency", void 0);
__decorate([
    ManyToOne()
], Goal.prototype, "topic", void 0);
__decorate([
    OneToMany({ mappedBy: 'goal' })
], Goal.prototype, "goalConversations", void 0);
__decorate([
    OneToMany({ mappedBy: 'goal' })
], Goal.prototype, "goalTasks", void 0);
Goal = __decorate([
    Entity(),
    Table({ name: 'GOALS' })
], Goal);
export { Goal };
//# sourceMappingURL=Goal.js.map