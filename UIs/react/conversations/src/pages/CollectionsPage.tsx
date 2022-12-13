import { Collection } from '@airline/conversations';
import { UserAccount } from '@airport/travel-document-checkpoint';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonItem, IonList, IonListHeader, IonMenuButton, IonNote, IonPage, IonTitle, IonToolbar, useIonToast } from '@ionic/react';
import { chevronBackOutline } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { getCollectionsByTopic, getLoggedInUser } from '../api';
import './CollectionsPage.css';

const CollectionsPage: React.FC = () => {
  const [userAccount, setUserAccount]
    = useState<UserAccount | null>(null)
  const [collectionsByTopic, setCollectionsByTopic]
    = useState<Collection[][]>([])
  const [present, dismiss] = useIonToast()

  function showToast(
    message: string,
    duration = 3000
  ) {
    present(message, duration)
  }

  useEffect(() => {
    getLoggedInUser(setUserAccount, showToast).then()
    getCollectionsByTopic(setCollectionsByTopic, showToast).then()
  }, [])
  let username = ''
  if (userAccount) {
    username = userAccount.username
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="" icon={chevronBackOutline}></IonBackButton>
          </IonButtons>
          <IonTitle>Collections</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {collectionsByTopic.map((collectionsForTopic, topicIndex) =>
          <IonList id="labels-list" key={topicIndex}>
            <IonListHeader>{collectionsForTopic[0].topic ? collectionsForTopic[0].topic.name : 'No Topic'}</IonListHeader>
            {collectionsForTopic.map(collection =>
              <IonItem key={collection.id}
                routerLink={`/collection/${collection.id}`}
              >
                {collection.name}
              </IonItem>
            )}
          </IonList>
        )}
      </IonContent>
    </IonPage>
  );
};

export default CollectionsPage;
