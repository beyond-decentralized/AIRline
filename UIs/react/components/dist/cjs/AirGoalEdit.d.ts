import { Goal } from "@airline/tasks";
import { OverlayEventDetail } from "@ionic/core";
export declare function AirGoalEdit({ goal, onWillDismiss, triggerId }: {
    goal: Goal;
    onWillDismiss: (ev: CustomEvent<OverlayEventDetail>) => void;
    triggerId: string;
}): JSX.Element;
