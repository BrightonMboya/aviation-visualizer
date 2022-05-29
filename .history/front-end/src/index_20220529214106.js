import React from "react";
import {render} from 'react-dom'
import Map from './DataFetching'
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
    name: "Kibagabaga",
    latitude: "-1.933670",
    longitude: "30.132240",
    radius: 4000
  },
  {
    id: 3,
    name: "Nyarutarama",
    latitude: "-1.860127",
    longitude: "30.1097436",
    radius: 2000
  }
];

render(
  <Map
   center={{ lat:  -1.948272, lng: 30.13224}}
   zoom={12}
   places={data}
   googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAlWnvLoFl72OeO3FpOkFBObwN5Vr6EkZA"
   loadingElement={<div style={{ height: `100%`}}/>}
   containerElement={<div style={{ height: `900px`}}/> }
   mapElement={<div style={{ height: `100%`}}/>}
   />,
 document.getElementById('root'));

