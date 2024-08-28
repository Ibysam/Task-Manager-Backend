//A controller in  backend is like manager that handles the logic for specific part of your application. it decides what should happen when a request comes in and coordinate between the request, your data and response

// const { request } = require("express");
const validateID = require("../utils/validateID");
const Task = require("../models/task");

// ===========FUNCTION TO GET ALL TASK====================
const getAllTask = async (req, res) => {
  const tasks = await Task.find({}); // retrieve all tasks from the database
  res.status(200).json({ tasks }); // Send the retrieve tasks in a JSON response
};
// ============FUNCTION FOR CREATING A NEW TASK==============
const createTask = async (req, res) => {
  const { title, description, tag } = req.body; // Destructure the required fields from the request body
  if (!title) {
    return res.status(400).json({ message: "Please provide a title" });
  }
  if (!description) {
    return res.status(400).json({ message: "Please provide a description" });
  }
  if (!tag) {
    return res.status(400).json({ message: "Please provide a tag" });
  }

  const task = await Task.create(req.body); // create a new task with the request data
  res.status(201).json({ message: "Task created successfully", task }); // Send a status code with a message of success
};

//====================Fuction for editing an existing task=============================
const editTask = async (req, res) => {
  const { id } = req.params; // get the task id from the request parameters

  if (!validateID(id)) {
    return res.status(400).json({ message: `ID: ${id} is not valid` });
  }

  const task = await Task.findOneAndUpdate({ _id: id }, { ...req.body }); // update the task with the provided data
  res.status(200).json({ message: "Task updated successfully" }); // send a status code with a message of successfully updated
};

//=====================Function to delete an existin task========
const deleteTask = async (req, res) => {
  const { id } = req.params; //get the task id from the request parameters
  if (!validateID(id)) {
    return res.status(400).json({ message: `ID: ${id} is not valid` });
  }
  const task = await Task.findByIdAndDelete({ _id: id }); // delete the task with the special id
  res.status(200).json({ message: "Task Successfully Deleted" }); // send success message if deleted successfully
};

// ====================Function to get each task==================
const eachTask = async (res, req) => {
  const { id } = req.params; // get the task id from the request parameters
  if (!validateID(id)) {
    return res.status(400).json({ message: `ID: ${id} is not valid` });
  }
  const task = await Task.findOne({ _id: id }); // Find the task with the special id
  res.status(200).json({ task }); // send the found task with a successful message
};

module.exports = { getAllTask, createTask, editTask, deleteTask, eachTask }; //Export the controller function to be use in the router
