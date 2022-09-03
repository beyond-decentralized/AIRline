import { IVStringField } from '@airbridge/validate';
import { AirEntityVDescriptor } from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import { ThemeVDescriptor } from './vtheme';
import { Theme } from '../ddl/Theme';
export interface TopicVDescriptor<T> extends AirEntityVDescriptor<T> {
    name?: string | IVStringField;
    theme?: ThemeVDescriptor<Theme>;
}
//# sourceMappingURL=vtopic.d.ts.map