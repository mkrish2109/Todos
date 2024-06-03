const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const app = express();
const tasksRouter = require("./routes/tasks");
const userRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const dashBordRouter = require("./routes/dashBord");
const connect = require("./db/connect");

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded());

app.use("/auth", authRouter);
app.use("/tasks", tasksRouter);
app.use("/users", userRouter);
app.use("/dashbord", dashBordRouter);

app.get("*", (req, res) => {
  res.send("Path doen't exist!");
});

async function start() {
  try {
    await connect();
    console.log("Database connected successfully!");
    app.listen(5000, () => {
      console.log("Server is listening on port 5000!");
    });
  } catch (error) {
    console.log("error", error);
    console.log("Failed to connect to the database!");
  }
}

start();
