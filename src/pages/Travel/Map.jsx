import { useEffect, useMemo, useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import "./Map.css";
import { MAPBOX_ACCESS_TOKEN } from "../../config";
import cascade from "./cascade.svg";
import { useRealPosition, useSimulatedPosition } from "./usePosition";
import distance from "@turf/distance";
import { point } from "@turf/helpers";

const mapStyleUrl =
  "https://api.mapbox.com/styles/v1/mapbox/cjtep62gq54l21frr1whf27ak";

export function Map() {
  const [viewport, setViewport] = useState({
    latitude: 47.7386289,
    longitude: 7.3293385,
    zoom: 15,
  });

  const destination = {
    latitude: 47.7386289,
    longitude: 7.3293385,
  }

  const currentPosition = useSimulatedPosition();
  // const currentPosition = useRealPosition();

  const distanceToDestination = currentPosition
    ? distance(
        point([destination.latitude, destination.longitude]),
        point([currentPosition.latitude, currentPosition.longitude]),
        { units: "meters" }
      )
    : Infinity;
  const isCloseEnough = distanceToDestination < 100;

  useEffect(() => {
    if(isCloseEnough) {
      alert('Good game')
    }
  }, [isCloseEnough])

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
      mapStyle={`${mapStyleUrl}?access_token=${MAPBOX_ACCESS_TOKEN}`}
      width="100%"
      height="100%"
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      {currentPosition && (
        <PositionMarker
          latitude={currentPosition.latitude}
          longitude={currentPosition.longitude}
        />
      )}
      <DestinationMarker {...destination} />
    </ReactMapGL>
  );
}

function DestinationMarker(props) {
  const { latitude, longitude } = props;
  const size = 56;

  return (
    <Marker
      latitude={latitude}
      longitude={longitude}
      offsetLeft={-size / 2}
      offsetTop={-size / 2}
    >
      <div className="marker-icon">
        <img src={cascade} alt="destination : cascade" />
      </div>
    </Marker>
  );
}

function PositionMarker(props) {
  const { latitude, longitude } = props;
  const size = 20;

  return (
    <Marker
      latitude={latitude}
      longitude={longitude}
      offsetLeft={-size / 2}
      offsetTop={-size / 2}
    >
      <div className="position-marker"></div>
    </Marker>
  );
}
