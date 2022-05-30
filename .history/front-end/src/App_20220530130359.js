import React, {useState, useEffect} from "react";
import "./index.css";
import AddSensors from "./AddSensors";
import DisplaySensors from "./DisplaySensors";

const App = () => {
  const [sensors, setSensors] = useState([]);

  const fetchData = async (event) => {
    await fetch("https://aviation-sensors.herokuapp.com/api/sensors", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(sensor),
    })
      .then((res) => res.json())
      .then(
        (data) => {
          setSensors(data.data)
          console.log(data);
        },
        (error) => console.log(error)
      );
  };

  useEffect(fetchData(), [sensors])
 
  return (
    <div>
      <AddSensors />
      <DisplaySensors sensors={sensors} />
    </div>
  );
};

export default App;
