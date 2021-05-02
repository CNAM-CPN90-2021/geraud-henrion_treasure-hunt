import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonFooter,
  IonButton,
} from "@ionic/react";
import { useRouteMatch } from "react-router";

export function AdventureStart() {
  const { params } = useRouteMatch();
  console.log(params);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Épisode 1 — La cascade des feuilles de Sty'hl</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="container">
          <h1>
            <small>
              <strong>Épisode 1</strong>
            </small>
            <br />
            La cascade des feuilles de Sty'hl
          </h1>

          <p>
            Bienvenue, dans cet épisode nous allons explorer les légendaires
            cascades de Sty'hl. Ce lieu regorge de merveilles, mais prenez garde
            aux conflits de Sail'Hector !
          </p>

          <p>
            Attrapez un sac, une corde, un clavier et des mousquetons, c'est
            parti pour une séance de Canyoning dans l'ancestrale vallée du Oueb.
          </p>
        </div>
      </IonContent>
      <IonFooter>
        <IonButton routerLink="/" expand="full">
          C'est parti
        </IonButton>
      </IonFooter>
    </IonPage>
  );
}
