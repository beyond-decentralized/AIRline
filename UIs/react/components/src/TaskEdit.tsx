import { Task } from "@airline/task";
import { IonInput, IonItem, IonLabel, IonTextarea, IonToggle } from "@ionic/react";
import { TaskMatrix } from "./TaskMatrix";

export function TaskEdit({ task }: { task: Task }) {

    return (
        <>
            <IonItem>
                <TaskMatrix
                    task={task}
                ></TaskMatrix>
            </IonItem>
            <IonItem>
                <IonLabel>Checked: {JSON.stringify(checked)}</IonLabel>
                <IonToggle checked={task.isGoal} onIonChange={e => setChecked(e.detail.checked)} />
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
        </>
    )
}