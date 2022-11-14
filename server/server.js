//import express from "express"
const express = require("express");
// console.log(express)
const cors = require('cors');
//invoke express
const app = express();
// console.log(app)
const PORT = 8000;
//name used in database for project
const DB = "pets"


//-- MIDDLEWARE---
// make sure these lines are above any app.get or app.post code blocks
app.use(cors(), express.json(), express.urlencoded({ extended: true })); // This is new





// Connect to database using mongoose
require("./config/mongoose.config")(DB);


// // //modularize routes
require("./routes/pets.routes")(app);


// ! starts the server
//always at the bottom of our app

app.listen(PORT, () => console.log(`>> SERVER is up on port ${PORT} and is listening for Requests to Respond to `))
