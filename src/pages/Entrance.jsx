import { IonButton } from "@ionic/react";
import { PageLayout } from "../components/PageLayout";

export function Entrance() {
  return (
    <PageLayout
      title="L'entrée de la vallée"
      footer={
        <IonButton expand="full" routerLink="/" routerDirection="root">
          Retour à l'accueil
        </IonButton>
      }
    >
      <h1>Le cuillère-code</h1>
      <p>
        Après un long périple, vous vous retrouvez devant une porte majestueuse
      </p>

      <p>
        Vous pouvez y lire l'inscription suivante :
        <br />
        <br />
        <code>
          Au valeureux voyageur qui trouvera le cuillère-code, la porte
          s'ouvrira. // TODO
        </code>
      </p>
    </PageLayout>
  );
}
