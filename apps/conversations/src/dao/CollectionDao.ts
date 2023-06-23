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
import { Observable } from "rxjs";

@Injected()
export class CollectionDao
    extends BaseCollectionDao {

    searchAllForRootRepositories(): Observable<Collection[]> {
        let c: QCollection,
            t: QTopic,
            r: QRepository
        return this._search({
            SELECT: {
                '*': Y,
                topic: {}
            },
            FROM: [
                c = Q.Collection,
                t = c.topic.LEFT_JOIN(),
                r = c.repository.LEFT_JOIN(),
            ]
        })
    }

    searchAllForTopic(
        topic: Topic | string
    ): Observable<Collection[]> {
        let c: QCollection,
            t: QTopic
        return this._search({
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

    findAllWithNoTopic(
    ): Observable<Collection[]> {
        let c: QCollection
        return this._search({
            SELECT: {
                '*': Y
            },
            FROM: [
                c = Q.Collection
            ],
            WHERE: c.topic.IS_NULL()
        })
    }

    loadWithDetails(
        collectionId: string
    ): Observable<Collection> {
        let cn: QConversation,
            cl: QCollection,
            cc: QCollectionConversation,
            p: QParticipant

        return this._searchOne({
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