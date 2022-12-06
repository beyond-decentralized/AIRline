import { Goal, GoalStatus } from "@airline/tasks";
import { OverlayEventDetail } from "@ionic/core";
import { IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonSelect, IonSelectOption, IonTextarea, IonTitle, IonToolbar } from "@ionic/react";
import { useRef } from "react";

export function GoalPage({
  goal,
  onWillDismiss,
  triggerId
}: {
  goal: Goal,
  onWillDismiss: (ev: CustomEvent<OverlayEventDetail>) => void
  triggerId: string
}) {
  const modal = useRef<HTMLIonModalElement>(null);

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
        <IonItem>
          <AirEisenhowerInputs
            rankedUnit={goal}
          ></AirEisenhowerInputs>
        </IonItem>
        {/*
                <IonItem>
                <IonLabel>Is a goal</IonLabel>
                <IonToggle checked={task.isGoal} onIonChange={e => task.isGoal = e.detail.checked} />
                </IonItem>
                */}
        <IonItem>
          <IonLabel position="stacked">Name</IonLabel>
          <IonInput
            value={goal.name}
            onIonChange={e => goal.name = e.detail.value as string}
          > </IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Goal Status</IonLabel>
          <IonSelect
            value={goal.status}
            onIonChange={e => goal.status = parseInt(e.detail.value)}
          >
            <IonSelectOption
              key={GoalStatus.FUTURE}
              value={GoalStatus.FUTURE}
            >
              Future
            </IonSelectOption>
            <IonSelectOption
              key={GoalStatus.CURRENT}
              value={GoalStatus.CURRENT}
            >
              Current
            </IonSelectOption>
            <IonSelectOption
              key={GoalStatus.OUTDATED}
              value={GoalStatus.OUTDATED}
            >
              Outdated
            </IonSelectOption>
            <IonSelectOption
              key={GoalStatus.ACCOMPLISHED}
              value={GoalStatus.ACCOMPLISHED}
            >
              Accomplished
            </IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Description</IonLabel>
          <IonTextarea
            value={goal.description}
            onIonChange={e => goal.description = e.detail.value as string}
          ></IonTextarea>
        </IonItem>
      </IonContent>
    </IonPage>
  )
}