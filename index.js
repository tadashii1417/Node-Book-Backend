const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");

const authorRoute = require("./routes/author");

dotenv.config();
// Connect Database
mongoose.connect(process.env.MONGODB_URL, () => {
  console.log("Connected to mongooseDB");
})

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("normal"));
app.use( '/author', authorRoute);

app.listen(8000, () => {
  console.log("Server is running on port 8000 ...");
})