const express = require("express");
const peopleModel = require("../models/people");
const app = express();

app.get("/peoples", async (request, response) => {

  try {
    const peoples = await peopleModel.find();
    response.send(peoples);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/people", async (request, response) => {

  try {
    const people = new peopleModel(request.body);
    await people.save();
    response.send(people);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.patch("/people/:id", async (request, response) => {
  try {
    const people=await peopleModel.findByIdAndUpdate(request.params.id, request.body);
    await people.save();
    response.send(people);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.delete("/people/:id", async (request, response) => {
  try {
    const people = await peopleModel.findByIdAndDelete(request.params.id);

    if (!people) response.status(404).send("No item found");
    response.status(200).send("Deleted");
  } catch (error) {
    response.status(500).send(error);
  }
});
module.exports = app;
