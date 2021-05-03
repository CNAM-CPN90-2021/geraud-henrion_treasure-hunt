import { Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import { AdventureStart } from "./pages/AdventureStart";
import { Adventures } from "./pages/Adventures";
import { Error404 } from "./pages/Error404";
import { Bag } from "./pages/Bag";
import { BagStateProvider } from "./bagContext";

import "./theme/index.css";
import { Travel } from "./pages/Travel";

export function App() {
  return (
    <BagStateProvider>
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet animated>
            <Route exact path="/" component={Adventures} />
            <Route path="/adventure/:id/bag" component={Bag} />
            <Route path="/adventure/:id/travel" component={Travel} />
            <Route exact path="/adventure/:id" component={AdventureStart} />

            <Route component={Error404} />
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </BagStateProvider>
  );
}
