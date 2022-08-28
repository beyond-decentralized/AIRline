/* eslint-disable */
export const APPLICATION = {
	"domain": "localhost:8100",
	"index": null,
	"name": "@airline/tasks",
	"sinceVersion": 1,
	"versions": [
		{
			"api": {
				"apiObjectMap": {
					"GoalApi": {
						"operationMap": {
							"findAll": {
								"isAsync": true,
								"parameters": []
							},
							"loadConversationForGoal": {
								"isAsync": true,
								"parameters": []
							},
							"findAllForTopic": {
								"isAsync": true,
								"parameters": []
							},
							"save": {
								"isAsync": true,
								"parameters": []
							}
						}
					},
					"TaskApi": {
						"operationMap": {
							"findAll": {
								"isAsync": true,
								"parameters": []
							},
							"loadConversationForTask": {
								"isAsync": true,
								"parameters": []
							},
							"findAllForGoal": {
								"isAsync": true,
								"parameters": []
							},
							"findAllForTopic": {
								"isAsync": true,
								"parameters": []
							},
							"save": {
								"isAsync": true,
								"parameters": []
							}
						}
					}
				}
			},
			"entities": [
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneApplication_Index": 3,
									"oneTableIndex": 9,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "REPOSITORY_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneApplication_Index": 3,
									"oneTableIndex": 0,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ACTOR_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 1
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 2,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "ACTOR_RECORD_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 2
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 3,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "AGE_SUITABILITY",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 3
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 4,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 4
								}
							],
							"sinceVersion": 1,
							"type": "DATE"
						},
						{
							"index": 5,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "SYSTEM_WIDE_OPERATION_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 5
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 6,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "ORIGINAL_ACTOR_RECORD_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 8
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 7,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneApplication_Index": 3,
									"oneTableIndex": 9,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ORIGINAL_REPOSITORY_LID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 6
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 8,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 3,
									"oneApplication_Index": 3,
									"oneTableIndex": 0,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ORIGINAL_ACTOR_LID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 7
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 9,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 4,
									"oneApplication_Index": null,
									"oneTableIndex": 7,
									"oneRelationIndex": 5,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "GOALS_RID_1",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 9
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 10,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 4,
									"oneApplication_Index": null,
									"oneTableIndex": 7,
									"oneRelationIndex": 5,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "GOALS_AID_1",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 9
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 11,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 4,
									"oneApplication_Index": null,
									"oneTableIndex": 7,
									"oneRelationIndex": 5,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "GOALS_ARID_1",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 9
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 12,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 5,
									"oneApplication_Index": 0,
									"oneTableIndex": 3,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "CONVERSATIONS_RID_1",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 10
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 13,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 5,
									"oneApplication_Index": 0,
									"oneTableIndex": 3,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "CONVERSATIONS_AID_1",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 10
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 14,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 5,
									"oneApplication_Index": 0,
									"oneTableIndex": 3,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "CONVERSATIONS_ARID_1",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 10
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						}
					],
					"idColumnRefs": [
						{
							"index": 0
						},
						{
							"index": 1
						},
						{
							"index": 2
						}
					],
					"index": 0,
					"isLocal": false,
					"isAirEntity": true,
					"name": "GoalConversation",
					"properties": [
						{
							"index": 0,
							"isId": true,
							"name": "repository",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"name": "actor",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": true,
							"name": "_actorRecordId",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 3
							},
							"index": 3,
							"isId": false,
							"name": "ageSuitability",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 4
							},
							"index": 4,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 5
							},
							"index": 5,
							"isId": false,
							"name": "systemWideOperationId",
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"name": "originalRepository",
							"relationRef": {
								"index": 2
							},
							"sinceVersion": 1
						},
						{
							"index": 7,
							"isId": false,
							"name": "originalActor",
							"relationRef": {
								"index": 3
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 6
							},
							"index": 8,
							"isId": false,
							"name": "originalActorRecordId",
							"sinceVersion": 1
						},
						{
							"index": 9,
							"isId": false,
							"name": "goal",
							"relationRef": {
								"index": 4
							},
							"sinceVersion": 1
						},
						{
							"index": 10,
							"isId": false,
							"name": "conversation",
							"relationRef": {
								"index": 5
							},
							"sinceVersion": 1
						}
					],
					"relations": [
						{
							"index": 0,
							"isId": true,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 0
							},
							"relationTableIndex": 9,
							"relationTableApplication_Index": 3,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 1
							},
							"relationTableIndex": 0,
							"relationTableApplication_Index": 3,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 6
							},
							"relationTableIndex": 9,
							"relationTableApplication_Index": 3,
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 7
							},
							"relationTableIndex": 0,
							"relationTableApplication_Index": 3,
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"manyToOneElems": {
								"optional": false
							},
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 9
							},
							"relationTableIndex": 7,
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"manyToOneElems": {
								"optional": false
							},
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 10
							},
							"relationTableIndex": 3,
							"relationTableApplication_Index": 0,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "GOAL_CONVERSATIONS",
						"columnIndexes": []
					},
					"operations": {}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneApplication_Index": 3,
									"oneTableIndex": 9,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "REPOSITORY_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneApplication_Index": 3,
									"oneTableIndex": 0,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ACTOR_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 1
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 2,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "ACTOR_RECORD_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 2
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 3,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "AGE_SUITABILITY",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 3
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 4,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 4
								}
							],
							"sinceVersion": 1,
							"type": "DATE"
						},
						{
							"index": 5,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "SYSTEM_WIDE_OPERATION_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 5
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 6,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "ORIGINAL_ACTOR_RECORD_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 8
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 7,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneApplication_Index": 3,
									"oneTableIndex": 9,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ORIGINAL_REPOSITORY_LID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 6
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 8,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 3,
									"oneApplication_Index": 3,
									"oneTableIndex": 0,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ORIGINAL_ACTOR_LID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 7
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 9,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 4,
									"oneApplication_Index": null,
									"oneTableIndex": 5,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "TASKS_RID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 9
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 10,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 4,
									"oneApplication_Index": null,
									"oneTableIndex": 5,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "TASKS_AID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 9
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 11,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 4,
									"oneApplication_Index": null,
									"oneTableIndex": 5,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "TASKS_ARID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 9
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 12,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 5,
									"oneApplication_Index": null,
									"oneTableIndex": 5,
									"oneRelationIndex": 10,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "TASKS_RID_2",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 10
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 13,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 5,
									"oneApplication_Index": null,
									"oneTableIndex": 5,
									"oneRelationIndex": 10,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "TASKS_AID_2",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 10
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 14,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 5,
									"oneApplication_Index": null,
									"oneTableIndex": 5,
									"oneRelationIndex": 10,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "TASKS_ARID_2",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 10
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						}
					],
					"idColumnRefs": [
						{
							"index": 0
						},
						{
							"index": 1
						},
						{
							"index": 2
						}
					],
					"index": 1,
					"isLocal": false,
					"isAirEntity": true,
					"name": "PrerequisiteTask",
					"properties": [
						{
							"index": 0,
							"isId": true,
							"name": "repository",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"name": "actor",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": true,
							"name": "_actorRecordId",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 3
							},
							"index": 3,
							"isId": false,
							"name": "ageSuitability",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 4
							},
							"index": 4,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 5
							},
							"index": 5,
							"isId": false,
							"name": "systemWideOperationId",
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"name": "originalRepository",
							"relationRef": {
								"index": 2
							},
							"sinceVersion": 1
						},
						{
							"index": 7,
							"isId": false,
							"name": "originalActor",
							"relationRef": {
								"index": 3
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 6
							},
							"index": 8,
							"isId": false,
							"name": "originalActorRecordId",
							"sinceVersion": 1
						},
						{
							"index": 9,
							"isId": false,
							"name": "prerequisiteTask",
							"relationRef": {
								"index": 4
							},
							"sinceVersion": 1
						},
						{
							"index": 10,
							"isId": false,
							"name": "requiringTask",
							"relationRef": {
								"index": 5
							},
							"sinceVersion": 1
						}
					],
					"relations": [
						{
							"index": 0,
							"isId": true,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 0
							},
							"relationTableIndex": 9,
							"relationTableApplication_Index": 3,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 1
							},
							"relationTableIndex": 0,
							"relationTableApplication_Index": 3,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 6
							},
							"relationTableIndex": 9,
							"relationTableApplication_Index": 3,
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 7
							},
							"relationTableIndex": 0,
							"relationTableApplication_Index": 3,
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 9
							},
							"relationTableIndex": 5,
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 10
							},
							"relationTableIndex": 5,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "PREREQUISITE_TASKS",
						"columnIndexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneApplication_Index": 3,
									"oneTableIndex": 9,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "REPOSITORY_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneApplication_Index": 3,
									"oneTableIndex": 0,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ACTOR_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 1
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 2,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "ACTOR_RECORD_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 2
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 3,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "AGE_SUITABILITY",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 3
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 4,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 4
								}
							],
							"sinceVersion": 1,
							"type": "DATE"
						},
						{
							"index": 5,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "SYSTEM_WIDE_OPERATION_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 5
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 6,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "ORIGINAL_ACTOR_RECORD_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 8
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 7,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneApplication_Index": 3,
									"oneTableIndex": 9,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ORIGINAL_REPOSITORY_LID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 6
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 8,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 3,
									"oneApplication_Index": 3,
									"oneTableIndex": 0,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ORIGINAL_ACTOR_LID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 7
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 9,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 4,
									"oneApplication_Index": null,
									"oneTableIndex": 5,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "TASKS_RID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 9
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 10,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 4,
									"oneApplication_Index": null,
									"oneTableIndex": 5,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "TASKS_AID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 9
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 11,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 4,
									"oneApplication_Index": null,
									"oneTableIndex": 5,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "TASKS_ARID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 9
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 12,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 5,
									"oneApplication_Index": null,
									"oneTableIndex": 5,
									"oneRelationIndex": 8,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "TASKS_RID_2",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 10
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 13,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 5,
									"oneApplication_Index": null,
									"oneTableIndex": 5,
									"oneRelationIndex": 8,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "TASKS_AID_2",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 10
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 14,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 5,
									"oneApplication_Index": null,
									"oneTableIndex": 5,
									"oneRelationIndex": 8,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "TASKS_ARID_2",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 10
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						}
					],
					"idColumnRefs": [
						{
							"index": 0
						},
						{
							"index": 1
						},
						{
							"index": 2
						}
					],
					"index": 2,
					"isLocal": false,
					"isAirEntity": true,
					"name": "Subtask",
					"properties": [
						{
							"index": 0,
							"isId": true,
							"name": "repository",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"name": "actor",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": true,
							"name": "_actorRecordId",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 3
							},
							"index": 3,
							"isId": false,
							"name": "ageSuitability",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 4
							},
							"index": 4,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 5
							},
							"index": 5,
							"isId": false,
							"name": "systemWideOperationId",
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"name": "originalRepository",
							"relationRef": {
								"index": 2
							},
							"sinceVersion": 1
						},
						{
							"index": 7,
							"isId": false,
							"name": "originalActor",
							"relationRef": {
								"index": 3
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 6
							},
							"index": 8,
							"isId": false,
							"name": "originalActorRecordId",
							"sinceVersion": 1
						},
						{
							"index": 9,
							"isId": false,
							"name": "supertask",
							"relationRef": {
								"index": 4
							},
							"sinceVersion": 1
						},
						{
							"index": 10,
							"isId": false,
							"name": "subtask",
							"relationRef": {
								"index": 5
							},
							"sinceVersion": 1
						}
					],
					"relations": [
						{
							"index": 0,
							"isId": true,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 0
							},
							"relationTableIndex": 9,
							"relationTableApplication_Index": 3,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 1
							},
							"relationTableIndex": 0,
							"relationTableApplication_Index": 3,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 6
							},
							"relationTableIndex": 9,
							"relationTableApplication_Index": 3,
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 7
							},
							"relationTableIndex": 0,
							"relationTableApplication_Index": 3,
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 9
							},
							"relationTableIndex": 5,
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 10
							},
							"relationTableIndex": 5,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "SUBTASKS",
						"columnIndexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneApplication_Index": 3,
									"oneTableIndex": 9,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "REPOSITORY_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneApplication_Index": 3,
									"oneTableIndex": 0,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ACTOR_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 1
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 2,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "ACTOR_RECORD_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 2
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 3,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "AGE_SUITABILITY",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 3
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 4,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 4
								}
							],
							"sinceVersion": 1,
							"type": "DATE"
						},
						{
							"index": 5,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "SYSTEM_WIDE_OPERATION_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 5
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 6,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "ORIGINAL_ACTOR_RECORD_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 8
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 7,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneApplication_Index": 3,
									"oneTableIndex": 9,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ORIGINAL_REPOSITORY_LID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 6
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 8,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 3,
									"oneApplication_Index": 3,
									"oneTableIndex": 0,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ORIGINAL_ACTOR_LID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 7
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 9,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 4,
									"oneApplication_Index": null,
									"oneTableIndex": 5,
									"oneRelationIndex": 7,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "TASKS_RID_1",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 9
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 10,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 4,
									"oneApplication_Index": null,
									"oneTableIndex": 5,
									"oneRelationIndex": 7,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "TASKS_AID_1",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 9
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 11,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 4,
									"oneApplication_Index": null,
									"oneTableIndex": 5,
									"oneRelationIndex": 7,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "TASKS_ARID_1",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 9
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 12,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 5,
									"oneApplication_Index": 1,
									"oneTableIndex": 4,
									"oneColumnIndex": 5,
									"sinceVersion": 1
								}
							],
							"name": "ASSIGNED_TO_GUID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 10
								}
							],
							"sinceVersion": 1,
							"type": "STRING"
						}
					],
					"idColumnRefs": [
						{
							"index": 0
						},
						{
							"index": 1
						},
						{
							"index": 2
						}
					],
					"index": 3,
					"isLocal": false,
					"isAirEntity": true,
					"name": "TaskAssignee",
					"properties": [
						{
							"index": 0,
							"isId": true,
							"name": "repository",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"name": "actor",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": true,
							"name": "_actorRecordId",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 3
							},
							"index": 3,
							"isId": false,
							"name": "ageSuitability",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 4
							},
							"index": 4,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 5
							},
							"index": 5,
							"isId": false,
							"name": "systemWideOperationId",
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"name": "originalRepository",
							"relationRef": {
								"index": 2
							},
							"sinceVersion": 1
						},
						{
							"index": 7,
							"isId": false,
							"name": "originalActor",
							"relationRef": {
								"index": 3
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 6
							},
							"index": 8,
							"isId": false,
							"name": "originalActorRecordId",
							"sinceVersion": 1
						},
						{
							"index": 9,
							"isId": false,
							"name": "task",
							"relationRef": {
								"index": 4
							},
							"sinceVersion": 1
						},
						{
							"index": 10,
							"isId": false,
							"name": "userAccount",
							"relationRef": {
								"index": 5
							},
							"sinceVersion": 1
						}
					],
					"relations": [
						{
							"index": 0,
							"isId": true,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 0
							},
							"relationTableIndex": 9,
							"relationTableApplication_Index": 3,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 1
							},
							"relationTableIndex": 0,
							"relationTableApplication_Index": 3,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 6
							},
							"relationTableIndex": 9,
							"relationTableApplication_Index": 3,
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 7
							},
							"relationTableIndex": 0,
							"relationTableApplication_Index": 3,
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"manyToOneElems": {
								"optional": false
							},
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 9
							},
							"relationTableIndex": 5,
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"manyToOneElems": {
								"optional": false
							},
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 10
							},
							"relationTableIndex": 4,
							"relationTableApplication_Index": 1,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "TASK_ASSIGNEES",
						"columnIndexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneApplication_Index": 3,
									"oneTableIndex": 9,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "REPOSITORY_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneApplication_Index": 3,
									"oneTableIndex": 0,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ACTOR_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 1
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 2,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "ACTOR_RECORD_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 2
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 3,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "AGE_SUITABILITY",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 3
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 4,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 4
								}
							],
							"sinceVersion": 1,
							"type": "DATE"
						},
						{
							"index": 5,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "SYSTEM_WIDE_OPERATION_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 5
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 6,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "ORIGINAL_ACTOR_RECORD_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 8
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 7,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneApplication_Index": 3,
									"oneTableIndex": 9,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ORIGINAL_REPOSITORY_LID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 6
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 8,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 3,
									"oneApplication_Index": 3,
									"oneTableIndex": 0,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ORIGINAL_ACTOR_LID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 7
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 9,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 4,
									"oneApplication_Index": null,
									"oneTableIndex": 5,
									"oneRelationIndex": 6,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "TASKS_RID_1",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 9
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 10,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 4,
									"oneApplication_Index": null,
									"oneTableIndex": 5,
									"oneRelationIndex": 6,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "TASKS_AID_1",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 9
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 11,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 4,
									"oneApplication_Index": null,
									"oneTableIndex": 5,
									"oneRelationIndex": 6,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "TASKS_ARID_1",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 9
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 12,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 5,
									"oneApplication_Index": 0,
									"oneTableIndex": 3,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "CONVERSATIONS_RID_1",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 10
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 13,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 5,
									"oneApplication_Index": 0,
									"oneTableIndex": 3,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "CONVERSATIONS_AID_1",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 10
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 14,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 5,
									"oneApplication_Index": 0,
									"oneTableIndex": 3,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "CONVERSATIONS_ARID_1",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 10
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						}
					],
					"idColumnRefs": [
						{
							"index": 0
						},
						{
							"index": 1
						},
						{
							"index": 2
						}
					],
					"index": 4,
					"isLocal": false,
					"isAirEntity": true,
					"name": "TaskConversation",
					"properties": [
						{
							"index": 0,
							"isId": true,
							"name": "repository",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"name": "actor",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": true,
							"name": "_actorRecordId",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 3
							},
							"index": 3,
							"isId": false,
							"name": "ageSuitability",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 4
							},
							"index": 4,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 5
							},
							"index": 5,
							"isId": false,
							"name": "systemWideOperationId",
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"name": "originalRepository",
							"relationRef": {
								"index": 2
							},
							"sinceVersion": 1
						},
						{
							"index": 7,
							"isId": false,
							"name": "originalActor",
							"relationRef": {
								"index": 3
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 6
							},
							"index": 8,
							"isId": false,
							"name": "originalActorRecordId",
							"sinceVersion": 1
						},
						{
							"index": 9,
							"isId": false,
							"name": "task",
							"relationRef": {
								"index": 4
							},
							"sinceVersion": 1
						},
						{
							"index": 10,
							"isId": false,
							"name": "conversation",
							"relationRef": {
								"index": 5
							},
							"sinceVersion": 1
						}
					],
					"relations": [
						{
							"index": 0,
							"isId": true,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 0
							},
							"relationTableIndex": 9,
							"relationTableApplication_Index": 3,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 1
							},
							"relationTableIndex": 0,
							"relationTableApplication_Index": 3,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 6
							},
							"relationTableIndex": 9,
							"relationTableApplication_Index": 3,
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 7
							},
							"relationTableIndex": 0,
							"relationTableApplication_Index": 3,
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"manyToOneElems": {
								"optional": false
							},
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 9
							},
							"relationTableIndex": 5,
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"manyToOneElems": {
								"optional": false
							},
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 10
							},
							"relationTableIndex": 3,
							"relationTableApplication_Index": 0,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "TASK_CONVERSATIONS",
						"columnIndexes": []
					},
					"operations": {}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneApplication_Index": 3,
									"oneTableIndex": 9,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "REPOSITORY_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneApplication_Index": 3,
									"oneTableIndex": 0,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ACTOR_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 1
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 2,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "ACTOR_RECORD_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 2
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 3,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "AGE_SUITABILITY",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 3
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 4,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 4
								}
							],
							"sinceVersion": 1,
							"type": "DATE"
						},
						{
							"index": 5,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "SYSTEM_WIDE_OPERATION_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 5
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 6,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "ORIGINAL_ACTOR_RECORD_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 8
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 7,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneApplication_Index": 3,
									"oneTableIndex": 9,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ORIGINAL_REPOSITORY_LID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 6
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 8,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 3,
									"oneApplication_Index": 3,
									"oneTableIndex": 0,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ORIGINAL_ACTOR_LID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 7
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 9,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "NAME",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 9
								}
							],
							"sinceVersion": 1,
							"type": "STRING"
						},
						{
							"index": 10,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "DESCRIPTION",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 10
								}
							],
							"sinceVersion": 1,
							"type": "STRING"
						},
						{
							"index": 11,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "STATUS",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 11
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 12,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "DURATION_UNIT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 12
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 13,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "DURATION_LENGTH",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 13
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 14,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "START_DATE",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 14
								}
							],
							"sinceVersion": 1,
							"type": "DATE"
						},
						{
							"index": 15,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "DUE_DATE",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 15
								}
							],
							"sinceVersion": 1,
							"type": "DATE"
						},
						{
							"index": 16,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "IMPORTANCE",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 16
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 17,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "URGENCY",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 17
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 18,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 4,
									"oneApplication_Index": 2,
									"oneTableIndex": 0,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "TOPIC_RID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 18
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 19,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 4,
									"oneApplication_Index": 2,
									"oneTableIndex": 0,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "TOPIC_AID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 18
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 20,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 4,
									"oneApplication_Index": 2,
									"oneTableIndex": 0,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "TOPIC_ARID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 18
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						}
					],
					"idColumnRefs": [
						{
							"index": 0
						},
						{
							"index": 1
						},
						{
							"index": 2
						}
					],
					"index": 5,
					"isLocal": false,
					"isAirEntity": true,
					"name": "Task",
					"properties": [
						{
							"index": 0,
							"isId": true,
							"name": "repository",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"name": "actor",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": true,
							"name": "_actorRecordId",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 3
							},
							"index": 3,
							"isId": false,
							"name": "ageSuitability",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 4
							},
							"index": 4,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 5
							},
							"index": 5,
							"isId": false,
							"name": "systemWideOperationId",
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"name": "originalRepository",
							"relationRef": {
								"index": 2
							},
							"sinceVersion": 1
						},
						{
							"index": 7,
							"isId": false,
							"name": "originalActor",
							"relationRef": {
								"index": 3
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 6
							},
							"index": 8,
							"isId": false,
							"name": "originalActorRecordId",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 9
							},
							"index": 9,
							"isId": false,
							"name": "name",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 10
							},
							"index": 10,
							"isId": false,
							"name": "description",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 11
							},
							"index": 11,
							"isId": false,
							"name": "status",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 12
							},
							"index": 12,
							"isId": false,
							"name": "durationUnit",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 13
							},
							"index": 13,
							"isId": false,
							"name": "durationLength",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 14
							},
							"index": 14,
							"isId": false,
							"name": "startDate",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 15
							},
							"index": 15,
							"isId": false,
							"name": "dueDate",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 16
							},
							"index": 16,
							"isId": false,
							"name": "importance",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 17
							},
							"index": 17,
							"isId": false,
							"name": "urgency",
							"sinceVersion": 1
						},
						{
							"index": 18,
							"isId": false,
							"name": "topic",
							"relationRef": {
								"index": 4
							},
							"sinceVersion": 1
						},
						{
							"index": 19,
							"isId": false,
							"name": "goalTasks",
							"relationRef": {
								"index": 5
							},
							"sinceVersion": 1
						},
						{
							"index": 20,
							"isId": false,
							"name": "taskConversations",
							"relationRef": {
								"index": 6
							},
							"sinceVersion": 1
						},
						{
							"index": 21,
							"isId": false,
							"name": "assignees",
							"relationRef": {
								"index": 7
							},
							"sinceVersion": 1
						},
						{
							"index": 22,
							"isId": false,
							"name": "superasks",
							"relationRef": {
								"index": 8
							},
							"sinceVersion": 1
						},
						{
							"index": 23,
							"isId": false,
							"name": "subtasks",
							"relationRef": {
								"index": 9
							},
							"sinceVersion": 1
						},
						{
							"index": 24,
							"isId": false,
							"name": "prerequisiteTasks",
							"relationRef": {
								"index": 10
							},
							"sinceVersion": 1
						},
						{
							"index": 25,
							"isId": false,
							"name": "requiringTasks",
							"relationRef": {
								"index": 11
							},
							"sinceVersion": 1
						}
					],
					"relations": [
						{
							"index": 0,
							"isId": true,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 0
							},
							"relationTableIndex": 9,
							"relationTableApplication_Index": 3,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 1
							},
							"relationTableIndex": 0,
							"relationTableApplication_Index": 3,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 6
							},
							"relationTableIndex": 9,
							"relationTableApplication_Index": 3,
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 7
							},
							"relationTableIndex": 0,
							"relationTableApplication_Index": 3,
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 18
							},
							"relationTableIndex": 0,
							"relationTableApplication_Index": 2,
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"oneToManyElems": {
								"mappedBy": "task"
							},
							"relationType": "ONE_TO_MANY",
							"propertyRef": {
								"index": 19
							},
							"relationTableIndex": 6,
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"oneToManyElems": {
								"mappedBy": "task"
							},
							"relationType": "ONE_TO_MANY",
							"propertyRef": {
								"index": 20
							},
							"relationTableIndex": 4,
							"sinceVersion": 1
						},
						{
							"index": 7,
							"isId": false,
							"oneToManyElems": {
								"mappedBy": "task"
							},
							"relationType": "ONE_TO_MANY",
							"propertyRef": {
								"index": 21
							},
							"relationTableIndex": 3,
							"sinceVersion": 1
						},
						{
							"index": 8,
							"isId": false,
							"oneToManyElems": {
								"mappedBy": "subtask"
							},
							"relationType": "ONE_TO_MANY",
							"propertyRef": {
								"index": 22
							},
							"relationTableIndex": 2,
							"sinceVersion": 1
						},
						{
							"index": 9,
							"isId": false,
							"oneToManyElems": {
								"mappedBy": "superask"
							},
							"relationType": "ONE_TO_MANY",
							"propertyRef": {
								"index": 23
							},
							"relationTableIndex": 2,
							"sinceVersion": 1
						},
						{
							"index": 10,
							"isId": false,
							"oneToManyElems": {
								"mappedBy": "requiringTask"
							},
							"relationType": "ONE_TO_MANY",
							"propertyRef": {
								"index": 24
							},
							"relationTableIndex": 1,
							"sinceVersion": 1
						},
						{
							"index": 11,
							"isId": false,
							"oneToManyElems": {
								"mappedBy": "prerequisiteTask"
							},
							"relationType": "ONE_TO_MANY",
							"propertyRef": {
								"index": 25
							},
							"relationTableIndex": 2,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "TASKS",
						"columnIndexes": []
					},
					"operations": {}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneApplication_Index": 3,
									"oneTableIndex": 9,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "REPOSITORY_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneApplication_Index": 3,
									"oneTableIndex": 0,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ACTOR_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 1
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 2,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "ACTOR_RECORD_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 2
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 3,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "AGE_SUITABILITY",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 3
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 4,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 4
								}
							],
							"sinceVersion": 1,
							"type": "DATE"
						},
						{
							"index": 5,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "SYSTEM_WIDE_OPERATION_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 5
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 6,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "ORIGINAL_ACTOR_RECORD_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 8
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 7,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneApplication_Index": 3,
									"oneTableIndex": 9,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ORIGINAL_REPOSITORY_LID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 6
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 8,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 3,
									"oneApplication_Index": 3,
									"oneTableIndex": 0,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ORIGINAL_ACTOR_LID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 7
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 9,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 4,
									"oneApplication_Index": null,
									"oneTableIndex": 7,
									"oneRelationIndex": 6,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "GOALS_RID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 9
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 10,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 4,
									"oneApplication_Index": null,
									"oneTableIndex": 7,
									"oneRelationIndex": 6,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "GOALS_AID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 9
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 11,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 4,
									"oneApplication_Index": null,
									"oneTableIndex": 7,
									"oneRelationIndex": 6,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "GOALS_ARID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 9
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 12,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 5,
									"oneApplication_Index": null,
									"oneTableIndex": 5,
									"oneRelationIndex": 5,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "TASKS_RID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 10
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 13,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 5,
									"oneApplication_Index": null,
									"oneTableIndex": 5,
									"oneRelationIndex": 5,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "TASKS_AID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 10
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 14,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 5,
									"oneApplication_Index": null,
									"oneTableIndex": 5,
									"oneRelationIndex": 5,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "TASKS_ARID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 10
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						}
					],
					"idColumnRefs": [
						{
							"index": 0
						},
						{
							"index": 1
						},
						{
							"index": 2
						}
					],
					"index": 6,
					"isLocal": false,
					"isAirEntity": true,
					"name": "GoalTask",
					"properties": [
						{
							"index": 0,
							"isId": true,
							"name": "repository",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"name": "actor",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": true,
							"name": "_actorRecordId",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 3
							},
							"index": 3,
							"isId": false,
							"name": "ageSuitability",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 4
							},
							"index": 4,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 5
							},
							"index": 5,
							"isId": false,
							"name": "systemWideOperationId",
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"name": "originalRepository",
							"relationRef": {
								"index": 2
							},
							"sinceVersion": 1
						},
						{
							"index": 7,
							"isId": false,
							"name": "originalActor",
							"relationRef": {
								"index": 3
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 6
							},
							"index": 8,
							"isId": false,
							"name": "originalActorRecordId",
							"sinceVersion": 1
						},
						{
							"index": 9,
							"isId": false,
							"name": "goal",
							"relationRef": {
								"index": 4
							},
							"sinceVersion": 1
						},
						{
							"index": 10,
							"isId": false,
							"name": "task",
							"relationRef": {
								"index": 5
							},
							"sinceVersion": 1
						}
					],
					"relations": [
						{
							"index": 0,
							"isId": true,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 0
							},
							"relationTableIndex": 9,
							"relationTableApplication_Index": 3,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 1
							},
							"relationTableIndex": 0,
							"relationTableApplication_Index": 3,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 6
							},
							"relationTableIndex": 9,
							"relationTableApplication_Index": 3,
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 7
							},
							"relationTableIndex": 0,
							"relationTableApplication_Index": 3,
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 9
							},
							"relationTableIndex": 7,
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 10
							},
							"relationTableIndex": 5,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "GOAL_TASKS",
						"columnIndexes": []
					}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneApplication_Index": 3,
									"oneTableIndex": 9,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "REPOSITORY_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneApplication_Index": 3,
									"oneTableIndex": 0,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ACTOR_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 1
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 2,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "ACTOR_RECORD_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 2
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 3,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "AGE_SUITABILITY",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 3
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 4,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 4
								}
							],
							"sinceVersion": 1,
							"type": "DATE"
						},
						{
							"index": 5,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "SYSTEM_WIDE_OPERATION_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 5
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 6,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "ORIGINAL_ACTOR_RECORD_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 8
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 7,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneApplication_Index": 3,
									"oneTableIndex": 9,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ORIGINAL_REPOSITORY_LID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 6
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 8,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 3,
									"oneApplication_Index": 3,
									"oneTableIndex": 0,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ORIGINAL_ACTOR_LID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 7
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 9,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "NAME",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 9
								}
							],
							"sinceVersion": 1,
							"type": "STRING"
						},
						{
							"index": 10,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "DESCRIPTION",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 10
								}
							],
							"sinceVersion": 1,
							"type": "STRING"
						},
						{
							"index": 11,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "STATUS",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 11
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 12,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "IMPORTANCE",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 12
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 13,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "URGENCY",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 13
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 14,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 4,
									"oneApplication_Index": 2,
									"oneTableIndex": 0,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "TOPIC_RID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 14
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 15,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 4,
									"oneApplication_Index": 2,
									"oneTableIndex": 0,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "TOPIC_AID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 14
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 16,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 4,
									"oneApplication_Index": 2,
									"oneTableIndex": 0,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "TOPIC_ARID_1",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 14
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						}
					],
					"idColumnRefs": [
						{
							"index": 0
						},
						{
							"index": 1
						},
						{
							"index": 2
						}
					],
					"index": 7,
					"isLocal": false,
					"isAirEntity": true,
					"name": "Goal",
					"properties": [
						{
							"index": 0,
							"isId": true,
							"name": "repository",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"name": "actor",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": true,
							"name": "_actorRecordId",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 3
							},
							"index": 3,
							"isId": false,
							"name": "ageSuitability",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 4
							},
							"index": 4,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 5
							},
							"index": 5,
							"isId": false,
							"name": "systemWideOperationId",
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"name": "originalRepository",
							"relationRef": {
								"index": 2
							},
							"sinceVersion": 1
						},
						{
							"index": 7,
							"isId": false,
							"name": "originalActor",
							"relationRef": {
								"index": 3
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 6
							},
							"index": 8,
							"isId": false,
							"name": "originalActorRecordId",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 9
							},
							"index": 9,
							"isId": false,
							"name": "name",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 10
							},
							"index": 10,
							"isId": false,
							"name": "description",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 11
							},
							"index": 11,
							"isId": false,
							"name": "status",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 12
							},
							"index": 12,
							"isId": false,
							"name": "importance",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 13
							},
							"index": 13,
							"isId": false,
							"name": "urgency",
							"sinceVersion": 1
						},
						{
							"index": 14,
							"isId": false,
							"name": "topic",
							"relationRef": {
								"index": 4
							},
							"sinceVersion": 1
						},
						{
							"index": 15,
							"isId": false,
							"name": "goalConversations",
							"relationRef": {
								"index": 5
							},
							"sinceVersion": 1
						},
						{
							"index": 16,
							"isId": false,
							"name": "goalTasks",
							"relationRef": {
								"index": 6
							},
							"sinceVersion": 1
						}
					],
					"relations": [
						{
							"index": 0,
							"isId": true,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 0
							},
							"relationTableIndex": 9,
							"relationTableApplication_Index": 3,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 1
							},
							"relationTableIndex": 0,
							"relationTableApplication_Index": 3,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 6
							},
							"relationTableIndex": 9,
							"relationTableApplication_Index": 3,
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 7
							},
							"relationTableIndex": 0,
							"relationTableApplication_Index": 3,
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 14
							},
							"relationTableIndex": 0,
							"relationTableApplication_Index": 2,
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"oneToManyElems": {
								"mappedBy": "goal"
							},
							"relationType": "ONE_TO_MANY",
							"propertyRef": {
								"index": 15
							},
							"relationTableIndex": 0,
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"oneToManyElems": {
								"mappedBy": "goal"
							},
							"relationType": "ONE_TO_MANY",
							"propertyRef": {
								"index": 16
							},
							"relationTableIndex": 6,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "GOALS",
						"columnIndexes": []
					},
					"operations": {}
				},
				{
					"columns": [
						{
							"index": 0,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 0,
									"oneApplication_Index": 3,
									"oneTableIndex": 9,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "REPOSITORY_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 0
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 1,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 1,
									"oneApplication_Index": 3,
									"oneTableIndex": 0,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ACTOR_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 1
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 2,
							"isGenerated": true,
							"manyRelationColumnRefs": [],
							"name": "ACTOR_RECORD_ID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 2
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 3,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "AGE_SUITABILITY",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 3
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 4,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "CREATED_AT",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 4
								}
							],
							"sinceVersion": 1,
							"type": "DATE"
						},
						{
							"index": 5,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "SYSTEM_WIDE_OPERATION_LID",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 5
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 6,
							"isGenerated": false,
							"manyRelationColumnRefs": [],
							"name": "ORIGINAL_ACTOR_RECORD_ID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 8
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 7,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 2,
									"oneApplication_Index": 3,
									"oneTableIndex": 9,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ORIGINAL_REPOSITORY_LID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 6
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 8,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 3,
									"oneApplication_Index": 3,
									"oneTableIndex": 0,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "ORIGINAL_ACTOR_LID",
							"notNull": false,
							"propertyRefs": [
								{
									"index": 7
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 9,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 4,
									"oneApplication_Index": 0,
									"oneTableIndex": 5,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "COMMENTS_RID_1",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 9
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 10,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 4,
									"oneApplication_Index": 0,
									"oneTableIndex": 5,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "COMMENTS_AID_1",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 9
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 11,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 4,
									"oneApplication_Index": 0,
									"oneTableIndex": 5,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "COMMENTS_ARID_1",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 9
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 12,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 5,
									"oneApplication_Index": null,
									"oneTableIndex": 5,
									"oneColumnIndex": 0,
									"sinceVersion": 1
								}
							],
							"name": "TASKS_RID_1",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 10
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 13,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 5,
									"oneApplication_Index": null,
									"oneTableIndex": 5,
									"oneColumnIndex": 1,
									"sinceVersion": 1
								}
							],
							"name": "TASKS_AID_1",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 10
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						},
						{
							"index": 14,
							"isGenerated": false,
							"manyRelationColumnRefs": [
								{
									"manyRelationIndex": 5,
									"oneApplication_Index": null,
									"oneTableIndex": 5,
									"oneColumnIndex": 2,
									"sinceVersion": 1
								}
							],
							"name": "TASKS_ARID_1",
							"notNull": true,
							"propertyRefs": [
								{
									"index": 10
								}
							],
							"sinceVersion": 1,
							"type": "NUMBER"
						}
					],
					"idColumnRefs": [
						{
							"index": 0
						},
						{
							"index": 1
						},
						{
							"index": 2
						}
					],
					"index": 8,
					"isLocal": false,
					"isAirEntity": true,
					"name": "TaskReferenceInComment",
					"properties": [
						{
							"index": 0,
							"isId": true,
							"name": "repository",
							"relationRef": {
								"index": 0
							},
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"name": "actor",
							"relationRef": {
								"index": 1
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 2
							},
							"index": 2,
							"isId": true,
							"name": "_actorRecordId",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 3
							},
							"index": 3,
							"isId": false,
							"name": "ageSuitability",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 4
							},
							"index": 4,
							"isId": false,
							"name": "createdAt",
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 5
							},
							"index": 5,
							"isId": false,
							"name": "systemWideOperationId",
							"sinceVersion": 1
						},
						{
							"index": 6,
							"isId": false,
							"name": "originalRepository",
							"relationRef": {
								"index": 2
							},
							"sinceVersion": 1
						},
						{
							"index": 7,
							"isId": false,
							"name": "originalActor",
							"relationRef": {
								"index": 3
							},
							"sinceVersion": 1
						},
						{
							"columnRef": {
								"index": 6
							},
							"index": 8,
							"isId": false,
							"name": "originalActorRecordId",
							"sinceVersion": 1
						},
						{
							"index": 9,
							"isId": false,
							"name": "comment",
							"relationRef": {
								"index": 4
							},
							"sinceVersion": 1
						},
						{
							"index": 10,
							"isId": false,
							"name": "task",
							"relationRef": {
								"index": 5
							},
							"sinceVersion": 1
						}
					],
					"relations": [
						{
							"index": 0,
							"isId": true,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 0
							},
							"relationTableIndex": 9,
							"relationTableApplication_Index": 3,
							"sinceVersion": 1
						},
						{
							"index": 1,
							"isId": true,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 1
							},
							"relationTableIndex": 0,
							"relationTableApplication_Index": 3,
							"sinceVersion": 1
						},
						{
							"index": 2,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 6
							},
							"relationTableIndex": 9,
							"relationTableApplication_Index": 3,
							"sinceVersion": 1
						},
						{
							"index": 3,
							"isId": false,
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 7
							},
							"relationTableIndex": 0,
							"relationTableApplication_Index": 3,
							"sinceVersion": 1
						},
						{
							"index": 4,
							"isId": false,
							"manyToOneElems": {
								"optional": false
							},
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 9
							},
							"relationTableIndex": 5,
							"relationTableApplication_Index": 0,
							"sinceVersion": 1
						},
						{
							"index": 5,
							"isId": false,
							"manyToOneElems": {
								"optional": false
							},
							"relationType": "MANY_TO_ONE",
							"propertyRef": {
								"index": 10
							},
							"relationTableIndex": 5,
							"sinceVersion": 1
						}
					],
					"sinceVersion": 1,
					"tableConfig": {
						"name": "TASK_REFERENCES_IN_COMMENTS",
						"columnIndexes": []
					}
				}
			],
			"integerVersion": 1,
			"referencedApplications": [
				{
					"domain": "localhost:8100",
					"index": 0,
					"name": "@airline/conversations",
					"sinceVersion": 1,
					"versions": [
						{
							"entities": null,
							"integerVersion": 1,
							"referencedApplications": null,
							"versionString": "1.0.0"
						}
					]
				},
				{
					"domain": "air",
					"index": 1,
					"name": "@airport/travel-document-checkpoint",
					"sinceVersion": 1,
					"versions": [
						{
							"entities": null,
							"integerVersion": 1,
							"referencedApplications": null,
							"versionString": "1.0.0"
						}
					]
				},
				{
					"domain": "localhost:8100",
					"index": 2,
					"name": "@airline/topics",
					"sinceVersion": 1,
					"versions": [
						{
							"entities": null,
							"integerVersion": 1,
							"referencedApplications": null,
							"versionString": "1.0.0"
						}
					]
				},
				{
					"domain": "air",
					"index": 3,
					"name": "@airport/holding-pattern",
					"sinceVersion": 1,
					"versions": [
						{
							"entities": null,
							"integerVersion": 1,
							"referencedApplications": null,
							"versionString": "1.0.0"
						}
					]
				}
			],
			"versionString": "1.0.0"
		}
	]
};