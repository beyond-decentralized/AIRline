import { INTER_APP_API_CLIENT } from "@airport/direction-indicator";
import { CommentApi } from "../generated/api/CommentApi";
import { ConversationApi } from "../generated/api/ConversationApi";
import { COMMENT_API, CONVERSATION_API } from "./common-tokens";
COMMENT_API.setClass(CommentApi);
COMMENT_API.setDependencies({
    interAppApiClient: INTER_APP_API_CLIENT
});
CONVERSATION_API.setClass(ConversationApi);
CONVERSATION_API.setDependencies({
    interAppApiClient: INTER_APP_API_CLIENT
});
//# sourceMappingURL=api-tokens.js.map