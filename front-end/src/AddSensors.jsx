import React, { useState } from "react";
import "./index.css";

const AddSensors = () => {
  const [enteredLatitude, setEnteredLatitude] = useState(0);
  const [enteredLongitude, setEnteredLongitude] = useState(0);
  const [enteredRadius, setEnteredRadius] = useState(0);

  const latitudeChangeHandler = (event) => {
    setEnteredLatitude(event.target.value);
  };
  const longitudeChangeHandler = (event) => {
    setEnteredLongitude(event.target.value);
  };
  const radiusChangeHandler = (event) => {
    setEnteredRadius(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const sensor = {
      lat: enteredLatitude,
      lon: enteredLongitude,
      radius: enteredRadius,
    };
    console.log(sensor);

    await fetch("https://aviation-sensors.herokuapp.com/api/sensors", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(sensor),
    })
      .then((res) => res.json())
      .then(
        (data) => {
          console.log(data);
          alert("New Sensor Added");
        },
        (error) => console.log(error)
      );
    setEnteredLatitude(0);
    setEnteredLongitude(0);
    setEnteredRadius(0);
  };
  return (
    <div className="container mt-5 mb-5 col-lg-5">
      <h1 className="text-center mt-5 mb-3">Add a Sensor</h1>
      <div className="row justify-content-center my-5 ">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="latitude" className="text-left mb-3">
              Latitude
            </label>
            <input
              type="number"
              value={enteredLatitude}
              onChange={latitudeChangeHandler}
              className="form-control mb-3"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="longtude">Longitude</label>
            <input
              type="number"
              value={enteredLongitude}
              onChange={longitudeChangeHandler}
              className="form-control mb-3"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="Radius">Radius</label>
            <input
              type="number"
              value={enteredRadius}
              onChange={radiusChangeHandler}
              className="form-control mb-3"
              required
            />
          </div>

          <button
            onClick={handleSubmit}
            className="btn col-md-12 mt-3 bg-slate-200"
            style={{ backgroundColor: "#7858A6" }}
          >
            Add the Sensor{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSensors;
