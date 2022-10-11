import { AirEntity } from "@airport/holding-pattern";
import { Entity, ManyToOne, Table } from "@airport/tarmaq-entity";
import { Comment } from "./Comment";

@Entity()
@Table({ name: 'TAKE_BACK_REQUESTS' })
export class TakeBackRequest
    extends AirEntity {

    @ManyToOne({ optional: false })
    forComment: Comment

    @ManyToOne()
    viaComment: Comment

}
