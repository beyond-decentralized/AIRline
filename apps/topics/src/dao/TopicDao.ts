import { Injected } from "@airport/direction-indicator";
import { Topic } from "../ddl/Topic";
import { Theme } from "../ddl/Theme";
import { BaseTopicDao } from "../generated/baseDaos";
import Q from "../generated/qApplication";
import { QTopic } from "../generated/query/QTopic";
import { QTheme } from "../generated/query/QTheme";

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