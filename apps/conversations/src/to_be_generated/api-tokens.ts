import { INTER_APP_API_CLIENT } from "@airport/direction-indicator";
import { CollectionApi } from "../generated/api/CollectionApi";
import { CommentApi } from "../generated/api/CommentApi";
import { ConversationApi } from "../generated/api/ConversationApi";
import { COMMENT_API, conversations, CONVERSATION_API, COLLECTION_API } from "./common-tokens";

conversations.autopilot = true

COMMENT_API.setClass(CommentApi)
COMMENT_API.setDependencies({
    interAppApiClient: INTER_APP_API_CLIENT
})
CONVERSATION_API.setClass(ConversationApi)
CONVERSATION_API.setDependencies({
    interAppApiClient: INTER_APP_API_CLIENT
})
COLLECTION_API.setClass(CollectionApi)
COLLECTION_API.setDependencies({
    interAppApiClient: INTER_APP_API_CLIENT
})
