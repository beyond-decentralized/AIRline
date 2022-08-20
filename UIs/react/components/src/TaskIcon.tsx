import { Task } from '@airline/tasks'
import './TaskIcon.css'

export function TaskIcon({ task }: { task: Task }) {
    let importanceIcons = []
    for (let i = 0; i < task.importance; i++) {
        importanceIcons.push(<img
            className="priority-icon"
            src="resources/rating/importance_rating_full_point.png" />)
    }
    let urgencyIcons = []
    for (let i = 0; i < task.urgency; i++) {
        urgencyIcons.push(<img
            className="priority-icon"
            src="resources/rating/urgency_rating_full_point.png" />)
    }
    return (
        <figure className="combined-icon">
            <div className="importance-container">
                <div className="dimension-label">
                    Importance
                </div>
                <div className="priority-points">
                    {importanceIcons}
                </div>
            </div>
            <div className="priority-container">
                <div className="dimension-label">
                    Urgency
                </div>
                <div className="priority-points">
                    {urgencyIcons}
                </div>
            </div>
        </figure>
    )
}