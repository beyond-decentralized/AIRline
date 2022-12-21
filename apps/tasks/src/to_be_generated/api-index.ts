import { GoalApi, TaskApi } from '../generated/api/api';
import { application } from './app-declaration';

export * from '../generated/api/api'

export * from '../ddl/ddl';
export * from '../generated/qApplication';
export * from '../generated/qInterfaces';
export * from '../generated/vInterfaces';
export * from '../generated/interfaces';
export * from './app-declaration'

for (let api of [
    GoalApi, TaskApi
]) {
    (api as any).application = application
}