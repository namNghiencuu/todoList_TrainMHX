var mongoose = require("mongoose");

module.exports = {
  todoList: mongoose.model("todoList", require("./schema/todoList"))
};
