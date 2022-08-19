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
} from './qcomment';
import {
	IComment,
} from './comment';
import {
	ICommentReference,
} from './commentreference';


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface CommentReferenceESelect
    extends AirEntityESelect, CommentReferenceEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	reference?: CommentESelect;
	referredFrom?: CommentESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface CommentReferenceEId
    extends AirEntityEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface CommentReferenceEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface CommentReferenceEUpdateProperties
	extends AirEntityEUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - _localIds only & no OneToMany's
	reference?: CommentEOptionalId;
	referredFrom?: CommentEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface CommentReferenceGraph
	extends CommentReferenceEOptionalId, AirEntityGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties

	// Relations
	reference?: CommentGraph;
	referredFrom?: CommentGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface CommentReferenceEUpdateColumns
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
export interface CommentReferenceECreateProperties
extends Partial<CommentReferenceEId>, CommentReferenceEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface CommentReferenceECreateColumns
extends CommentReferenceEId, CommentReferenceEUpdateColumns {
}


///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
export interface QCommentReference<IQE extends QCommentReference = any> extends QAirEntity<IQE | QCommentReference>
{
	// Id Fields

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	reference: QCommentQRelation;
	referredFrom: QCommentQRelation;

}

// Entity Id Interface
export interface QCommentReferenceQId extends QAirEntityQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QCommentReferenceQRelation
	extends QAirEntityQRelation<ICommentReference, QCommentReference>, QCommentReferenceQId {
}