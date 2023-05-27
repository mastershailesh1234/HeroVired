const express = require("express");
const app = express();

const mongoose = require("mongoose");

app.get("/test", (req, res) => {
  res.json({
    message: "get request working!",
  });
});

mongoose.connect("/").then(() => {
  console.log("connectd to bd");
});

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: string,
    required: true,
  },
  password: {
    type: string,
    required: true,
  },
});
const usermodel = mongoose.model("userdb", userSchema);
app.post("/register", (req, res) => {
  const { username, email, password } = req.body;
  console.log(username, password);
  res.json({
    message: "data recieved",
  });
});
app.listen(5000, () => {
  console.log("server is running");
});
