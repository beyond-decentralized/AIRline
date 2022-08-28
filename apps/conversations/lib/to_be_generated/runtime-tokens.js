import { APPLICATION_LOADER } from '@airport/apron';
import { API_REGISTRY } from '@airport/check-in';
import { APPLICATION_INITIALIZER, TERMINAL_STORE } from '@airport/terminal-map';
import { ApplicationLoader } from './ApplicationLoader';
import { COMMENT_API, conversations, CONVERSATION_API } from './common-tokens';
import { CommentDao, ConversationDao } from '../dao/dao';
import { ConversationApi } from '../api/ConversationApi';
import { CommentApi } from '../api/CommentApi';
export const CONVERSATION_DAO = conversations.token({
    class: ConversationDao,
    interface: 'ConversationDao',
    token: 'CONVERSATION_DAO'
});
export const COMMENT_DAO = conversations.token({
    class: CommentDao,
    interface: 'CommentDao',
    token: 'COMMENT_DAO'
});
CONVERSATION_API.setClass(ConversationApi);
CONVERSATION_API.setDependencies({
    goalDao: CONVERSATION_DAO
});
COMMENT_API.setClass(CommentApi);
COMMENT_API.setDependencies({
    taskDao: COMMENT_DAO
});
APPLICATION_LOADER.setClass(ApplicationLoader);
APPLICATION_LOADER.setDependencies({
    applicationInitializer: APPLICATION_INITIALIZER,
    apiRegistry: API_REGISTRY,
    terminalStore: TERMINAL_STORE,
});
//# sourceMappingURL=runtime-tokens.js.map