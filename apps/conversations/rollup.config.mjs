import { getAppBuildConfig } from "@airport/taxiway/rollup/app-build.mjs"

export default getAppBuildConfig(
    '@airline/conversations',
    '../../UIs/angular/projects/conversations/src',
    'conversations'
)
