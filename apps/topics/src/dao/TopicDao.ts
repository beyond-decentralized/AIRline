import { Injected } from "@airport/direction-indicator";
import { Topic } from "../ddl/topic";
import { Theme } from "../ddl/Theme";
import { BaseTopicDao } from "../generated/baseDaos";
import Q from "../generated/qApplication";
import { QTopic } from "../generated/qtopic";
import { QTheme } from "../generated/qtheme";

@Injected()
export class TopicDao
    extends BaseTopicDao {

    async findAllForTheme(
        theme: Theme | string
    ): Promise<Topic[]> {
        let com: QTopic,
            con: QTheme
        return await this._find({
            SELECT: {},
            FROM: [
                com = Q.Topic,
                con = com.theme.LEFT_JOIN()
            ],
            WHERE: con.equals(theme)
        })
    }

}