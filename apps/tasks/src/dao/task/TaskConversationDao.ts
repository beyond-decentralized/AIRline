import { QComment, QConversation, QModerator, QParticipant } from "@airline/conversations";
import { Injected } from "@airport/direction-indicator";
import { Y } from "@airport/tarmaq-query";
import { Task, TaskConversation } from "../../ddl/ddl";
import { BaseTaskConversationDao } from "../../generated/baseDaos";
import Q from "../../generated/qApplication";
import { QTask, QTaskConversation } from "../../generated/qInterfaces";

@Injected()
export class TaskConversationDao
    extends BaseTaskConversationDao {

    async loadConversationForTask(
        task: Task | string
    ): Promise<TaskConversation> {
        let tc: QTaskConversation,
            c: QConversation,
            t: QTask,
            co: QComment,
            m: QModerator,
            p: QParticipant
        return await this._findOne({
            SELECT: {
                conversation: {
                    comments: {},
                    moderators: {},
                    name: Y,
                    participants: {}
                }
            },
            FROM: [
                tc = Q.TaskConversation,
                c = tc.conversation.INNER_JOIN(),
                t = tc.task.INNER_JOIN(),
                co = c.comments.LEFT_JOIN(),
                m = c.moderators.LEFT_JOIN(),
                p = c.participants.LEFT_JOIN()
            ],
            WHERE: t.equals(task)
        })
    }
}