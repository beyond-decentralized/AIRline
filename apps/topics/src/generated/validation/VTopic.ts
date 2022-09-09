import {
	IEntityVDescriptor,
	IVBooleanField,
	IVDateField,
	IVNumberField,
	IVStringField,
	IVUntypedField,
} from '@airbridge/validate';
import {
	AirEntityVDescriptor,
} from '@airport/holding-pattern';
import {
	ThemeVDescriptor,
} from './VTheme';
import {
	Theme,
} from '../../ddl/Theme';
import {
	ITopic,
} from '../entity/ITopic';



////////////////////
//  API INTERFACE //
////////////////////

export interface TopicVDescriptor<T>
    extends AirEntityVDescriptor<T> {
	// Id Properties
	
	// Non-Id Properties
	name?: string | IVStringField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	theme?: ThemeVDescriptor<Theme>

}


