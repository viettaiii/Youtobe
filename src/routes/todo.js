const express = require("express");
const {
  getTasks,
  createTask,
  getTask,
  deleteTask,
  updateTask,
} = require("../controllers/todo");
const router = express.Router();

router.route("/").get(getTasks).post(createTask);
router.route("/:id").get(getTask).delete(deleteTask).patch(updateTask);
module.exports = router;
