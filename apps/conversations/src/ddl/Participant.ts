import { AirEntity } from "@airport/final-approach";
import { UserAccount } from "@airport/travel-document-checkpoint";
import { Column, Entity, JoinColumn, ManyToOne, Table } from "@airport/tarmaq-entity";
import { Conversation } from "./Conversation";

@Entity()
@Table({ name: 'PARTICIPANTS' })
export class Participant
    extends AirEntity {

    @Column({ name: 'ACTIVE', nullable: false })
    active: boolean = true;

    @ManyToOne({ optional: false })
    conversation: Conversation

    @ManyToOne({ optional: false })
    @JoinColumn({
        name: "USER_ACCOUNT_LID",
        referencedColumnName: "USER_ACCOUNT_LID"
    })
    userAccount: UserAccount

}
