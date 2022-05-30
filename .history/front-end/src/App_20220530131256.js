import React, { useState, useEffect } from "react";
import "./index.css";
import AddSensors from "./AddSensors";
import DisplaySensors from "./DisplaySensors";
import api from "./api";

const App = () => {
  const [data, setData] = useState([]);

  // const fetchData = async (event) => {
  //   await fetch("https://aviation-sensors.herokuapp.com/api/sensors", {
  //     method: "GET",
  //     // headers: {
  //     //   "Content-type": "application/json",
  //     // },
  //     // body: JSON.stringify(sensors),
  //   })
  //     .then((res) => res.json())
  //     .then(
  //       (data) => {
  //         setSensors(data.data)
  //         console.log(data);
  //       },
  //       (error) => console.log(error)
  //     );
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/sensors");
        setData(res.data?.data);
      } catch (error) {}
    };
    fetchData();
  }, []);

  return (
    <div>
      <AddSensors />
      {sensors && <DisplaySensors sensors={data} />}
      {!sensors && <p>No Sensors found...</p>}
    </div>
  );
};

export default App;
