var express = require("express");
var mongoose = require("mongoose");
var router = express.Router();

router.get("/", async function(req, res) {
  let todoList = mongoose
    .model("todoList")
    .find({ status: false }, "_id task")
    .exec();
  let complete = mongoose
    .model("todoList")
    .find({ status: true }, "_id task")
    .exec();
  [todoList, complete] = await Promise.all([todoList, complete]);
  return res.render("index", { todoList: todoList, complete: complete });
});

router.post("/addtask", function(req, res) {
  let insert = {
    task: req.body.newtask
  };
  mongoose.model("todoList").create(insert, (err, result) => {
    if (err) console.error(error);
    console.log(result);
    return res.redirect("/");
  });
});

router.post("/complete", function(req, res) {
  var completedTask = req.body.completedTask;
  if (typeof completedTask == "undefined") {
    return res.status(204).send();
  }
  if (completedTask.isArray == false) {
    completedTask = [completedTask];
  }
  var query = {
    _id: {
      $in: completedTask
    }
  };
  mongoose
    .model("todoList")
    .updateMany(query, { $set: { status: true } }, (err, result) => {
      if (err) console.log("Loi");
      return res.redirect("/");
    });
});

module.exports = router;
