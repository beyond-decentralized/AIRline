import { Topic } from "../ddl/topic";
import { Theme } from "../ddl/Theme";
import { BaseTopicDao } from "../generated/baseDaos";
export declare class TopicDao extends BaseTopicDao {
    findAllForTheme(theme: Theme | string): Promise<Topic[]>;
}
//# sourceMappingURL=TopicDao.d.ts.map