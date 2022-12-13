import { QTopic, Topic } from "@airline/topics";
import { Injected } from "@airport/direction-indicator";
import { Y } from "@airport/tarmaq-query";
import { QConversation } from "../generated/query/QConversation";
import { Collection } from "../ddl/Collection";
import { BaseCollectionDao } from "../generated/baseDaos";
import Q from "../generated/qApplication";
import { QParticipant } from "../generated/qInterfaces";
import { QCollection } from "../generated/query/QCollection";
import { QRepository } from "@airport/holding-pattern";
import { QCollectionConversation } from "../generated/query/QCollectionConversation";

@Injected()
export class CollectionDao
    extends BaseCollectionDao {

    async findAllForRootRepositories(): Promise<Collection[]> {
        let c: QCollection,
            t: QTopic,
            r: QRepository
        return await this._find({
            SELECT: {
                '*': Y,
                topic: {}
            },
            FROM: [
                c = Q.Collection,
                t = c.topic.LEFT_JOIN(),
                r = c.repository.LEFT_JOIN(),
            ],
            WHERE: r.parentRepository.IS_NULL()
        })
    }

    async findAllForTopic(
        topic: Topic | string
    ): Promise<Collection[]> {
        let c: QCollection,
            t: QTopic
        return await this._find({
            SELECT: {
                '*': Y,
                topic: {}
            },
            FROM: [
                c = Q.Collection,
                t = c.topic.LEFT_JOIN()
            ],
            WHERE: t.equals(topic)
        })
    }

    async findAllWithNoTopic(
    ): Promise<Collection[]> {
        let c: QCollection
        return await this._find({
            SELECT: {
                '*': Y
            },
            FROM: [
                c = Q.Collection
            ],
            WHERE: c.topic.IS_NULL()
        })
    }

    async loadWithDetails(
        collectionId: string
    ): Promise<Collection> {
        let cn: QConversation,
            cl: QCollection,
            cc: QCollectionConversation,
            p: QParticipant

        return await this._findOne({
            SELECT: {
                name: Y,
                collectionConversations: {
                    conversation: {
                        participants: {
                            userAccount: {
                                username: Y
                            }
                        }
                    }
                }
            },
            FROM: [
                cl = Q.Collection,
                cc = cl.collectionConversations.LEFT_JOIN(),
                cn = cc.conversation.LEFT_JOIN(),
                p = cn.participants.LEFT_JOIN(),
                p.userAccount.LEFT_JOIN()
            ],
            WHERE: cl.equals(collectionId)
        })
    }
}