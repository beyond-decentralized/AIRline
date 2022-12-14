import { IonBackButton, IonButton, IonButtons, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonToast } from '@ionic/react';
import { useParams } from 'react-router';
import './ConversationPage.css';
import { useEffect, useState } from 'react';
import { Conversation, Collection } from '@airline/conversations';
import { loadCollection, populateConversationDetails, saveConversation } from '../api';
import { add, chevronBackOutline, eyeOutline } from 'ionicons/icons';
import { AirConversationEdit } from '@airline/components-ui-react';
import { OverlayEventDetail } from '@ionic/core';

const CollectionPage: React.FC = () => {

  const { collectionId } = useParams<{ collectionId: string; }>();
  const [newConversation, setNewConversation] = useState<Conversation>(() => new Conversation())
  const [collection, setCollection] = useState(() => new Collection())
  const [present] = useIonToast()

  function showToast(
    message: string,
    duration = 3000
  ): void {
    present(message, duration)
  }

  useEffect(() => {
    if (collectionId) {
      loadCollection(collectionId, newConversation, setCollection, present)
    }
  }, [collectionId])

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
        collection,
        setCollection,
        showToast).then(() => {
          const conversation = new Conversation()
          conversation.collection = collection
          setNewConversation(conversation)
        })
    }
  }

  let conversationsView
  let addButton
  let title

  if (collection && collection.collectionConversations) {
    title = `Collection`
    conversationsView =
      <>
        <IonItem>
          {collection.name}
        </IonItem>
        <IonButton
          href={collection.repository?.uiEntryUri}
          fill="clear"
          rel="noopener noreferrer"
          target="_blank"
        >
          <IonIcon slot="start" icon={eyeOutline}></IonIcon>
          View
        </IonButton>
        <IonItem>
          Conversations:
        </IonItem>
        {collection.collectionConversations
          .map(collectionConversation => collectionConversation.conversation)
          .map(conversation =>
            <IonItem
              key={conversation.id}
              href={'/conversation/' + conversation.id}
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
    title = 'Collection'
    addButton = <></>
    conversationsView =
      <IonItem>
        Loading ...
      </IonItem>
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="" icon={chevronBackOutline}></IonBackButton>
          </IonButtons>
          <IonTitle>{title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {addButton}
        {conversationsView}
      </IonContent>
    </IonPage>
  );
};

export default CollectionPage;
