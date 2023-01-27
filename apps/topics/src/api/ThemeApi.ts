import { Api } from "@airport/air-traffic-control";
import { Inject, Injected } from "@airport/direction-indicator";
import { ThemeDao } from "../dao/ThemeDao";
import { Theme } from "../ddl/Theme";

@Injected()
export class ThemeApi {

    @Inject()
    themeDao: ThemeDao

    @Api()
    async findAll(): Promise<Theme[]> {
        return await this.themeDao.findAll()
    }

    @Api()
    async save(
        theme: Theme
    ): Promise<void> {
        await this.themeDao.save(theme)
    }

}
