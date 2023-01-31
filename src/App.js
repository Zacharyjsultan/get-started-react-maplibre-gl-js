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
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d68094.84545363527!2d-122.70763475872691!3d45.53181473696461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1675193332403!5m2!1sen!2sus"
        width="600"
        height="450"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default App;
