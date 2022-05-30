import React, { useState } from "react";

const AddSensors = () => {
  const [enteredLatitude, setEnteredLatitude] = useState();
  const [enteredLongitude, setEnteredLongitude] = useState();
  const [enteredRadius, setEnteredRadius] = useState();

  const latitudeChangeHandler = (event) => {
    setEnteredLatitude(event.target.value)
  }
  const longitudeChangeHandler = (event) => {
    setEnteredLongitude(event.target.value)
  }
  const radiusChangeHandler = (event) => {
    setEnteredRadius(event.target.value)
  }

  

  const handleSubmit = async (event) => {
    event.preventDefault();

    const sensor = { enteredLatitude, enteredLongitude, enteredRadius };
    console.log(sensor);

    await fetch("https://aviation-sensors.herokuapp.com/api", {
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
    setEnteredLatitude();
    setEnteredLongitude();
    setEnteredRadius();
  };
  return <div>
    <h1 className="text-blue-400 text-sm">Add a Sensor</h1>
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="latitude">Latitude</label>
          <input type="number" 
          value={enteredLatitude}
          onChange={latitudeChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="longtude">Longitude</label>
          <input type="number" 
          value={enteredLongitude}
          onChange={longitudeChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="Radius">Radius</label>
          <input type="number" 
          value={enteredRadius}
          onChange={radiusChangeHandler}
          />
        </div>

        <button onClick={handleSubmit}>Add the Sensor </button>
      </form>
    </div>

  </div>;
};

export default AddSensors;
