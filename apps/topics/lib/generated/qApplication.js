import { airApi } from '@airport/aviation-communication';
import { Theme, Topic } from '../ddl/ddl';
const __constructors__ = {
    Theme: Theme,
    Topic: Topic
};
export const Q_APPLICATION = {
    __constructors__,
    domain: 'localhost:8100',
    name: '@airline/topics'
};
export const Q = Q_APPLICATION;
export function diSet(dbEntityId) {
    return airApi.dS(Q.__dbApplication__, dbEntityId);
}
export function duoDiSet(dbEntityId) {
    return airApi.ddS(Q.__dbApplication__, dbEntityId);
}
airApi.setQApplication(Q_APPLICATION);
//# sourceMappingURL=qApplication.js.map