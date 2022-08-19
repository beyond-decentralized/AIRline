var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { AirEntity } from "@airport/holding-pattern";
import { Column, DbNumber, Entity, OneToMany, Table } from "@airport/tarmaq-entity";
let Task = class Task extends AirEntity {
};
__decorate([
    Column({ name: "NAME" })
], Task.prototype, "name", void 0);
__decorate([
    Column({ name: "DESCRIPTION", nullable: true })
], Task.prototype, "description", void 0);
__decorate([
    Column({ name: "STATUS" }),
    DbNumber()
], Task.prototype, "state", void 0);
__decorate([
    Column({ name: "DURATION_UNIT" }),
    DbNumber()
], Task.prototype, "durationUnit", void 0);
__decorate([
    Column({ name: "DURATION_LENGTH" })
], Task.prototype, "durationLength", void 0);
__decorate([
    Column({ name: "START_DATE", nullable: true })
], Task.prototype, "startDate", void 0);
__decorate([
    Column({ name: "DUE_DATE", nullable: true })
], Task.prototype, "dueDate", void 0);
__decorate([
    Column({ name: "IS_GOAL" })
], Task.prototype, "isGoal", void 0);
__decorate([
    Column({ name: "IMPORTANCE", nullable: true })
], Task.prototype, "importance", void 0);
__decorate([
    Column({ name: "URGENCY", nullable: true })
], Task.prototype, "urgency", void 0);
__decorate([
    OneToMany({ mappedBy: 'task' })
], Task.prototype, "taskConversations", void 0);
__decorate([
    OneToMany({ mappedBy: 'task' })
], Task.prototype, "assignees", void 0);
__decorate([
    OneToMany({ mappedBy: 'subtask' })
], Task.prototype, "superasks", void 0);
__decorate([
    OneToMany({ mappedBy: 'superask' })
], Task.prototype, "subtasks", void 0);
__decorate([
    OneToMany({ mappedBy: 'requiringTask' })
], Task.prototype, "prerequisiteTasks", void 0);
__decorate([
    OneToMany({ mappedBy: 'prerequisiteTask' })
], Task.prototype, "requiringTasks", void 0);
Task = __decorate([
    Entity(),
    Table({ name: 'TASKS' })
], Task);
export { Task };
//# sourceMappingURL=Task.js.map