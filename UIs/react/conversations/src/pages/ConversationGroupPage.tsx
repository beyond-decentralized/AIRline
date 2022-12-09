import { IonButtons, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonToast } from '@ionic/react';
import { useParams } from 'react-router';
import './ConversationPage.css';
import { useEffect, useState } from 'react';
import { Conversation, ConversationGroup } from '@airline/conversations';
import { loadConversationGroup, populateConversationDetails, saveConversation } from '../api';
import { add } from 'ionicons/icons';
import { AirConversationEdit } from '@airline/components-ui-react';
import { OverlayEventDetail } from '@ionic/core';

const ConversationGroupPage: React.FC = () => {

  const [newConversation, setNewConversation] = useState<Conversation>(() => new Conversation())
  const { conversationGroupId } = useParams<{ conversationGroupId: string; }>();
  const [conversationGroup, setConversationGroup] = useState(() => new ConversationGroup())
  const [present] = useIonToast()

  function showToast(
    message: string,
    duration = 3000
  ): void {
    present(message, duration)
  }

  useEffect(() => {
    loadConversationGroup(conversationGroupId, newConversation, setConversationGroup, present)
  }, [])

  function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
    if (ev.detail.role === 'save') {
      const {
        conversation,
        participantUserAccounts,
        moderatorUserAccounts
      } = ev.detail.data
      saveConversation(
        conversation,
        participantUserAccounts,
        moderatorUserAccounts,
        conversationGroup,
        setConversationGroup,
        showToast).then(() => {
          const conversation = new Conversation()
          conversation.conversationGroup = conversationGroup
          setNewConversation(conversation)
        })
    }
  }

  let conversationsView
  let addButton
  let title

  if (conversationGroup && conversationGroup.conversationGroupConversations) {
    title = `${conversationGroup.name} Conversations`
    conversationsView =
      <>
        {conversationGroup.conversationGroupConversations
          .map(conversationGroupConversation => conversationGroupConversation.conversation)
          .map(conversation =>
            <IonItem
              key={conversation.id}
              routerLink={'/conversation/' + conversation.id}
            >
              {conversation.participants.map(participant =>
                <div
                  key={participant.userAccount.GUID}
                >{participant.userAccount.username}</div>
              )}
            </IonItem>
          )}
      </>
    addButton =
      <>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton id="add-conversation">
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
        <AirConversationEdit
          conversation={newConversation}
          populateConversationDetails={populateConversationDetails}
          onWillDismiss={onWillDismiss}
          triggerId="add-conversation"
        ></AirConversationEdit>
      </>
  } else {
    title = 'Group not found'
    addButton = <></>
    conversationsView = <></>
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      {addButton}
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{title}</IonTitle>
          </IonToolbar>
        </IonHeader>
        {conversationsView}
      </IonContent>
    </IonPage>
  );
};

export default ConversationGroupPage;
