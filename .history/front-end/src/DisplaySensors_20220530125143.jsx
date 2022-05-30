import React from "react";

const DisplaySensors = ({ sensors }) => {
  const handleDelete = async (id) => {
    await fetch(`https://aviation-sensors.herokuapp.com/api/sensors/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(
        (data) => {
          console.log(data);
          alert("Sensor Deleted");
        },
        (error) => console.log(error)
      );
  };

  return (
    <div>
      <h1>Sensors Available</h1>
      {sensors.map((sensor) => (
          <div></div>
      ))}
    </div>
  );
};

export default DisplaySensors;
