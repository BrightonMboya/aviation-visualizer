import { GoogleApiWrapper } from "google-maps-react";
import React from "react";
import {render} from 'react-dom'
import Map from './Map'


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



const App = () => {
  return (
    <div>App</div>
  )
}

export default GoogleApiWrapper({
  apiKey: ""
})