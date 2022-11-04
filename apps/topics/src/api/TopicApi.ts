import { Api } from "@airport/check-in";
import { Inject, Injected } from "@airport/direction-indicator";
import { TopicDao } from "../dao/TopicDao";
import { Topic } from "../ddl/topic";
import { Theme } from "../ddl/Theme";

@Injected()
export class TopicApi {

    @Inject()
    topicDao: TopicDao

    @Api()
    async findAllForTheme(
        theme: Theme | string
    ): Promise<Topic[]> {
        return await this.topicDao.findAllForTheme(theme)
    }

    @Api()
    async save(
        topic: Topic
    ): Promise<void> {
        await this.topicDao.save(topic)
    }

}
