const express = require("express");
const app = express();
const chatRouter = require("./routes/chat");
const chatAbout = require("./routes/about");
const cors = require("cors");

require("dotenv").config();

app.use("/", chatRouter);
app.use("/", chatAbout);
app.use(cors());

app.listen(3003, () => {
  console.log("Server running on port 3000");
});
