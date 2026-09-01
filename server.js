require("dotenv").config(); // Load environment variables at the top
const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString = process.env.MONGO_URL;

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
      let PORT = process.env.PORT || 3000;

      server.listen(PORT, function () {
        console.log(
          `This server is running successfully on port: ${PORT} , http://localhost:${PORT}`,
        );
      });
    }
  },
);
