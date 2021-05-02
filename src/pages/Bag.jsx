import {
  IonContent,
  IonPage,
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
import { Header } from "../components/Header";

export function Bag() {
  const [selected, setSelected] = useState();
  const bag = useBag();

  return (
    <IonPage>
      <Header title="Préparez votre sac" />
      <IonContent fullscreen>
        <div className="container">
          <h1>Préparation du sac</h1>
          <p>
            C'est parti pour une séance de Canyoning dans l'ancestrale vallée du
            Oueb.
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
        </div>
      </IonContent>

      {selected && (
        <IonFooter>
          <IonButton
            expand="full"
            routerLink="/travel"
            onClick={() => {
              bag.add(selected);
            }}
          >
            En route !
          </IonButton>
        </IonFooter>
      )}
    </IonPage>
  );
}
