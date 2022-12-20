import { CollectionApi } from '../generated/api/CollectionApi';
import { CommentApi } from '../generated/api/CommentApi';
import { ConversationApi } from '../generated/api/ConversationApi';
import { application } from './app-declaration';

export * from '../generated/api/api'

export * from '../ddl/ddl';
export * from '../generated/qApplication';
export * from '../generated/qInterfaces';
export * from '../generated/vInterfaces';
export * from '../generated/interfaces';
export * from './app-declaration'

for (let apiStub in [CollectionApi,
    CommentApi,
    ConversationApi]) {
    (apiStub as any).application = application
}