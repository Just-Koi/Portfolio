"use strict";

var bodyParser = require('body-parser');

var path = require("path");

var express = require('express');

var app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express["static"]("assets"));
app.get("/", function (req, res) {
  res.render("index", {
    title: "Portfolio"
  });
}); // server

var hostname = '127.0.0.1';
var port = 3000;
app.listen(port, function () {
  console.log('Aapplication is running on port https://' + hostname + ':' + port);
});