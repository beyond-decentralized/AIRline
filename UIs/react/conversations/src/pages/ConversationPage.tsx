import { IonButtons, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonToast } from '@ionic/react';
import { AirConversationView } from '@airline/components-ui-react'
import { useParams } from 'react-router';
import './ConversationPage.css';
import { useEffect, useState } from 'react';
import { Conversation } from '@airline/conversations';
import { addComment, loadConversation } from '../api';
import { enterOutline } from 'ionicons/icons';

const ConversationPage: React.FC = () => {

  const { conversationId } = useParams<{ conversationId: string; }>();
  const [conversation, setConversation] = useState(() => new Conversation())
  const [commentText, setCommentText] = useState(() => '')
  const [present, dismiss] = useIonToast()

  function showToast(
    message: string,
    duration = 3000
  ): void {
    present(message)
    setTimeout(() => {
      dismiss()
    }, duration)
  }

  useEffect(() => {
    loadConversation(conversationId, setConversation, showToast).then()
  }, [])

  const conversationParticipantsList =
    <>
      {conversation.participants.map(participant =>
        participant.userAccount.username
      )}
    </>

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{conversationParticipantsList}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{conversationParticipantsList}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <AirConversationView conversation={conversation} />
      </IonContent>
      <IonItem>
        <IonLabel position="stacked">Reply</IonLabel>
        <IonInput
          className="enter-input"
          value={commentText}
          onIonChange={e => setCommentText(e.detail.value as string)}
          placeholder="Enter your comment"
        />
        <IonIcon
          className="enter-icon"
          icon={enterOutline}
          onClick={_ => addComment(
            conversation,
            commentText,
            setConversation,
            setCommentText,
            showToast
          )}
        />
      </IonItem>
    </IonPage>
  );
};

export default ConversationPage;
