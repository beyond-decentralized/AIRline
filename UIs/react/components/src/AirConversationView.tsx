import { Conversation } from '@airline/conversations'
import { IonItem } from '@ionic/react'
import './AirConversationView.css'

export function AirConversationView({ conversation }: { conversation: Conversation }) {

    function getTime(
        dateTime: Date
    ): string {
        return dateTime.toISOString()
    }

    return (
        <>
            {conversation.comments.map(comment =>
                <IonItem>
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
                    <br></br>
                    {comment.text}
                </IonItem>
            )}
        </>
    )
}