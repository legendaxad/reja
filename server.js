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
app.get("/hello", function (req, res) {
  res.end(`<h1>Hello World</h1>`);
});
app.get("/gift", function (req, res) {
  res.end(`<h1>So'vga bolimi</h1>`);
});
const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`This server is running successfully on port: ${PORT}`);
});
