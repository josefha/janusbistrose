let express = require("express");
let app = express();

// set port
var port = process.env.PORT || 8080;

app.use(express.static(__dirname + "/dist"));

app.get("/", function(req, res) {
  res.render("index");
});

app.listen(port, function() {
  console.log("app running");
});
