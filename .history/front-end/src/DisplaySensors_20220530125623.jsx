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
        <div key={sensor._id}>
          <div>
            <p>Latitude: {sensor.lat}</p>
            <p>Longitude: {sensor.lon}</p>
            <p>Radius: {sensor.radius}</p>
          </div>
          <div>
            <img
              src="https://cdn.onlinewebfonts.com/svg/img_96165.png"
              onClick={(e) => handleDelete(sensor._id)}
              alt="Delete"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplaySensors;
