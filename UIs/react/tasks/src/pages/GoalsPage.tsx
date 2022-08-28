import { Goal } from '@airline/tasks';
import { OverlayEventDetail } from '@ionic/core';
import { IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonItem, IonPage, IonTitle, IonToolbar, useIonToast } from '@ionic/react';
import { AirEisenhowerIcon, AirGoalEdit } from '@airline/components-ui-react'
import { add } from 'ionicons/icons';
import { useState } from 'react';
import { getGoals, saveGoal } from '../api';
import './GoalsPage.css';

export function GoalsPage() {
  const [goals, setGoals] = useState<Goal[]>([])
  const [present, dismiss] = useIonToast()
  let currentGoal = new Goal()

  function showToast(
    message: string,
    duration = 3000
  ) {
    present(message, duration)
  }

  getGoals(setGoals, showToast).then()

  function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
    if (ev.detail.role === 'save') {
      currentGoal = new Goal()
      saveGoal(ev.detail.data, showToast).then()
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Goals</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Goals</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton id="edit-goal">
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
        <AirGoalEdit
          goal={currentGoal}
          onWillDismiss={onWillDismiss}
          triggerId="edit-goal"
        ></AirGoalEdit>
        {goals.map(goal =>
          <IonItem>
            <table className="eisenhower-view">
              <tr>
                <td className="eisenhower-icon">
                  <AirEisenhowerIcon
                    rankedUnit={goal}
                  ></AirEisenhowerIcon>
                </td>
                <td>
                  {goal.name}
                  <br>
                  </br>
                  <a
                    href={'/tasks/' + goal.id}
                    className="go-to-tasks-link"
                  >Tasks</a> |
                  <a
                    href={'http://localhost:8100/conversations/goals/' + goal.id}
                    className="go-to-conversations-link"
                  >Conversations</a>
                  <a
                    className="edit-goal-link"
                    id="edit-goal"
                    onClick={e => currentGoal = goal}
                  >Edit</a>
                </td>
              </tr>
            </table>
          </IonItem>
        )}
      </IonContent>
    </IonPage>
  );
};

export default GoalsPage;
