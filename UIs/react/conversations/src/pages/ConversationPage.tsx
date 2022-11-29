import { IonButtons, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonToast } from '@ionic/react';
import { AirConversationView } from '@airline/components-ui-react'
import { useParams } from 'react-router';
import './ConversationPage.css';
import { useEffect, useState } from 'react';
import { Conversation } from '@airline/conversations';
import { addComment, loadConversation } from '../api';
import { enterOutline } from 'ionicons/icons';

const ConversationPage: React.FC = () => {

  const { id } = useParams<{ id: string; }>();
  const [conversation, setConversation] = useState(() => new Conversation())
  const [commentText, setCommentText] = useState(() => '')
  const [present, dismiss] = useIonToast()

  useEffect(() => {
    loadConversation(id, setConversation, present).then()
  }, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{conversation.name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{conversation.name}</IonTitle>
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
            present
          )}
        />
      </IonItem>
    </IonPage>
  );
};

export default ConversationPage;
