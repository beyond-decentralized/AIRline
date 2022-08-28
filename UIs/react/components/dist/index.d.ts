import { Conversation } from '@airline/conversations';
import { Goal, Task } from '@airline/tasks';
import { OverlayEventDetail } from '@ionic/core';

declare function AirConversationView({ conversation }: {
    conversation: Conversation;
}): JSX.Element;

declare function AirEisenhowerIcon({ rankedUnit }: {
    rankedUnit: Goal | Task;
}): JSX.Element;

declare function AirEisenhowerInputs({ rankedUnit }: {
    rankedUnit: Goal | Task;
}): JSX.Element;

declare function AirGoalEdit({ goal, onWillDismiss, triggerId }: {
    goal: Goal;
    onWillDismiss: (ev: CustomEvent<OverlayEventDetail>) => void;
    triggerId: string;
}): JSX.Element;

declare function AirTaskEdit({ onWillDismiss, task, triggerId }: {
    onWillDismiss: (ev: CustomEvent<OverlayEventDetail>) => void;
    task: Task;
    triggerId: string;
}): JSX.Element;

export { AirConversationView, AirEisenhowerIcon, AirEisenhowerInputs, AirGoalEdit, AirTaskEdit };
