import {
  IonItem,
  IonLabel,
  IonRadio,
  IonRadioGroup,
  IonListHeader,
  IonFooter,
  IonButton,
} from "@ionic/react";
import { useState } from "react";
import { useBag } from "../bagContext";
import { PageLayout } from "../components/PageLayout";
import { useHealth } from "../useHealth";

export function Bag() {
  const [selected, setSelected] = useState();
  const bag = useBag();

  const { playerHealth, setPlayerHealth } = useHealth();

  return (
    <PageLayout
      title="Préparez votre sac"
      footer={
        selected && (
          <IonFooter>
            <IonButton
              expand="full"
              routerLink="/adventure/1/travel"
              onClick={() => {
                bag.add(selected);
              }}
            >
              En route !
            </IonButton>
          </IonFooter>
        )
      }
    >
      <h1>Ta vie est à : {playerHealth}</h1>
      <IonButton onClick={() => setPlayerHealth((h) => h - 10)}>
        Prendre des dégats
      </IonButton>
      <IonButton onClick={() => setPlayerHealth((h) => h + 10)}>
        Se soigner
      </IonButton>
            <h1>Préparation du sac</h1>
      <p>
        C'est parti pour une séance de Canyoning dans l'ancestrale vallée
        du Oueb.
      </p>

      <IonRadioGroup
        value={selected}
        onIonChange={(e) => setSelected(e.detail.value)}
      >
        <IonListHeader>
          <IonLabel>Que mettez-vous dans votre sac ?</IonLabel>
        </IonListHeader>

        <IonItem>
          <IonLabel>Un baudrier, une corde et des dégaines</IonLabel>
          <IonRadio slot="start" value="gears" />
        </IonItem>

        <IonItem>
          <IonLabel>Un clavier fera l'affaire</IonLabel>
          <IonRadio slot="start" value="keyboard" />
        </IonItem>
      </IonRadioGroup>
    </PageLayout>
  );
}
