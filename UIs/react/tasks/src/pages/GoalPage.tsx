import { AirEisenhowerDisplay, AirGoalEdit } from "@airline/components-ui-react";
import { Goal, GoalStatus } from "@airline/tasks";
import { OverlayEventDetail } from "@ionic/core";
import { IonButton, IonContent, IonHeader, IonItem, IonLabel, IonNote, IonPage, IonSegment, IonSegmentButton, IonTitle, IonToolbar, useIonToast } from "@ionic/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getGoal, saveGoal } from "../api";

export function GoalPage() {
  const { goalId } = useParams<{ goalId: string; }>();
  const [goal, setGoal] = useState<Goal | null>(() => null)
  const [present, dismiss] = useIonToast()

  function showToast(
    message: string,
    duration = 3000
  ) {
    present(message, duration)
  }

  useEffect(() => {
    getGoal(goalId, setGoal, showToast).then()
  }, [])

  function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
    if (ev.detail.role === 'save') {
      saveGoal(ev.detail.data, showToast).then()
    }
  }

  function getGoalStatusName(
    goal: Goal
  ): string {
    switch (goal.status) {
      case GoalStatus.ACCOMPLISHED:
        return 'Accomplished'
      case GoalStatus.CURRENT:
        return 'Cuurrent'
      case GoalStatus.FUTURE:
        return 'Future'
      case GoalStatus.OUTDATED:
        return 'Outdated'
      default:
        return 'Unknown'
    }
  }

  let content

  if (goal) {
    content =
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Goal: {goal.name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <AirGoalEdit
          goal={goal}
          onWillDismiss={onWillDismiss}
          triggerId="edit-goal"
        ></AirGoalEdit>
        <IonItem>
          <AirEisenhowerDisplay
            rankedUnit={goal}
          ></AirEisenhowerDisplay>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Name</IonLabel>
          <IonNote color="primary">{goal.name}</IonNote>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Goal Status</IonLabel>
          <IonNote color="primary">{getGoalStatusName(goal)}</IonNote>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Description</IonLabel>
          <IonNote color="primary">{goal.description}</IonNote>
        </IonItem>
        <IonButton
          expand="full"
          onClick={e => {
            document.getElementById("edit-goal")?.click()
          }}
        >Edit</IonButton>
        <IonItem>
          <div>
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
              href={'/goal/' + goal.id}
              onClick={e => {
                document.getElementById("edit-goal")?.click()
              }}
            >Edit</a>
          </div>
        </IonItem>
      </IonContent>
  } else {
    content =
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Goal: ...</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem>
          Loading ...
        </IonItem>
      </IonContent>
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Goal: </IonTitle>
        </IonToolbar>
      </IonHeader>
      {content}
    </IonPage>
  )
}

export default GoalPage;