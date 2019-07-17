var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");

require("./src/dbconfig/connectDB");
require("./src/dbconfig/model");

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", require("./src/routes/todoList"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src", "views"));
app.use(
  express.static(path.join(__dirname, "src", "public"), { maxAge: "30 days" })
);
app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
