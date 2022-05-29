import React from "react";
import {render} from 'react-dom'
import Map from './Map'
import './index.css'


const data = [
  {
    id: 1,
    name: "Park Slope",
    latitude: "40.6710729",
    longitude: "-73.9988001",
    radius: 3000
  },
  {
    id: 2,
    name: "Bushwick",
    latitude: "40.6942861",
    longitude: "-73.9389312",
    radius: 40000
  },
  {
    id: 3,
    name: "East New York",
    latitude: "40.6577799",
    longitude: "-73.9147716",
    radius: 20000
  }
];

render(
  <Map
   center={{ lat: 40.64, lng: -73.96}}
   zoom={12}
   places={data}
   googleMapURL="AIzaSyAlWnvLoFl72OeO3FpOkFBObwN5Vr6EkZA"
   loadingElement={<div style={{ height: `100%`}}/>}
   containerElement={<div style={{ height: `800px`}}/> }
   mapElement={<div style={{ height: `100%`}}/>}
   />,
 document.getElementById('root'));

