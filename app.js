const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const authRoutes = require("./routes/auth");

const port = process.env.PORT || 5000;

app.use(express.urlencoded()); // x-www-form-urlencoded <form>
app.use(express.text());
app.use(cors());
app.use(express.json()); // application/json

app.use((req, res, next) => {
  console.log("req", req);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
app.use("/", authRoutes);
// common middle ware handle aur thrown errors

app.use((error, req, res, next) => {
  console.log("error is ", error);
  return res.json({ message: error.message, error: error });
});
mongoose
  .connect(
    "mongodb://chitesh:pass123@cluster0-shard-00-00.ulx1q.mongodb.net:27017,cluster0-shard-00-01.ulx1q.mongodb.net:27017,cluster0-shard-00-02.ulx1q.mongodb.net:27017/Etark?replicaSet=atlas-demxn2-shard-0&ssl=true&authSource=admin",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((result) => {
    const server = app.listen(port); // this basically return us the server
  })
  .catch((error) => {
    console.log(error);
  });
