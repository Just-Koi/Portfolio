const bodyParser = require('body-parser');
const path = require("path");
const express = require('express');

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("assets"));

app.get("/", (req, res) => {
    res.render("index", { title: "Portfolio" });
});
  

// server
const hostname = '127.0.0.1';
const port = 3000;
app.listen(port, () => {
    console.log('Aapplication is running on port https://' + hostname + ':' + port);
});