const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const peopleSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  gender: { type: String, required: true, maxLength: 10 },
  date_of_birth: { type: String },
  job_role: { type: String, required: true, maxLength: 100 },
});
module.exports = mongoose.model("People", peopleSchema);
