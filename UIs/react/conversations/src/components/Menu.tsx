import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  useIonToast,
} from '@ionic/react';
import { useLocation } from 'react-router-dom';
import {
  bookmarkOutline,
  heartOutline,
  heartSharp,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp
} from 'ionicons/icons';
import './Menu.css';
import { useEffect, useState } from 'react';
import { Conversation } from '@airline/conversations';
import { getConversationsByTopic as getConversationsByTopic, getLoggedInUser } from '../api';
import { UserAccount } from '@airport/travel-document-checkpoint';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Inbox',
    url: '/page/Inbox',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  {
    title: 'Outbox',
    url: '/page/Outbox',
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp
  },
  {
    title: 'Favorites',
    url: '/page/Favorites',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  }
];

const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const Menu: React.FC = () => {
  const location = useLocation();

  const [userAccount, setUserAccount]
    = useState<UserAccount | null>(null)
  const [conversationsByTopic, setConversationsByTopic]
    = useState<Conversation[][]>([])
  const [present, dismiss] = useIonToast()

  function showToast(
    message: string,
    duration = 3000
  ) {
    present(message, duration)
  }

  useEffect(() => {
    getLoggedInUser(setUserAccount, showToast).then()
    getConversationsByTopic(setConversationsByTopic, showToast).then()
  }, [])
  let username = ''
  if (userAccount) {
    username = userAccount.username
  }

  for (let conversationsForTopic of conversationsByTopic) {
    let topic = conversationsForTopic[0].topic
    let topicName = topic ? topic.name : 'No Topic'
  }

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Conversations</IonListHeader>
          <IonNote>{username}</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={location.pathname === appPage.url ? 'selected' : ''}
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="labels-list">
          <IonListHeader>Labels</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon slot="start" icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
