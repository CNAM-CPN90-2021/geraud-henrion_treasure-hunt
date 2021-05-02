import {
  IonContent,
  IonImg,
  IonItem,
  IonLabel,
  IonPage,
  IonThumbnail,
} from "@ionic/react";
import { Header } from "../components/Header";

export function Adventures() {
  return (
    <IonPage>
      <Header title="Accueil — Le périple du Oueb mobile" hidden />
      <IonContent fullscreen>
        <div className="container">
          <h1>Le périple du Oueb mobile</h1>
          <h2>Bienvenue compagnon, votre aventure commence ici.</h2>
          <p>Choisissez un épisode pour démarrer.</p>

          <AdventureCard
            id="1"
            thumbnail="https://source.unsplash.com/random/640x320"
            title="La cascade de feuilles de Sty'hl"
          />

          <AdventureCard
            id="2"
            thumbnail="https://source.unsplash.com/random/640x320"
            title="Le fremw-orc Rheakt"
            disabled
          />

          <AdventureCard
            id="3"
            thumbnail="https://source.unsplash.com/random/640x320"
            title="Le trésor des Ioniks"
            disabled
          />
        </div>
      </IonContent>
    </IonPage>
  );
}

function AdventureCard(props) {
  const { id, thumbnail, title, disabled } = props;
  return (
    <IonItem routerLink={`/adventure/${id}`} disabled={disabled}>
      <IonThumbnail slot="start">
        <IonImg src={thumbnail} />
      </IonThumbnail>
      <IonLabel>
        <h6>Épisode {id}</h6>
        {title}
      </IonLabel>
    </IonItem>
  );
}
