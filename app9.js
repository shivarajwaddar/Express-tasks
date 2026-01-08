const express = require("express");
const studentRouter = require("./Routes-3/students");
const courseRouter = require("./Routes-3/courses");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the Student & Course Portal API");
});

app.use("/students", studentRouter);
app.use("/courses", courseRouter);

app.use((req, res) => {
  res.send("Page not found");
});
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
