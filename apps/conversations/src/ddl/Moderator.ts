import { AirEntity } from "@airport/final-approach";
import { UserAccount } from "@airport/travel-document-checkpoint";
import { Column, Entity, JoinColumn, ManyToOne, Table } from "@airport/tarmaq-entity";
import { Conversation } from "./Conversation";

@Entity()
@Table({ name: 'MODERATORS' })
export class Moderator
    extends AirEntity {

    @Column({ name: 'ACTIVE', nullable: false })
    active: boolean = true;

    @ManyToOne({ optional: false })
    conversation: Conversation

    @ManyToOne({ optional: false })
    @JoinColumn({
        name: "USER_ACCOUNT_GUID",
        referencedColumnName: "GUID"
    })
    userAccount: UserAccount

}
