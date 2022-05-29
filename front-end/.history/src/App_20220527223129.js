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
  lat: -1.948272,
  lng: 30.132240,
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
          setMarkers(currentState => [...currentState, {
            lat: event.latLng.lat(),
            lng: event.latLng.lng(),
            time: new Date(),
          }])
        }}
      >
        {markers.map(marker => <Marker key={marker.time.toISOString()} position={{
          lat: marker.lat, lng: marker.lng
        }}/>)}
      </GoogleMap>
    </div>
  );
}
