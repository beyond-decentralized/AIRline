import { Goal, GoalStatus } from "@airline/tasks";
import { OverlayEventDetail } from "@ionic/core";
import { IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonModal, IonSelect, IonSelectOption, IonTextarea, IonTitle, IonToggle, IonToolbar } from "@ionic/react";
import { useRef } from "react";
import { AirEisenhowerInputs } from "./AirEisenhowerInputs";

export function AirGoalEdit({
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
        <IonModal ref={modal} trigger={triggerId} onWillDismiss={e => onWillDismiss(e)}>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton onClick={() => modal.current?.dismiss()}>Cancel</IonButton>
                    </IonButtons>
                    <IonTitle>{goal.id ? 'Edit' : 'Create'} Goal</IonTitle>
                    <IonButtons slot="end">
                        <IonButton strong={true} onClick={() => modal.current?.dismiss(goal, 'save')}>
                            Save
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
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
                            value={GoalStatus.FUTURE}
                        >
                            Future
                        </IonSelectOption>
                        <IonSelectOption
                            value={GoalStatus.CURRENT}
                        >
                            Current
                        </IonSelectOption>
                        <IonSelectOption
                            value={GoalStatus.OUTDATED}
                        >
                            Outdated
                        </IonSelectOption>
                        <IonSelectOption
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
        </IonModal>
    )
}