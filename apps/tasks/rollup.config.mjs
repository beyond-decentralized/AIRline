import { getAppBuildConfig } from "@airport/taxiway/rollup/app-build.mjs"

export default getAppBuildConfig(
    '@airline/tasks',
    '../../UIs/angular/projects/tasks/src',
    'tasks'
)
