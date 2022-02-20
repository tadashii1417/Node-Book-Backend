const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");

const authorRoute = require("./routes/author");

dotenv.config();
const connectionParams={
  useNewUrlParser: true,
  useUnifiedTopology: true
}
mongoose.connect(process.env.MONGODB_URL,connectionParams)
  .then( () => {
    console.log('Connected to database ')
  })
  .catch( (err) => {
    console.error(`Error connecting to the database. \n${err}`);
  })


app.use(bodyParser.json());
app.use(cors());
app.use(morgan("default"));
app.use( '/author', authorRoute);

app.listen(8000, () => {
  console.log("Server is running on port 8000 ...");
})