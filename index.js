const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "/dist")));

let port = 5000;
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
