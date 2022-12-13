import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import CollectionPage from './pages/CollectionPage';
import CollectionsPage from './pages/CollectionsPage';
import ConversationPage from './pages/ConversationPage';
import { atOutline, folderOpenOutline, personOutline } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/collections">
              <CollectionsPage />
            </Route>
            <Route exact path="/collection/:collectionId">
              <CollectionPage />
            </Route>
            <Route exact path="/conversation/:conversationId">
              <ConversationPage />
            </Route>
            <Route exact path="/">
              <Redirect to="/collections" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="collections" href="/collections">
              <IonIcon icon={folderOpenOutline} />
              <IonLabel>Collections</IonLabel>
            </IonTabButton>
            <IonTabButton tab="participants" href="/participants">
              <IonIcon icon={personOutline} />
              <IonLabel>Participants</IonLabel>
            </IonTabButton>
            <IonTabButton tab="themes" href="/themes">
              <IonIcon icon={atOutline} />
              <IonLabel>Themes</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
