import React, { useState, useCallback, useRef } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useLoadScript, Circle
} from "@react-google-maps/api";
import mapStyles from "./mapStyles";
import signal from "./assets/signal.png";
import { format, formatRelative } from "date-fns";
// import usePlacesAutocomplete, {
//   getGeoCode,
//   getLatLng,
// } from "use-places-autocomplete";

// import {
//   Combobox,
//   ComboboxInput,
//   ComboboxPopover,
//   ComboboxList,
//   ComboboxOption,
//   ComboboxOptionText,
// } from "@reach/combobox";
// import "@reach/combobox/styles.css";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};

const center = {
  lat: -1.948272,
  lng: 30.13224,
};

const options = {
  mapStyles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};
export default function App() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAlWnvLoFl72OeO3FpOkFBObwN5Vr6EkZA",
    libraries,
  });

  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);
  const onMapClick = useCallback((event) => {
    setMarkers((currentState) => [
      ...currentState,
      {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        time: new Date(),
      },
    ]);
  }, []);

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  if (loadError) return "Error loading Maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div>
      <h1>Aviation Visualizer</h1>

      {/* <Search /> */}
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.time.toISOString()}
            position={{
              lat: marker.lat,
              lng: marker.lng,
            }}
            icon={{
              url: signal,
              scaledSize: new window.google.maps.Size(30, 30),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
            }}
            onClick={() => {
              setSelected(marker);
            }}
          />
        
          
        ))}

        {markers.map((marker) => (
          <Circle
            defaultCenter={{
              lat: marker.lat,
              lng: marker.lng
            }}
            
            radius={markers.radius}
          />
        ))}

        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h2>
                The Transmitter was added on{" "}
                {formatRelative(selected.time, new Date())}
              </h2>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
}

// function Search() {
//   const {
//     ready,
//     value,
//     suggestions: { status, data },
//     setValue,
//     clearSuggestions,
//   } = usePlacesAutocomplete({
//     requestOptions: {
//       location: { lat: () => -1.948272, lng: () => 30.13224 },
//       radius: 200 * 10000,
//     },
//   });

//   return (
//     <div className="search">
//       <Combobox
//         onSelect={(adress) => {
//           console.log(adress);
//         }}
//       >
//         <ComboboxInput
//           value={value}
//           onChange={(event) => {
//             setValue(event.target.value);
//           }}
//           disabled={!ready}
//           placeholder={"Enter an Adress"}
//         />
//         <ComboboxPopover>
//           {status === "ok" && data.map((id, description) => <ComboboxOption key={id} value={description}/>)}
//         </ComboboxPopover>
//       </Combobox>
//     </div>
//   );
// }
