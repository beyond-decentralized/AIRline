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
	TopicVDescriptor,
} from './VTopic';
import {
	Topic,
} from '../../ddl/Topic';
import {
	ITheme,
} from '../entity/ITheme';



////////////////////
//  API INTERFACE //
////////////////////

export interface ThemeVDescriptor<T>
    extends AirEntityVDescriptor<T> {
	// Id Properties
	
	// Non-Id Properties
	name?: string | IVStringField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	topics?: TopicVDescriptor<Topic>

}


