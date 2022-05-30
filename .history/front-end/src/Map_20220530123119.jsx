import React, { Fragment, useEffect, useState } from "react";
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  Marker,
  Circle,
} from "react-google-maps";
import api from "./api";
import signal from './assets/signal.png'

const Map = (props) => {
    const options = {
        strokeColor: "#ff0000"
    }
    const [data, setData] = useState()

    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const res = await api.get("/sensors")
                setData(res.data?.data)
            } catch (error) {
                
            }
        }
        fetchData()
    }, [])
  return (
  
      <>
      
      {!data ? (<div>Loading data ... </div>): (
           <GoogleMap defaultZoom={props.zoom} defaultCenter={props.center}>
           {data.map((place) => {
             return (
               <Fragment key={place._id}>
                 <Marker
                   position={{
                     lat: parseFloat(place.lat),
                     lng: parseFloat(place.lon),
                   }}
     
                   icon={{
                     url: signal,
                     scaledSize: new window.google.maps.Size(30, 30),
                     origin: new window.google.maps.Point(0, 0),
                     anchor: new window.google.maps.Point(15, 15),
                   }}
                 />
     
                 <Circle
                   defaultCenter={{
                     lat: parseFloat(place.lat),
                     lng: parseFloat(place.lon),
                   }}
                   radius={place.radius}
                   options={options}
                 />
               </Fragment>
             );
           })}
         </GoogleMap>
      )}
      </>
   
  );
};

export default withScriptjs(withGoogleMap(Map));
