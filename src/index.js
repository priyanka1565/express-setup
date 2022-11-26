const express = require("express");
const postRout = require("./router/post.route");

const db = require("../db.json");
const fs = require("fs");
const app = express();

const postRoute = require("../src/router/post.route");
const productRoute = require("../src/router/product.route");

//get

app.use(express.json());
app.use("/posts", postRoute);
app.use("/products",productRoute)

app.get("/", (req, res) => {
  res.send("hiii welcome 1");
});

//filtering the data

app.listen(8080, async () => {
  console.log("app is running on http://localhost:8080");
});
