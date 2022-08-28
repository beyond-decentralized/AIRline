import { Goal, Task } from "@airline/tasks"
import { IonLabel, IonRange } from "@ionic/react"
import { AirEisenhowerIcon } from "./AirEisenhowerIcon"
import './AirEisenhowerInputs.css'

export function AirEisenhowerInputs({ rankedUnit }: { rankedUnit: Goal | Task }) {
    return (
        <table className="eisenhower-edit-view">
            <tr>
                <td className="eisenhower-icon">
                    <AirEisenhowerIcon
                        rankedUnit={rankedUnit}
                    ></AirEisenhowerIcon>
                </td>
                <td>
                    <div className="range-label">Importance</div>
                    <IonRange min={1} max={5} step={1} name="importance"
                        snaps={true}
                        value={rankedUnit.importance}
                        onIonChange={e => rankedUnit.importance = e.detail.value as number}>
                        <IonLabel slot="start">Low</IonLabel>
                        <IonLabel slot="end">High</IonLabel>
                    </IonRange>
                    <div className="range-label">Urgency</div>
                    <IonRange min={1} max={5} step={1} name="urgency"
                        snaps={true}
                        value={rankedUnit.urgency}
                        onIonChange={e => rankedUnit.urgency = e.detail.value as number}>
                        <IonLabel slot="start">Low</IonLabel>
                        <IonLabel slot="end">High</IonLabel>
                    </IonRange>
                </td>
            </tr>
        </table>
    )
}