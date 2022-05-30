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
    <div className="mt-5 container mb-5 col-lg-12">
      <h1 className="text-center mt-7">Sensors Available</h1>
      {sensors.map((sensor) => (
        <div key={sensor._id}>
          <div className="container mt-2 pt-4 col-lg-10 d-flex flex-row justify-content-between align-items-center">
            <p>Latitude: {sensor.lat}</p>
            <p>Longitude: {sensor.lon}</p>
            <p>Radius: {sensor.radius}</p>
          <div>
            <img
              src="https://cdn.onlinewebfonts.com/svg/img_96165.png"
              onClick={(e) => handleDelete(sensor._id)}
              alt="Delete"
              style={{ width: '20px', height: 'auto', cursor: 'pointer'}}
            />
          </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplaySensors;
