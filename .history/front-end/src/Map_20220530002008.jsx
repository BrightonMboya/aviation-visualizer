import React, { Fragment, useEffect } from "react";
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

    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const res = await api.get("/sensors")
                setData(res.data?.)
            } catch (error) {
                
            }
        }
    })
  return (
    <GoogleMap defaultZoom={props.zoom} defaultCenter={props.center}>
      {props.places.map((place) => {
        return (
          <Fragment key={place.id}>
            <Marker
              position={{
                lat: parseFloat(place.latitude),
                lng: parseFloat(place.longitude),
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
                lat: parseFloat(place.latitude),
                lng: parseFloat(place.longitude),
              }}
              radius={place.radius}
              options={options}
            />
          </Fragment>
        );
      })}
    </GoogleMap>
  );
};

export default withScriptjs(withGoogleMap(Map));
