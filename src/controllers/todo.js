const getTasks = async (req, res) => {
  res.send("Get tasks");
};
const getTask = async (req, res) => {
  res.send("Get task");
};
const createTask = async (req, res) => {
  res.send("Create task");
};
const deleteTask = async (req, res) => {
  res.send("delete task");
};
const updateTask = async (req, res) => {
  res.send("update task");
};
module.exports = {
  getTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
};
