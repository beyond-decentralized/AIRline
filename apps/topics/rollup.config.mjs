import { getAppBuildConfig } from "@airport/taxiway/rollup/app-build.mjs"

export default getAppBuildConfig(
    '@airline/topics',
    '../../UIs/angular/projects/conversations/src',
    'topics'
)
