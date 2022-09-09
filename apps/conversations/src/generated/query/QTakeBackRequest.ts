import {
	IQEntityInternal,
	IEntityIdProperties,
	IEntityCascadeGraph,
	IEntityUpdateColumns,
	IEntityUpdateProperties,
	IEntitySelectProperties,
	IQBooleanField,
	IQDateField,
	IQNumberField,
	IQOneToManyRelation,
	IQStringField,
	IQUntypedField,
	IQEntity,
	IQRelation,
	IQAirEntityOneToManyRelation,
	IQAirEntityRelation,
	RawDelete,
	RawUpdate,
} from '@airport/tarmaq-query';
import {
	AirEntityGraph,
	AirEntityEId,
	AirEntityEUpdateColumns,
	AirEntityEUpdateProperties,
	AirEntityESelect,
	QAirEntityQId,
	QAirEntityQRelation,
	QAirEntity,
} from '@airport/holding-pattern';
import {
	CommentGraph,
	CommentEId,
	CommentEOptionalId,
	CommentEUpdateProperties,
	CommentESelect,
	QComment,
	QCommentQId,
	QCommentQRelation,
} from './QComment';
import {
	IComment,
} from '../entity/IComment';
import {
	ITakeBackRequest,
} from '../entity/ITakeBackRequest';


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface TakeBackRequestESelect
    extends AirEntityESelect, TakeBackRequestEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	forComment?: CommentESelect;
	viaComment?: CommentESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface TakeBackRequestEId
    extends AirEntityEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface TakeBackRequestEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface TakeBackRequestEUpdateProperties
	extends AirEntityEUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - _localIds only & no OneToMany's
	forComment?: CommentEOptionalId;
	viaComment?: CommentEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface TakeBackRequestGraph
	extends TakeBackRequestEOptionalId, AirEntityGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties

	// Relations
	forComment?: CommentGraph;
	viaComment?: CommentGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface TakeBackRequestEUpdateColumns
	extends AirEntityEUpdateColumns {
	// Non-Id Columns
	AGE_SUITABILITY?: number | IQNumberField;
	CREATED_AT?: Date | IQDateField;
	SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
	ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
	ORIGINAL_REPOSITORY_LID?: number | IQNumberField;
	ORIGINAL_ACTOR_LID?: number | IQNumberField;
	COMMENTS_RID_1?: number | IQNumberField;
	COMMENTS_AID_1?: number | IQNumberField;
	COMMENTS_ARID_1?: number | IQNumberField;
	COMMENTS_RID_2?: number | IQNumberField;
	COMMENTS_AID_2?: number | IQNumberField;
	COMMENTS_ARID_2?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface TakeBackRequestECreateProperties
extends Partial<TakeBackRequestEId>, TakeBackRequestEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface TakeBackRequestECreateColumns
extends TakeBackRequestEId, TakeBackRequestEUpdateColumns {
}


///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
export interface QTakeBackRequest<IQE extends QTakeBackRequest = any> extends QAirEntity<IQE | QTakeBackRequest>
{
	// Id Fields

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	forComment: QCommentQRelation;
	viaComment: QCommentQRelation;

}

// Entity Id Interface
export interface QTakeBackRequestQId extends QAirEntityQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QTakeBackRequestQRelation
	extends QAirEntityQRelation<ITakeBackRequest, QTakeBackRequest>, QTakeBackRequestQId {
}