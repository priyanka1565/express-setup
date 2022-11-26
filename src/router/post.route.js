const express = require("express")
const db = require("../db.json");
const fs = require("fs");

const app = express.Router();

app.get("/", (req, res) => {
  res.send("hiii welcome 1");
});

//filtering the data

app.get("/posts", (req, res) => {
  let { name } = req.query;
  let posts = db.posts;
  if (name) {
    posts = posts.filter((post) => post.name === name);
  }
  res.send(posts);
});
//findding the id

app.get("/posts/:id", (req, res) => {
  let id = req.params.id;
  let numId = Number(id);
  let post = db.posts.find((post) => post.id === numId);
  res.send(post);
});

app.get("/posts", (req, res) => {
  db.posts.push({ id: 3, messege: "add me on 3rd" });
  fs.writeFile("./db.json", JSON.stringify(db), "utf-8", () => {
    res.send(db.posts);
  });

  res.send(db.posts);
});

//post
app.get("/posts", (req, res) => {
  db.posts.push({
    ...req.body,
    id: Date.now(),
  });
  fs.writeFile("./db.json", JSON.stringify(data), "utf-8", () => {
    res.send(db.posts);
  });
});
module.exports = app