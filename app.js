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
const mongodb = require("mongodb")

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
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    console.log(data.ops[0]);
    res.json(data.ops[0]);
  });
});
app.post("/delete-item", (req, res) => {
  const id = req.body.id
  db.collection("plans").deleteOne({ _id: new mongodb.ObjectId(id) }, (err, data) => {
    res.json({ state: "success" })
  })
});
// app.post("/update-item", (req, res) => {
//   const id = req.body.id
//   db.collection("plans").updateOne({ _id: new mongodb.ObjectId(id) }, { $set: { reja: req.body.reja } }, (err, data) => {
//     res.json({ state: "success" })
//   })
// })
app.get("/author", (req, res) => {
  res.render("author", { user: user });
});
app.get("/", function (req, res) {
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
