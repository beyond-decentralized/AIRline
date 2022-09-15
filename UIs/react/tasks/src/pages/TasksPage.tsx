import { Task } from '@airline/tasks';
import { useState, useRef } from 'react';
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
  IonToolbar,
  useIonToast
} from '@ionic/react';
import { OverlayEventDetail } from '@ionic/core/components';
import { add } from 'ionicons/icons';
import { AirEisenhowerIcon, AirTaskEdit } from '@airline/components-ui-react'
import { getTasks, saveTask } from '../api';
import './TasksPage.css';
import { useParams } from 'react-router';

export function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [present, dismiss] = useIonToast()
  let currentTask = new Task()

  let { goalId }: { goalId: string } = useParams()

  getTasks(goalId, setTasks, present).then()

  function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
    if (ev.detail.role === 'save') {
      currentTask = new Task()
      saveTask(ev.detail.data, present).then()
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
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton id="edit-task" color="secondary">
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
        <AirTaskEdit
          task={currentTask}
          onWillDismiss={onWillDismiss}
          triggerId="edit-task"
        ></AirTaskEdit>
        {tasks.map(task =>
          <IonItem>
            <table className="eisenhower-view">
              <tbody>
                <tr>
                  <td className="eisenhower-icon">
                    <AirEisenhowerIcon
                      rankedUnit={task}
                    ></AirEisenhowerIcon>
                  </td>
                  <td>
                    {task.name}
                    <br>
                    </br>
                    <a
                      href={'http://localhost:8100/conversations/tasks/' + task.id}
                      className="go-to-conversations-link"
                    >Conversations</a> |
                    <a
                      className="edit-task-link"
                      id="edit-task"
                      onClick={e => currentTask = task}
                    >Edit</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </IonItem>
        )}
      </IonContent>
    </IonPage>
  );
};

export default TasksPage;
