export declare const APPLICATION: {
    domain: string;
    index: any;
    name: string;
    sinceVersion: number;
    versions: {
        api: {
            apiObjectMap: {
                CommentApi: {
                    operationMap: {
                        findAllForConversation: {
                            isAsync: boolean;
                            parameters: any[];
                        };
                        save: {
                            isAsync: boolean;
                            parameters: any[];
                        };
                    };
                };
                ConversationApi: {
                    operationMap: {
                        findAll: {
                            isAsync: boolean;
                            parameters: any[];
                        };
                        findAllForTopic: {
                            isAsync: boolean;
                            parameters: any[];
                        };
                        save: {
                            isAsync: boolean;
                            parameters: any[];
                        };
                    };
                };
            };
        };
        entities: ({
            columns: ({
                index: number;
                isGenerated: boolean;
                manyRelationColumnRefs: {
                    manyRelationIndex: number;
                    oneApplication_Index: number;
                    oneTableIndex: number;
                    oneColumnIndex: number;
                    sinceVersion: number;
                }[];
                name: string;
                notNull: boolean;
                propertyRefs: {
                    index: number;
                }[];
                sinceVersion: number;
                type: string;
            } | {
                index: number;
                isGenerated: boolean;
                manyRelationColumnRefs: {
                    manyRelationIndex: number;
                    oneApplication_Index: any;
                    oneTableIndex: number;
                    oneRelationIndex: number;
                    oneColumnIndex: number;
                    sinceVersion: number;
                }[];
                name: string;
                notNull: boolean;
                propertyRefs: {
                    index: number;
                }[];
                sinceVersion: number;
                type: string;
            })[];
            idColumnRefs: {
                index: number;
            }[];
            index: number;
            isLocal: boolean;
            isAirEntity: boolean;
            name: string;
            properties: ({
                index: number;
                isId: boolean;
                name: string;
                relationRef: {
                    index: number;
                };
                sinceVersion: number;
                columnRef?: undefined;
            } | {
                columnRef: {
                    index: number;
                };
                index: number;
                isId: boolean;
                name: string;
                sinceVersion: number;
                relationRef?: undefined;
            })[];
            relations: ({
                index: number;
                isId: boolean;
                relationType: string;
                propertyRef: {
                    index: number;
                };
                relationTableIndex: number;
                relationTableApplication_Index: number;
                sinceVersion: number;
                manyToOneElems?: undefined;
            } | {
                index: number;
                isId: boolean;
                manyToOneElems: {
                    optional: boolean;
                };
                relationType: string;
                propertyRef: {
                    index: number;
                };
                relationTableIndex: number;
                sinceVersion: number;
                relationTableApplication_Index?: undefined;
            } | {
                index: number;
                isId: boolean;
                manyToOneElems: {
                    optional: boolean;
                };
                relationType: string;
                propertyRef: {
                    index: number;
                };
                relationTableIndex: number;
                relationTableApplication_Index: number;
                sinceVersion: number;
            })[];
            sinceVersion: number;
            tableConfig: {
                name: string;
                columnIndexes: any[];
            };
            operations?: undefined;
        } | {
            columns: ({
                index: number;
                isGenerated: boolean;
                manyRelationColumnRefs: {
                    manyRelationIndex: number;
                    oneApplication_Index: number;
                    oneTableIndex: number;
                    oneColumnIndex: number;
                    sinceVersion: number;
                }[];
                name: string;
                notNull: boolean;
                propertyRefs: {
                    index: number;
                }[];
                sinceVersion: number;
                type: string;
            } | {
                index: number;
                isGenerated: boolean;
                manyRelationColumnRefs: {
                    manyRelationIndex: number;
                    oneApplication_Index: any;
                    oneTableIndex: number;
                    oneRelationIndex: number;
                    oneColumnIndex: number;
                    sinceVersion: number;
                }[];
                name: string;
                notNull: boolean;
                propertyRefs: {
                    index: number;
                }[];
                sinceVersion: number;
                type: string;
            })[];
            idColumnRefs: {
                index: number;
            }[];
            index: number;
            isLocal: boolean;
            isAirEntity: boolean;
            name: string;
            properties: ({
                index: number;
                isId: boolean;
                name: string;
                relationRef: {
                    index: number;
                };
                sinceVersion: number;
                columnRef?: undefined;
            } | {
                columnRef: {
                    index: number;
                };
                index: number;
                isId: boolean;
                name: string;
                sinceVersion: number;
                relationRef?: undefined;
            })[];
            relations: ({
                index: number;
                isId: boolean;
                relationType: string;
                propertyRef: {
                    index: number;
                };
                relationTableIndex: number;
                relationTableApplication_Index: number;
                sinceVersion: number;
                manyToOneElems?: undefined;
            } | {
                index: number;
                isId: boolean;
                manyToOneElems: {
                    optional: boolean;
                };
                relationType: string;
                propertyRef: {
                    index: number;
                };
                relationTableIndex: number;
                sinceVersion: number;
                relationTableApplication_Index?: undefined;
            } | {
                index: number;
                isId: boolean;
                relationType: string;
                propertyRef: {
                    index: number;
                };
                relationTableIndex: number;
                sinceVersion: number;
                relationTableApplication_Index?: undefined;
                manyToOneElems?: undefined;
            })[];
            sinceVersion: number;
            tableConfig: {
                name: string;
                columnIndexes: any[];
            };
            operations?: undefined;
        } | {
            columns: ({
                index: number;
                isGenerated: boolean;
                manyRelationColumnRefs: {
                    manyRelationIndex: number;
                    oneApplication_Index: number;
                    oneTableIndex: number;
                    oneColumnIndex: number;
                    sinceVersion: number;
                }[];
                name: string;
                notNull: boolean;
                propertyRefs: {
                    index: number;
                }[];
                sinceVersion: number;
                type: string;
            } | {
                index: number;
                isGenerated: boolean;
                manyRelationColumnRefs: {
                    manyRelationIndex: number;
                    oneApplication_Index: any;
                    oneTableIndex: number;
                    oneRelationIndex: number;
                    oneColumnIndex: number;
                    sinceVersion: number;
                }[];
                name: string;
                notNull: boolean;
                propertyRefs: {
                    index: number;
                }[];
                sinceVersion: number;
                type: string;
            })[];
            idColumnRefs: {
                index: number;
            }[];
            index: number;
            isLocal: boolean;
            isAirEntity: boolean;
            name: string;
            properties: ({
                index: number;
                isId: boolean;
                name: string;
                relationRef: {
                    index: number;
                };
                sinceVersion: number;
                columnRef?: undefined;
            } | {
                columnRef: {
                    index: number;
                };
                index: number;
                isId: boolean;
                name: string;
                sinceVersion: number;
                relationRef?: undefined;
            })[];
            relations: ({
                index: number;
                isId: boolean;
                relationType: string;
                propertyRef: {
                    index: number;
                };
                relationTableIndex: number;
                relationTableApplication_Index: number;
                sinceVersion: number;
                manyToOneElems?: undefined;
                oneToManyElems?: undefined;
            } | {
                index: number;
                isId: boolean;
                manyToOneElems: {
                    optional: boolean;
                };
                relationType: string;
                propertyRef: {
                    index: number;
                };
                relationTableIndex: number;
                sinceVersion: number;
                relationTableApplication_Index?: undefined;
                oneToManyElems?: undefined;
            } | {
                index: number;
                isId: boolean;
                relationType: string;
                propertyRef: {
                    index: number;
                };
                relationTableIndex: number;
                sinceVersion: number;
                relationTableApplication_Index?: undefined;
                manyToOneElems?: undefined;
                oneToManyElems?: undefined;
            } | {
                index: number;
                isId: boolean;
                oneToManyElems: {
                    mappedBy: string;
                };
                relationType: string;
                propertyRef: {
                    index: number;
                };
                relationTableIndex: number;
                sinceVersion: number;
                relationTableApplication_Index?: undefined;
                manyToOneElems?: undefined;
            })[];
            sinceVersion: number;
            tableConfig: {
                name: string;
                columnIndexes: any[];
            };
            operations: {};
        })[];
        integerVersion: number;
        referencedApplications: {
            domain: string;
            index: number;
            name: string;
            sinceVersion: number;
            versions: {
                entities: any;
                integerVersion: number;
                referencedApplications: any;
                versionString: string;
            }[];
        }[];
        versionString: string;
    }[];
};
//# sourceMappingURL=application.d.ts.map