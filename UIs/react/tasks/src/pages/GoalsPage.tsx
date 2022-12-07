import { Goal } from '@airline/tasks';
import { OverlayEventDetail } from '@ionic/core';
import { IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonItem, IonPage, IonTitle, IonToolbar, useIonToast } from '@ionic/react';
import { AirEisenhowerIcon, AirGoalEdit } from '@airline/components-ui-react'
import { add } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { createGoal, getGoals } from '../api';
import './GoalsPage.css';

export function GoalsPage() {
  const [newGoal, setNewGoal] = useState<Goal>(() => new Goal())
  const [goals, setGoals] = useState<Goal[]>(() => [])
  const [present, dismiss] = useIonToast()

  function showToast(
    message: string,
    duration = 3000
  ) {
    present(message, duration)
  }

  useEffect(() => {
    getGoals(setGoals, showToast).then()
  }, [])

  function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
    if (ev.detail.role === 'save') {
      createGoal(ev.detail.data, showToast).then(() => {
        setNewGoal(new Goal())
      })
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
          <IonFabButton id="add-goal">
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
        <AirGoalEdit
          goal={newGoal}
          onWillDismiss={onWillDismiss}
          triggerId="add-goal"
        ></AirGoalEdit>
        {goals.map(goal =>
          <IonItem key={goal.id}>
            <table className="eisenhower-view">
              <tbody>
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
                      className="go-to-tasks-link"
                      href={'/tasks/' + goal.id}
                    >Tasks</a> |
                    <a
                      className="go-to-conversations-link"
                      href={'http://localhost:8100/conversations/goals/' + goal.id}
                    >Conversations</a>
                    <a
                      className="view-goal-link"
                      href={'/goal/' + goal.id}
                    >View</a>
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

export default GoalsPage;
