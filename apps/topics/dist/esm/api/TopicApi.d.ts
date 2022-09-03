import { TopicDao } from "../dao/TopicDao";
import { Topic } from "../ddl/topic";
import { Theme } from "../ddl/Theme";
export declare class TopicApi {
    topicDao: TopicDao;
    findAllForTheme(theme: Theme | string): Promise<Topic[]>;
    save(topic: Topic): Promise<void>;
}
//# sourceMappingURL=TopicApi.d.ts.map