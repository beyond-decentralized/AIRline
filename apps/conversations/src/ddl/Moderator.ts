import { AirEntity } from "@airport/holding-pattern";
import { UserAccount } from "@airport/travel-document-checkpoint";
import { Entity, JoinColumn, ManyToOne, Table } from "@airport/tarmaq-entity";
import { Conversation } from "./Conversation";

@Entity()
@Table({ name: 'MODERATORS' })
export class Moderator
    extends AirEntity {

    @ManyToOne({ optional: false })
    conversation: Conversation

    @ManyToOne({ optional: false })
    @JoinColumn({
        name: "USER_ACCOUNT_GUID",
        referencedColumnName: "USER_ACCOUNT_GUID"
    })
    userAccount: UserAccount

}
