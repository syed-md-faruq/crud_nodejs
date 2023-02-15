const express = require("express");
const mongoose = require("mongoose");
const peopleRouter = require("./routes/peopleRoutes.js");
const app = express()
app.use(express.json());
const mongoDB = "mongodb://localhost:27017/people";
mongoose.connect(mongoDB);
app.use(peopleRouter);
app.listen(3000, () => {
  console.log("Server is running...");
});


