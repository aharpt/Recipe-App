var express = require("express");
var path = require("path");
var app = express();

app.get("/", function(request, response) {
  response.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(3000, function() {
  console.log("Listening on port 3000");
});
