import { Conversation } from "@airline/conversations";
import { UserAccount } from "@airport/travel-document-checkpoint";
import { OverlayEventDetail } from "@ionic/core";
import { IonAvatar, IonButton, IonButtons, IonChip, IonContent, IonHeader, IonItem, IonLabel, IonModal, IonTitle, IonToolbar, useIonToast } from "@ionic/react";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";

export function AirConversationEdit({
    conversation,
    populateConversationDetails,
    onWillDismiss,
    triggerId
}: {
    conversation: Conversation,
    populateConversationDetails: (
        conversation: Conversation,
        setParticipantUserAccounts: React.Dispatch<React.SetStateAction<UserAccount[]>>,
        setModeratorUserAccounts: React.Dispatch<React.SetStateAction<UserAccount[]>>,
        showToast: (message: string, duration?: number) => void
    ) => Promise<void>,
    onWillDismiss: (ev: CustomEvent<OverlayEventDetail>) => void
    triggerId: string
}) {
    const { collectionId } = useParams<{ collectionId: string; }>();

    const modal = useRef<HTMLIonModalElement>(null);
    const [participantUserAccounts, setParticipantUserAccounts] = useState<UserAccount[]>(() => [])
    const [moderatorUserAccounts, setModeratorUserAccounts] = useState<UserAccount[]>(() => [])
    const [present] = useIonToast()

    function showToast(
        message: string,
        duration = 3000
    ): void {
        present(message, duration)
    }

    useEffect(() => {
        populateConversationDetails(conversation, setParticipantUserAccounts, setModeratorUserAccounts, showToast).then()
    }, [collectionId])

    function saveConversation() {
        modal.current?.dismiss({
            conversation,
            participantUserAccounts,
            moderatorUserAccounts
        }, 'save')
    }

    const participantListView = <>
        {participantUserAccounts.map(participantUserAccount =>
            <IonChip key={participantUserAccount.GUID}>
                <IonAvatar>
                    <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                </IonAvatar>
                <IonLabel>{participantUserAccount.username}</IonLabel>
            </IonChip>
        )}
    </>

    const moderatorListView = <>
        {moderatorUserAccounts.map(moderatorUserAccount =>
            <IonChip key={moderatorUserAccount.GUID}>
                <IonAvatar>
                    <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                </IonAvatar>
                <IonLabel>{moderatorUserAccount.username}</IonLabel>
            </IonChip>
        )}
    </>

    let editConversationContent

    if (participantUserAccounts.length) {
        editConversationContent =
            <>
                <IonItem>
                    <IonLabel position="stacked">Participants</IonLabel>
                    {participantListView}
                </IonItem>
                <IonItem>
                    <IonLabel position="stacked">Moderators</IonLabel>
                    {moderatorListView}
                </IonItem>
            </>
    } else {
        editConversationContent =
            <IonItem>
                Loading ...
            </IonItem>
    }

    return (
        <IonModal ref={modal} trigger={triggerId} onWillDismiss={e => onWillDismiss(e)}>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton onClick={() => modal.current?.dismiss()}>Cancel</IonButton>
                    </IonButtons>
                    <IonTitle>{conversation.id ? 'Edit' : 'Create'} Conversation</IonTitle>
                    <IonButtons slot="end">
                        <IonButton strong={true} onClick={() => saveConversation()}>
                            Save
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                {editConversationContent}
            </IonContent>
        </IonModal>
    )
}