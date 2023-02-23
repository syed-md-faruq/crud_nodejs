const express = require("express");
const peopleModel = require("../models/people");
const app = express();
const people_controller = require("../controllers/peoplecontroller");

app.get("/people",people_controller.people_get);

app.post("/people",people_controller.people_post);
app.put("/people/:id",people_controller.people_put);

app.delete("/people/:id",people_controller.people_delete);
module.exports = app;
