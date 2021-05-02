import { IonButton } from "@ionic/react";
import { useRouteMatch } from "react-router";
import { PageLayout } from "../components/PageLayout";

export function AdventureStart() {
  const { params } = useRouteMatch();
  console.log(params);

  return (
    <PageLayout
      title="Épisode 1 — La cascade des feuilles de Sty'hl"
      footer={
        <IonButton routerLink="/adventure/1/bag" expand="full">
          Préparer mon sac
        </IonButton>
      }
    >
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
    </PageLayout>
  );
}
