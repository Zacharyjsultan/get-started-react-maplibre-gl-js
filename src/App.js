import * as React from "react";
import Map, { NavigationControl, Marker } from "react-map-gl";
import Navbar from "./components/navbar.js";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import "./App.css";

import Spots from "./components/spots.js";

function App() {
  const handleMarkerClick = () => {};
  return (
    <div className="App">
      <Navbar />
      <Map
        mapLib={maplibregl}
        initialViewState={{
          longitude: -90,
          latitude: 45,
          zoom: 3,
        }}
        style={{ display: "flex", width: "60%", height: " calc(100vh - 77px)" }}
        mapStyle="https://api.maptiler.com/maps/e60f573a-7a27-4da5-92cb-5d1fa8fada53/style.json?key=NT85MaDvNjhEnEvcJV87"
      >
        <NavigationControl position="top-left" />
        <Marker
          className="marker"
          longitude={-122.67}
          latitude={45.5152}
          onClick={handleMarkerClick}
        />
      </Map>
    </div>
  );
}

export default App;
