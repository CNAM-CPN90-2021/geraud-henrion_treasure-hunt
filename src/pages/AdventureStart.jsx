import {
  IonContent,
  IonPage,
  IonFooter,
  IonButton,
} from "@ionic/react";
import { useRouteMatch } from "react-router";
import { Header } from "../components/Header";

export function AdventureStart() {
  const { params } = useRouteMatch();
  console.log(params);

  return (
    <IonPage>
      <Header title="Épisode 1 — La cascade des feuilles de Sty'hl" />
      <IonContent fullscreen>
        <div className="container">
          <h1>
            <small>
              <strong>Épisode 1</strong>
            </small>
            <br />
            La cascade de feuilles de Sty'hl
          </h1>

          <p>
            Bienvenue, dans cet épisode nous allons explorer les légendaires
            cascades de feuilles de Sty'hl. Ce lieu regorge de merveilles, mais
            prenez garde aux conflits de Sail'Hector !
          </p>
        </div>
      </IonContent>
      <IonFooter>
        <IonButton routerLink="/adventure/1/bag" expand="full">
          Préparer mon sac
        </IonButton>
      </IonFooter>
    </IonPage>
  );
}
