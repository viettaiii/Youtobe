require("express-async-handler");
const express = require("express");
const app = express();
const port = 8080;

const routerTodo = require("./routes/todo");

app.use("/todos", routerTodo);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
