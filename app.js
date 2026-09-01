console.log("Web Serverni Boshlash");
const express = require("express");
const app = express();
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf-8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});

//MONGODB connect
const db = require("./server").db();

// 1 Kirish Kodlari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// 2 Sessionga Code
// 3 VIEWS code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 ROUTE CODE
app.post("/create-item", function (req, res) {
  console.log("user entered /create-item");
  const newreja = req.body.reja;
  db.collection("plans").insertOne({ reja: newreja }, (err, data) => {
    if (err) {
      console.log("ERROR:", err);
      res.end("something went wrong");
    } else {
      res.end("successfully added");
    }
  });
});
app.get("/author", (req, res) => {
  res.render("author", { user: user });
});
app.get("/", function (req, res) {
  console.log("user entered /");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        res.status(500).send("Database error");
      } else {
        res.render("reja", { items: data });
      }
    });
});

module.exports = app;
