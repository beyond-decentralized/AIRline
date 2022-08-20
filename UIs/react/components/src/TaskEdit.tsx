import { Task } from "@airline/tasks";
import { OverlayEventDetail } from "@ionic/core";
import { IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonModal, IonTextarea, IonTitle, IonToggle, IonToolbar } from "@ionic/react";
import { useRef } from "react";
import { TaskMatrix } from "./TaskMatrix";

export function TaskEdit({ task, triggerId }: { task: Task, triggerId: string }) {
    const modal = useRef<HTMLIonModalElement>(null);

    return (
        <IonModal ref={modal} trigger={triggerId}>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton onClick={() => modal.current?.dismiss()}>Cancel</IonButton>
                    </IonButtons>
                    <IonTitle>{task.id ? 'Edit' : 'Create'} {task.isGoal ? 'Goal' : 'Task'}</IonTitle>
                    <IonButtons slot="end">
                        <IonButton strong={true} onClick={() => modal.current?.dismiss(task, 'confirm')}>
                            Confirm
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonItem>
                    <TaskMatrix
                        task={task}
                    ></TaskMatrix>
                </IonItem>
                <IonItem>
                    <IonLabel>Is a goal</IonLabel>
                    <IonToggle checked={task.isGoal} onIonChange={e => task.isGoal = e.detail.checked} />
                </IonItem>
                <IonItem>
                    <IonLabel position="stacked">Name</IonLabel>
                    <IonInput
                        value={task.name}
                        onIonChange={e => task.name = e.detail.value as string}
                    > </IonInput>
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