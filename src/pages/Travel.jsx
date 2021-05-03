import { PageLayout } from "../components/PageLayout";
import { useState } from "react";
import ReactMapGL, { GeolocateControl, Marker } from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import "./Travel.css";
import { MAPBOX_ACCESS_TOKEN } from "../config";
import cascade from "./cascade.svg";


const mapStyleUrl =
  "https://api.mapbox.com/styles/v1/mapbox/cjtep62gq54l21frr1whf27ak";

export function Travel() {
  const [viewport, setViewport] = useState({
    latitude: 47.7386289,
    longitude: 7.3293385,
    zoom: 12,
  });

  const destination = {
    latitude: 47.7386289,
    longitude: 7.3293385,
  };

  return (
    <PageLayout title="En route">
      <div className="map-container">
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
          mapStyle={`${mapStyleUrl}?access_token=${MAPBOX_ACCESS_TOKEN}`}
          width="100%"
          height="100%"
          onViewportChange={(viewport) => setViewport(viewport)}
        >
          <Marker {...destination} offsetLeft={-56 / 2} offsetTop={-56 / 2}>
            <div className="marker-icon">
              <img src={cascade} alt="destination : cascade" />
            </div>
          </Marker>
        </ReactMapGL>
      </div>

      <div className="container bottom-sheet">
        <h2>Vous avez déniché une vieille carte.</h2>
        <p>
          Sur cette dernière se trouvent de nombreuses accolades, des `* + *`,
          les lettres C, S et S et d'autres caractères bien étranges.
        </p>

        <p>
          Mais en y regardant de plus prêt il semble s'y cacher ce qui ressemble
          à des coordonnées GPS.
        </p>

        <p>Vous décidez de vous y rendre.</p>

        <p>
          <small>
            Rendez-vous à l'emplacement indiqué sur la carte pour activer la
            suite de l'aventure
          </small>
        </p>
      </div>
    </PageLayout>
  );
}
