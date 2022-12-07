import {
  IonContent,
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
import './Menu.css';
import { useEffect, useState } from 'react';
import { ConversationGroup } from '@airline/conversations';
import { getConversationGroupsByTopic as getConversationGroupsByTopic, getLoggedInUser } from '../api';
import { UserAccount } from '@airport/travel-document-checkpoint';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const Menu: React.FC = () => {
  const location = useLocation();

  const [userAccount, setUserAccount]
    = useState<UserAccount | null>(null)
  const [conversationGroupsByTopic, setConversationGroupsByTopic]
    = useState<ConversationGroup[][]>([])
  const [present, dismiss] = useIonToast()

  function showToast(
    message: string,
    duration = 3000
  ) {
    present(message, duration)
  }

  useEffect(() => {
    getLoggedInUser(setUserAccount, showToast).then()
    getConversationGroupsByTopic(setConversationGroupsByTopic, showToast).then()
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
          {conversationGroupsByTopic.map((conversationGroupsForTopic, topicIndex) => {
            return (
              <IonList id="labels-list" key={topicIndex}>
                <IonListHeader>{conversationGroupsForTopic[0].topic ? conversationGroupsForTopic[0].topic.name : 'No Topic'}</IonListHeader>
                {conversationGroupsForTopic.map((conversationGroup, conversationIndex) => {
                  return (
                    <IonMenuToggle key={conversationIndex} autoHide={false}>
                      <IonItem
                        className={location.pathname === `/conversationGroup/${conversationGroup.id}` ? 'selected' : ''}
                        routerLink={`conversationGroup/${conversationGroup.id}`}
                        routerDirection="none"
                        lines="none"
                        detail={false}
                      >
                        <IonLabel>{conversationGroup.name}</IonLabel>
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
