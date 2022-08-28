import { INTER_APP_API_CLIENT } from "@airport/direction-indicator";
import { TopicApi } from "../generated/api/TopicApi";
import { ThemeApi } from "../generated/api/ThemeApi";
import { TOPIC_API, THEME_API } from "./common-tokens";
TOPIC_API.setClass(TopicApi);
TOPIC_API.setDependencies({
    interAppApiClient: INTER_APP_API_CLIENT
});
THEME_API.setClass(ThemeApi);
THEME_API.setDependencies({
    interAppApiClient: INTER_APP_API_CLIENT
});
//# sourceMappingURL=api-tokens.js.map