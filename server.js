console.log("Web Serverni Boshlash");
const http = require("http");
const express = require("express");
const app = express();
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
  console.log(req.body);
  res.json({ test: "success" });
});
app.get("/", function (req, res) {
  res.render("harid");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`This server is running successfully on port: ${PORT}`);
});
