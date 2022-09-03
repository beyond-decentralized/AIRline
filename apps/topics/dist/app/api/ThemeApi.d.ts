import { ThemeDao } from "../dao/ThemeDao";
import { Theme } from "../ddl/Theme";
export declare class ThemeApi {
    themeDao: ThemeDao;
    findAll(): Promise<Theme[]>;
    save(theme: Theme): Promise<void>;
}
//# sourceMappingURL=ThemeApi.d.ts.map