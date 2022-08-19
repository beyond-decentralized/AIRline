import React, { useState, useRef } from 'react';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonModal,
  IonLabel,
  IonPage,
  IonTextarea,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { OverlayEventDetail } from '@ionic/core/components';
import { add } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Tasks.css';

const Tasks: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  const taskName = useRef<HTMLIonInputElement>(null);
  const taskDescription = useRef<HTMLIonTextareaElement>(null);

  const [message, setMessage] = useState(
    'This modal example uses triggers to automatically open a modal when the button is clicked.'
  );

  function save() {
    console.log('Task Name: ' + taskName.current?.value);
    console.log('Task Description: ' + taskDescription.current?.value);
    modal.current?.dismiss(taskName.current?.value, 'confirm');
  }

  function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
    if (ev.detail.role === 'confirm') {
      setMessage(`Hello, ${ev.detail.data}!`);
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tasks</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tasks</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tasks page" />
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton id="open-modal" color="secondary">
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
        <IonModal ref={modal} trigger="open-modal" onWillDismiss={(ev) => onWillDismiss(ev)}>
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonButton onClick={() => modal.current?.dismiss()}>Cancel</IonButton>
              </IonButtons>
              <IonTitle>Add Task</IonTitle>
              <IonButtons slot="end">
                <IonButton strong={true} onClick={() => save()}>
                  Save
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonItem>
              <IonLabel position="stacked">Enter your task</IonLabel>
              <IonInput ref={taskName} type="text" placeholder="Task Name" />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Enter task details</IonLabel>
              <IonTextarea ref={taskDescription} placeholder="Enter more information here..."></IonTextarea>
            </IonItem>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Tasks;
