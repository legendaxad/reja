const http = require("http");
const mongodb = require("mongodb");
let db;
const connectionString =
  "mongodb+srv://kylemitcoder_db_user:bUh8OoU78FVOjUIV@cluster0.1pq5ryg.mongodb.net/?appName=Cluster0";

mongodb.connect(
  connectionString,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    if (err) {
      console.log("MongoDBga ulanishda xatolik yuz berdi:", err);
    } else {
      db = client.db();
      console.log("MongoDBga muvaffaqiyatli ulandi");
      module.exports = client;
      const app = require("./app");

      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `This server is running successfully on port: ${PORT} , http://localhost:${PORT}`,
        );
      });
    }
  },
);
