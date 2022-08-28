import { Task } from "@airline/tasks";
import { OverlayEventDetail } from "@ionic/core";
export declare function TaskEdit({ onWillDismiss, task, triggerId }: {
    onWillDismiss: (ev: CustomEvent<OverlayEventDetail>) => void;
    task: Task;
    triggerId: string;
}): JSX.Element;
