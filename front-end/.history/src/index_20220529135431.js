import React from "react";
import {render} from 'react-dom'
import Map from './Map'
import './index.css'


const data = [
  {
    id: 1,
    name: "Kisimenti",
    latitude: "-1.960127",
    longitude: "30.109743",
    radius: 3000
  },
  {
    id: 2,
    name: "Kibagabag",
    latitude: "-1.933670",
    longitude: "-73.9389312",
    radius: 4000
  },
  {
    id: 3,
    name: "East New York",
    latitude: "40.6577799",
    longitude: "-73.9147716",
    radius: 2000
  }
];

render(
  <Map
   center={{ lat: 40.64, lng: -73.96}}
   zoom={12}
   places={data}
   googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAlWnvLoFl72OeO3FpOkFBObwN5Vr6EkZA"
   loadingElement={<div style={{ height: `100%`}}/>}
   containerElement={<div style={{ height: `900px`}}/> }
   mapElement={<div style={{ height: `100%`}}/>}
   />,
 document.getElementById('root'));

