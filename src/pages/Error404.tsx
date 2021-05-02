import { IonButton, IonContent, IonPage } from "@ionic/react";
import { Link, useRouteMatch } from "react-router-dom";
import { Header } from "../components/Header";

export function Error404() {
  const match = useRouteMatch();

  return (
    <IonPage>
      <Header title={`404 — La page "${match.path}" est introuvable`} />

      <IonContent fullscreen>
        <div className="container">
          <h1>404</h1>
          <h2>La page "{match.path}" est introuvable</h2>

          <Link to="/">
            <IonButton>Retour à l'accueil</IonButton>
          </Link>
        </div>
      </IonContent>
    </IonPage>
  );
}
