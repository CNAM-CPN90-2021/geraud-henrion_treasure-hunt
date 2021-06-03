import { IonButton } from "@ionic/react";
import { PageLayout } from "../components/PageLayout";
import { useHealth } from "../useHealth";

export function AdventureStart() {
  const { playerHealth, setPlayerHealth } = useHealth();

  return (
    <PageLayout
      title="Épisode 1 — La cascade des feuilles de Sty'hl"
      footer={
        <IonButton routerLink="/adventure/1/bag" expand="full">
          Préparer mon sac
        </IonButton>
      }
    >
      <h1>Ta vie est à : {playerHealth}</h1>
      <IonButton onClick={() => setPlayerHealth((h) => h - 10)}>
        Prendre des dégats
      </IonButton>
      <IonButton onClick={() => setPlayerHealth((h) => h + 10)}>
        Se soigner
      </IonButton>

      <h1>
        <small>
          <strong>Épisode 1</strong>
        </small>
        <br />
        La cascade de feuilles de Sty'hl
      </h1>

      <h2>Bienvenue à toi courageux(se) aventurier(ère) !</h2>
      <p>
        Dans cet épisode nous allons explorer les légendaires cascades de
        feuilles de Sty'hl.
      </p>
      <p>
        Ce lieu regorge de merveilles, mais prenez garde aux conflits de
        Sail'Hector !
      </p>
    </PageLayout>
  );
}
