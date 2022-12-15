import { Conversation } from '@airline/conversations'
import { IonItem } from '@ionic/react'
import './AirConversationView.css'

export function AirConversationView({ conversation }: { conversation: Conversation }) {

    function getMonth(
        dateTime: Date
    ) {
        switch (dateTime.getMonth()) {
            case 0:
                return "Jan"
            case 1:
                return "Feb"
            case 2:
                return "Mar"
            case 3:
                return "Apr"
            case 4:
                return "May"
            case 5:
                return "Jun"
            case 6:
                return "Jul"
            case 7:
                return "Aug"
            case 8:
                return "Sept"
            case 9:
                return "Oct"
            case 10:
                return "Nov"
            case 11:
                return "Dec"
        }
    }

    function lead0(
        num: number
    ): string {
        if (num < 10) {
            return '0' + num
        }
        return '' + num
    }

    function getTime(
        dateTime: Date
    ): string {
        return `${getMonth(dateTime)} ${dateTime.getDate()}, ${dateTime.getFullYear()} ${lead0(dateTime.getHours())}:${lead0(dateTime.getMinutes())}`
    }

    return (
        <>
            {conversation.comments.map(comment =>
                <IonItem
                    key={comment.id}
                >
                    <div>
                        <div
                            className="comment-header"
                        >
                            <div
                                className="comment-by"
                            >
                                {comment.createdBy?.username}
                            </div>
                            <div
                                className="comment-time"
                            >
                                {getTime(comment.createdAt as Date)}
                            </div>
                        </div>
                        <div>
                            {comment.text}
                        </div>
                    </div>
                </IonItem>
            )}
        </>
    )
}