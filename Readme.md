## Aviation Sensors App

link to deployed Front-end https://aviation-sensors.herokuapp.com/api/

Link to Video WalkThrough: https://www.loom.com/share/facd231c97b8425188bd9d4d5108682f

## API Endpoints

Listing all the available sensors [GET method] https://aviation-sensors.herokuapp.com/api/sensors

Adding a new Sensor [POST method] https://aviation-sensors.herokuapp.com/api/sensors
it accepts {
    lon: 'number',
    lat: 'number',
    radius: 'number
}

deleting a sensor [DELETE method] https://aviation-sensors.herokuapp.com/api/sensorsId

## Running the repo locally:

1. clone the repo
2. cd backend and do npm i
3. Start the backend server by running node index.js

On the front end Side:
1. cd front-end
2. npm install
3. npm start