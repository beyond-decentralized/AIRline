import { Theme } from '../ddl/theme';
import { ThemeVDescriptor } from './vtheme';
import { Topic } from '../ddl/topic';
import { TopicVDescriptor } from './vtopic';
import { IDvo, Dvo } from '@airbridge/validate';
import { ApplicationEntity_LocalId as DbEntityId } from '@airport/ground-control';
export declare class SQDIDvo<Entity, EntityVDescriptor> extends Dvo<Entity, EntityVDescriptor> {
    constructor(dbEntityId: DbEntityId);
}
export interface IBaseThemeDvo extends IDvo<Theme, ThemeVDescriptor<Theme>> {
}
export declare class BaseThemeDvo extends SQDIDvo<Theme, ThemeVDescriptor<Theme>> implements IBaseThemeDvo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseTopicDvo extends IDvo<Topic, TopicVDescriptor<Topic>> {
}
export declare class BaseTopicDvo extends SQDIDvo<Topic, TopicVDescriptor<Topic>> implements IBaseTopicDvo {
    static diSet(): boolean;
    constructor();
}
//# sourceMappingURL=baseDvos.d.ts.map