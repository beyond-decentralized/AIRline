import { Task } from "@airline/task"
import { IonLabel, IonRange } from "@ionic/react"
import { TaskIcon } from "./TaskIcon"

export function TaskMatrix({ task }: { task: Task }) {
    return (
        <table className="task-matrix">
            <tr>
                <td className="task-icon">
                    <TaskIcon
                        task={task}
                    ></TaskIcon>
                </td>
                <td>
                    <div className="range-label">Importance</div>
                    <IonRange min={1} max={5} step={1} name="importance"
                        snaps={true}
                        value={task.importance}
                        onIonChange={e => task.importance = e.detail.value as number}>
                        <IonLabel slot="start">Low</IonLabel>
                        <IonLabel slot="end">High</IonLabel>
                    </IonRange>
                    <div className="range-label">Urgency</div>
                    <IonRange min={1} max={5} step={1} name="urgency"
                        snaps={true}
                        value={task.urgency}
                        onIonChange={e => task.urgency = e.detail.value as number}>
                        <IonLabel slot="start">Low</IonLabel>
                        <IonLabel slot="end">High</IonLabel>
                    </IonRange>
                </td>
            </tr>
        </table>
    )
}