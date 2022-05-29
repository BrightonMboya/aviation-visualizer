var express = require("express");
var app = express();
const PORT = 5000

const conn = 

mongodb+srv://tony:<password>@todo.f7ruh.mongodb.net/?retryWrites=true&w=majority


app.get("/", (req, res) => {
  res.send("This is my demo project");
});
app.listen(PORT, function () {
  console.log(`Demo project at: ${PORT}!`);
});
