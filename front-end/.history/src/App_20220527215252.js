import React from "react";
import { GoogleMap, Marker, InfoWindow, useLoadScript } from "react-google-maps/api";

const libr

export default function App() {
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
    libraries: ["places"]
  })
  return (
    <div>
    </div>
  );
}
