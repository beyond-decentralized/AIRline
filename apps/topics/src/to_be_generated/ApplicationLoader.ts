
import { Injected } from '@airport/direction-indicator'
import { AbstractApplicationLoader } from '@airport/web-tower'
import { APPLICATION } from '../generated/application'

@Injected()
export class ApplicationLoader extends AbstractApplicationLoader {
    constructor() {
        super(APPLICATION as any)
    }
}
