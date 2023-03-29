import { Api } from "@airport/air-traffic-control";
import { Inject, Injected } from "@airport/direction-indicator";
import { map, Observable } from "rxjs";
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
    searchAll(): Observable<Theme[]> {
        return this.themeDao.searchAll().pipe(
            map(themes => {
                console.log(`TOPICS Search returned ${themes.length} themes`)
                return themes
            })
        )
    }

    @Api()
    async save(
        theme: Theme
    ): Promise<void> {
        await this.themeDao.save(theme)
    }

}
