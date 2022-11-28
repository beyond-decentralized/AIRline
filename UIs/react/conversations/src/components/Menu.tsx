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

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Conversations</IonListHeader>
          <IonNote>{username}</IonNote>
          {conversationsByTopic.map((conversationsForTopic, topicIndex) => {
            return (
              <IonList id="labels-list" key={topicIndex}>
                <IonListHeader>{conversationsForTopic[0].topic ? conversationsForTopic[0].topic.name : 'No Topic'}</IonListHeader>
                {conversationsForTopic.map((conversation, conversationIndex) => {
                  return (
                    <IonMenuToggle key={conversationIndex} autoHide={false}>
                      <IonItem
                        className={location.pathname === `/conversation/${conversation.id}` ? 'selected' : ''}
                        routerLink={`conversation/${conversation.id}`}
                        routerDirection="none"
                        lines="none"
                        detail={false}
                      >
                        <IonLabel>{conversation.name}</IonLabel>
                      </IonItem>
                    </IonMenuToggle>
                  );
                })}
              </IonList>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
