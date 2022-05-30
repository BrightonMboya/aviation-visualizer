import React, { useState } from "react";
import './index.css'

const AddSensors = () => {
  const [enteredLatitude, setEnteredLatitude] = useState(0);
  const [enteredLongitude, setEnteredLongitude] = useState(0);
  const [enteredRadius, setEnteredRadius] = useState(0);

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
    setEnteredLatitude(0);
    setEnteredLongitude(0);
    setEnteredRadius(0);
  };
  return <div style={{marginLeft: '50vh', alignItems: 'center'}}>
    <h1 className="text-blue-400 text-sm">Add a Sensor</h1>
    <div>
      <form onSubmit={handleSubmit} >
        <div style={{marginTop: "3vh"}}>
          <label htmlFor="latitude">Latitude</label>
          <input type="number" 
          value={enteredLatitude}
          onChange={latitudeChangeHandler}
          style={{marginLeft: '5vh'}}
          required
          />
        </div>
        <div style={{marginTop: "3vh"}}>
          <label htmlFor="longtude">Longitude</label>
          <input type="number" 
          value={enteredLongitude}
          onChange={longitudeChangeHandler}
          style={{marginLeft: '5vh'}}
          required
          />
        </div>
        <div style={{marginTop: "3vh"}}>
          <label htmlFor="Radius">Radius</label>
          <input type="number" 
          value={enteredRadius}
          onChange={radiusChangeHandler}
          style={{marginLeft: '5vh'}}
          required
          />
        </div>

        <button onClick={handleSubmit} style={{marginTop: "2vh", marginBottom: "3vh"}}>Add the Sensor </button>
      </form>
    </div>

  </div>;
};

export default AddSensors;
