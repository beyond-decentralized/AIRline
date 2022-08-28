var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Api } from "@airport/check-in";
import { Inject, Injected } from "@airport/direction-indicator";
let ThemeApi = class ThemeApi {
    async findAll() {
        return await this.themeDao.findAll();
    }
    async save(theme) {
        await this.themeDao.save(theme);
    }
};
__decorate([
    Inject()
], ThemeApi.prototype, "themeDao", void 0);
__decorate([
    Api()
], ThemeApi.prototype, "findAll", null);
__decorate([
    Api()
], ThemeApi.prototype, "save", null);
ThemeApi = __decorate([
    Injected()
], ThemeApi);
export { ThemeApi };
//# sourceMappingURL=ThemeApi.js.map