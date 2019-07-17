var mongoose = require("mongoose");
var mongoDB = "mongodb://127.0.0.1/todoList";
mongoose.connect(mongoDB, { useNewUrlParser: true });
