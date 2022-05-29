import React from "react";
import { GoogleMap, Marker, InfoWindow, useLoadScript } from "react-google-maps/api";




export default function App() {
  const {} = useLoadScript({
    googleMapsApiKey: process.env.REACT
  })
  return (
    <div>
    </div>
  );
}
