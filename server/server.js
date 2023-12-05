const express = require('express');

const dotenv = require("dotenv").config();

const {dbconnect} = require('./config/dbConfig');
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use("/names", require("./router/namesRouter"));
dbconnect();

app.listen(port,()=>{
  console.log(`The Server is Connected to port number : ${port}`)
});



