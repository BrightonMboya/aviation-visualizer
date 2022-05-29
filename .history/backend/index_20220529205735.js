var express = require("express");
var app = express();
const PORT = 5000
const mongoose = require('mongoose')
const url = 'mongodb+srv://tony:<password>@todo.f7ruh.mongodb.net/?retryWrites=true&w=majority'


const conn = await mongoose.createConnection('mongodb+srv://tony:<tony>@todo.f7ruh.mongodb.net/?retryWrites=true&w=majority').
  asPromise();
conn.readyState;



app.get("/", (req, res) => {
  res.send("This is my demo project");
});
app.listen(PORT, function () {
  console.log(`Demo project at: ${PORT}!`);
});
