var express = require("express");
const cors = require("cors")
const path = require("path")
var app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const url =
  "mongodb+srv://tony:tonybm321@todo.f7ruh.mongodb.net/?retryWrites=true&w=majority";
app.use(cors())
app.use(express.json());
app.use(express.static(path.join(__dirname, "dist")))

mongoose
  .connect(url)
  .then((connection) => {
    console.log("connected to database");
  })
  .catch();
const sensorSchema = mongoose.Schema({
  lat: {
    type: Number,
    required: true,
  },

  lon: {
    type: Number,
    required: true,
  },

  radius: {
    type: Number,
    required: true,
  },
});

const Sensor = mongoose.model("sensor", sensorSchema);



app.get("/api/sensors", async (req, res) => {
  try {
    const sensors = await Sensor.find();
    res.status(200).json({
      success: true,
      data: sensors,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      error: e.message,
    });
  }
});

app.post("/api/sensors", async (req, res) => {
  try {
    console.log(req.body);
    const sensor = new Sensor(req.body);
    await sensor.save();
    res.status(201).json({
      success: true,
      data: sensor,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      error: e.message,
    });
  }
});

app.delete("/api/sensors/:id", async (req, res) => {
  try {
    await Sensor.findByIdAndDelete(req.params.id);
    res.status(201).json({
      success: true,
      data: {},
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      error: e.message,
    });
  }
});

app.get("/api/sensors/:id", async (req, res) => {
  try {
    const sensor = await Sensor.findById(req.params.id);
    res.status(201).json({
      success: true,
      data: sensor,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      error: e.message,
    });
  }
});

app.all("*", (req, res)=>{
  return res.sendFile(path.join(__dirname, "dist/index.html"))
})

app.listen(PORT, function () {
  console.log(`Demo project at: ${PORT}!`);
});
