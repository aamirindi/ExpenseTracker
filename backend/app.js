const express = require("express");
const cors = require("cors");
const { db } = require("./db/db");
const { readdirSync } = require("fs");
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000/");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

require("dotenv").config();

const PORT = process.env.PORT;

// middlewares
app.use(express.json());
app.use(cors());

// routes
readdirSync("./routes").map((route) =>
  app.use("/api/v1", require("./routes/" + route))
);

app.get("/", (req, res) => {
  res.send("Hello World");
});

const server = () => {
  db();
  app.listen(PORT, () => {
    console.log("listening to port : ", PORT);
  });
};

server();
