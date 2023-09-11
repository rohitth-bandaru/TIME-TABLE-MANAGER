const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/time-table-manager-database")
  .then(() => console.log("Connected!"))
  .catch((err) => console.log(err));

const slots = require("./slots");
const express = require("express");
const app = express();
const http = require("http");
const port = 3000;
const host = "localhost";
const router = express.Router();

app.use(express.json());
app.use("/api", slots);


const server = http.createServer(app);
server.listen(port, host);
