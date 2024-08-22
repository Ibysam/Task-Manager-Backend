const express = require("express"); // Import Express Framework

const {
  getAllTask,
  createTask,
  editTask,
  deleteTask,
  eachTask,
} = require("../controller/taskController");

const router = express.Router(); // Create a new router instance

router.get("/", getAllTask); // route to get all tasks, handled by getalltask function
router.post("/create", createTask); // route to create a new task handled by create task function
router.patch("/:id", editTask); // route to edit an existing task handled by create task function
router.delete("/:id", deleteTask); // route to delete an existing task handled by create task function
router.get("/:id", eachTask); // route to search an existing task handled by create task function
module.exports = router; // Export router to be use in thwe main server file app.js
