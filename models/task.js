//In backend developement a model is like a blueprint for the data in your application. it defines the structure of your data and how it interacts with the database
const mongoose = require("mongoose");

const schema = mongoose.Schema; // this is a shortcut to access Mongoose schema class

//Define the schema for task base on the ui
const taskSchema = new schema({
  title: String, // Tittle of the task
  description: String, // Description of the task
  tag: String, // tag associated with the task "urgent or important"
});

module.exports = mongoose.model("task", taskSchema); // Exportin thje model to be use for the request opperations in the controller
