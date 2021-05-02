import { Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import "./theme/index.css";
import { AdventureStart } from "./pages/AdventureStart";
import { Adventures } from "./pages/Adventures";
import { Error404 } from "./pages/Error404";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet animated>
        <Route exact path="/" component={Adventures} />
        <Route path="/adventure/:id" component={AdventureStart} />

        <Route component={Error404} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
