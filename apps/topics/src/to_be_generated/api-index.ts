import { ThemeApi, TopicApi } from '../generated/api/api';
import { application } from './app-declaration';

export * from '../generated/api/api'

export * from '../ddl/ddl';
export * from '../generated/qApplication';
export * from '../generated/qInterfaces';
export * from '../generated/vInterfaces';
export * from '../generated/interfaces';
export * from './app-declaration'

for(var api of [
    ThemeApi,
    TopicApi
]) {
    (api as any).application = application
}
