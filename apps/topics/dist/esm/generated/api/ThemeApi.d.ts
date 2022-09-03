import { Theme } from '../../ddl/Theme';
export declare class ThemeApi {
    constructor();
    themeApi: ThemeApi;
    findAll(): Promise<Theme[]>;
    save(theme: Theme): Promise<void>;
}
//# sourceMappingURL=ThemeApi.d.ts.map