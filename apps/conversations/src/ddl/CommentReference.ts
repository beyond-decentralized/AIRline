import { AirEntity } from "@airport/final-approach";
import { Entity, ManyToOne, Table } from "@airport/tarmaq-entity";
import { Comment } from "./Comment";

@Entity()
@Table({ name: 'COMMENT_REFERENCES' })
export class CommentReference
    extends AirEntity {

    @ManyToOne()
    reference: Comment

    @ManyToOne()
    referredFrom: Comment

}
