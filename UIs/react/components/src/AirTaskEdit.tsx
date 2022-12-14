import { Goal, Task, TaskStatus } from "@airline/tasks";
import { OverlayEventDetail } from "@ionic/core";
import { IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonModal, IonSelect, IonSelectOption, IonTextarea, IonTitle, IonToggle, IonToolbar } from "@ionic/react";
import { useRef } from "react";
import { AirEisenhowerInputs } from "./AirEisenhowerInputs";

export function AirTaskEdit({
    onWillDismiss,
    task,
    triggerId
}: {
    onWillDismiss: (ev: CustomEvent<OverlayEventDetail>) => void,
    task: Task,
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
                    <IonTitle>{task.id ? 'Edit' : 'Create'} Task</IonTitle>
                    <IonButtons slot="end">
                        <IonButton strong={true} onClick={() => modal.current?.dismiss(task, 'save')}>
                            Save
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonItem>
                    <AirEisenhowerInputs
                        rankedUnit={task}
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
                        value={task.name}
                        onIonChange={e => task.name = e.detail.value as string}
                    > </IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel position="stacked">Task Status</IonLabel>
                    <IonSelect
                        value={task.status}
                        onIonChange={e => task.status = parseInt(e.detail.value)}
                    >
                        <IonSelectOption
                            value={TaskStatus.IN_PLANNING}
                        >
                            In Planning
                        </IonSelectOption>
                        <IonSelectOption
                            value={TaskStatus.PENDING}
                        >
                            Pending
                        </IonSelectOption>
                        <IonSelectOption
                            value={TaskStatus.IN_PROGRESS}
                        >
                            In Progress
                        </IonSelectOption>
                        <IonSelectOption
                            value={TaskStatus.DONE}
                        >
                            Done
                        </IonSelectOption>
                    </IonSelect>
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Description</IonLabel>
                    <IonTextarea
                        value={task.description}
                        onIonChange={e => task.description = e.detail.value as string}
                    ></IonTextarea>
                </IonItem>
            </IonContent>
        </IonModal>
    )
}