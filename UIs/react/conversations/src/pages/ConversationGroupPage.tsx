import { IonButtons, IonContent, IonHeader, IonItem, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonToast } from '@ionic/react';
import { useParams } from 'react-router';
import './ConversationPage.css';
import { useEffect, useState } from 'react';
import { ConversationGroup } from '@airline/conversations';
import { loadConversationGroup } from '../api';

const ConversationGroupPage: React.FC = () => {

  const { conversationGroupId } = useParams<{ conversationGroupId: string; }>();
  const [conversationGroup, setConversationGroup] = useState(() => new ConversationGroup())
  const [present] = useIonToast()

  useEffect(() => {
    loadConversationGroup(conversationGroupId, setConversationGroup, present).then()
  }, [])

  let conversationsView

  if (conversationGroup) {
    conversationsView =
      <>
        {conversationGroup.conversations.map(conversation =>
          <IonItem
            routerLink={'/conversation/' + conversation.id}
          >
            {conversation.participants.map(participant =>
              <div>{participant.userAccount.username}</div>
            )}
          </IonItem>
        )}
      </>
  } else {
    conversationsView = <></>
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{conversationGroup.name} Conversations</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{conversationGroup.name} Conversations</IonTitle>
          </IonToolbar>
        </IonHeader>
        {conversationsView}
      </IonContent>
    </IonPage>
  );
};

export default ConversationGroupPage;
