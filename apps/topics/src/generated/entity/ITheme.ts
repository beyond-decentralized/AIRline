import {
	IAirEntity,
} from '@airport/holding-pattern';
import {
	ITopic,
} from './ITopic';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface ITheme extends IAirEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	name?: string;

	// Non-Id Relations
	topics?: ITopic[];

	// Transient Properties

	// Public Methods
	
}


