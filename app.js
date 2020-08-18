const express = require("express");

const app = express();

const PORT = 3002;

app.get("/", function(request, response) {
  return response.send("Welcome to my server.");
});

app.listen(PORT, function() {
  console.log(`App on port ${PORT}`);
});