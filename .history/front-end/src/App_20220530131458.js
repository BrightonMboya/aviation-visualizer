import React, { useState, useEffect } from "react";
import "./index.css";
import AddSensors from "./AddSensors";
import DisplaySensors from "./DisplaySensors";
import api from "./api";

const App = () => {
  const [data, setData] = useState([]);

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
      {data && <DisplaySensors sensors={data} />}
      {!data && <p>No Sensors found...</p>}
    </div>
  );
};

export default App;
