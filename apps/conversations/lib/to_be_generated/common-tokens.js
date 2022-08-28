import { domain } from "@airport/direction-indicator";
export const conversations = domain('beyond-decentralized.world').app('at__airline__slash__conversations');
export const COMMENT_API = conversations.token({
    class: null,
    interface: 'CommentApi',
    token: 'COMMENT_API'
});
export const CONVERSATION_API = conversations.token({
    class: null,
    interface: 'ConversationApi',
    token: 'CONVERSATION_API'
});
//# sourceMappingURL=common-tokens.js.map