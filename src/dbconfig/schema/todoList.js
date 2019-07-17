var mongoose = require("mongoose");

var todoList = new mongoose.Schema({
  task: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    default: false
  }
});

module.exports = todoList;
