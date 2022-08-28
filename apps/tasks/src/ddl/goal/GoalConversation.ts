import { Conversation } from "@airline/conversations";
import { AirEntity } from "@airport/holding-pattern";
import { Entity, ManyToOne, Table } from "@airport/tarmaq-entity";
import { Goal } from "./Goal";

@Entity()
@Table({ name: "GOAL_CONVERSATIONS" })
export class GoalConversation
    extends AirEntity {

    @ManyToOne({ optional: false })
    goal: Goal

    @ManyToOne({ optional: false })
    conversation: Conversation

}
