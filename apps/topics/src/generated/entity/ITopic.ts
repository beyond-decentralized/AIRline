import {
	IAirEntity,
} from '@airport/holding-pattern';
import {
	ITheme,
} from './ITheme';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface ITopic extends IAirEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	name?: string;

	// Non-Id Relations
	theme?: ITheme;

	// Transient Properties

	// Public Methods
	
}


