var express = require("express");
var app = express();
const PORT = 5000
const mongoose = require('mongoose')
const url = 'mongodb+srv://tony:@todo.f7ruh.mongodb.net/?retryWrites=true&w=majority'
const Sensor = require('./model')


mongoose.connect(url).then().catch()



app.get("/", (req, res) => {
  res.send("This is my demo project");
});

app.get("/sensor", (req, res) => {
  const sensors = Sensor.find()
  res.status(200).json({
    success:true;
    data:sensors
  })
})
app.listen(PORT, function () {
  console.log(`Demo project at: ${PORT}!`);
});
