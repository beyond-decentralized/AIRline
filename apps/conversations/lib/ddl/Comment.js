var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { AirEntity } from "@airport/holding-pattern";
import { Column, Entity, ManyToOne, OneToMany, Table } from "@airport/tarmaq-entity";
let Comment = class Comment extends AirEntity {
};
__decorate([
    Column({ name: "TEXT", nullable: false })
], Comment.prototype, "text", void 0);
__decorate([
    Column({ name: "TAKEN_BACK" })
], Comment.prototype, "takenBack", void 0);
__decorate([
    Column({ name: "TAKEN_BACK_DTTM" })
], Comment.prototype, "takenBackDttm", void 0);
__decorate([
    Column({ name: "SENSORED" })
], Comment.prototype, "censored", void 0);
__decorate([
    Column({ name: "SENSORED_DTTM" })
], Comment.prototype, "sensoredDttm", void 0);
__decorate([
    ManyToOne({ optional: false })
], Comment.prototype, "conversation", void 0);
__decorate([
    ManyToOne()
], Comment.prototype, "source", void 0);
__decorate([
    ManyToOne()
], Comment.prototype, "censoredBy", void 0);
__decorate([
    OneToMany({ mappedBy: 'source' })
], Comment.prototype, "replies", void 0);
__decorate([
    OneToMany({ mappedBy: 'referredFrom' })
], Comment.prototype, "references", void 0);
__decorate([
    OneToMany({ mappedBy: 'reference' })
], Comment.prototype, "referredFrom", void 0);
__decorate([
    OneToMany({ mappedBy: 'viaComment' })
], Comment.prototype, "madeTakeBackRequest", void 0);
__decorate([
    OneToMany({ mappedBy: 'forComment' })
], Comment.prototype, "takeBackRequests", void 0);
Comment = __decorate([
    Entity(),
    Table({ name: 'COMMENTS' })
], Comment);
export { Comment };
//# sourceMappingURL=Comment.js.map