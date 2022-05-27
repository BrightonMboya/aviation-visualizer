import React from "react";
import { GoogleMap, Marker, InfoWindow, useLoadScript } from "react-google-maps/api";

const libraries = ["places"]

export default function App() {
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
    libraries,
  });

  if (loadError) return "Error loading Maps";
  
  return (
    <div>
    </div>
  );
}
