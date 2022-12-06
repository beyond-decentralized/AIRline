import { Goal, Task } from "@airline/tasks"
import { IonLabel, IonRange } from "@ionic/react"
import { AirEisenhowerIcon } from "./AirEisenhowerIcon"
import './AirEisenhowerDisplay.css'

export function AirEisenhowerDisplay({ rankedUnit }: { rankedUnit: Goal | Task }) {
    return (
        <table className="eisenhower-display-view">
            <tbody>
                <tr>
                    <td className="eisenhower-icon">
                        <AirEisenhowerIcon
                            rankedUnit={rankedUnit}
                        ></AirEisenhowerIcon>
                    </td>
                    <td>
                        <div className="display-label">Importance</div>
                        <div className="display-label">{rankedUnit.importance}</div>
                        <br/>
                        <div className="display-label">Urgency</div>
                        <div className="display-label">{rankedUnit.importance}</div>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}