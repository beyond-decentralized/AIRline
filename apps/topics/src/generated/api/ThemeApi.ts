import {
	THEME_API,
} from '../../to_be_generated/common-tokens';
import {
	DEPENDENCY_INJECTION,
	Inject,
	Injected,
} from '@airport/direction-indicator';
import {
	Api,
} from '@airport/check-in';
import {
	ThemeDao,
} from '../../dao/ThemeDao';
import {
	Theme,
} from '../../ddl/Theme';



// An API stub for other Applications and UIs to use
@Injected()
export class ThemeApi {
        
    @Inject()
    themeApi: ThemeApi

    constructor() {
        DEPENDENCY_INJECTION.db().manualInject(this, 'themeApi', THEME_API)
    }
            
    async  findAll(): Promise<Theme[]> {
        return await this.themeApi.findAll()
    }

    async  save(
        theme: Theme
    ): Promise<void> {
        await this.themeApi.save(theme)
    }

}
