import React from "react";
import "./index.css";
import AddSensors from "./AddSensors";
import DisplaySensors from "./DisplaySensors";

const App = () => {
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
          console.log(data);
        },
        (error) => console.log(error)
      );
  };
  return (
    <div>
      <AddSensors />
      <DisplaySensors />
    </div>
  );
};

export default App;
