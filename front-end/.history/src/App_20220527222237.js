import React, {useState} from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useLoadScript,
} from "@react-google-maps/api";
import mapStyles from "./mapStyles";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};

const center = {
  lat: -1.970579,
  lng: 30.104429,
};

const options = {
  mapStyles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
}
export default function App() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAlWnvLoFl72OeO3FpOkFBObwN5Vr6EkZA",
    libraries,
  });

  const [markers, setMarkers] = useState([])

  if (loadError) return "Error loading Maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div>
      <h1>Aviation Visualizer</h1>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
        onClick={(event) => {
          console.log(event)
        }}
      ></GoogleMap>
    </div>
  );
}
