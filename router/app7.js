const express = require("express");
const userRouter = require("./routes/users");
const orderRouter = require("./routes/orders");

const app = express();

app.use("/orders", orderRouter);
app.use("/users", userRouter);

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
