require("dotenv").config(); // Load environment variables from a .env file into process.env

const express = require("express"); // Import Express framework

const mongoose = require("mongoose"); // Import mongoose for mongoDB interactions
const cors = require("cors");

const app = express(); // Spining up the express framework server

const port = 3000; // Define the port number for the server

// CORS (Cross-Origin-Resource sharing):used when the frontend and backend are from different origins (domains, ports or protocols) and the backend hasent been configured to accept request from the front end origin

app.use(cors());

const taskRouter = require("./routes/taskRouter"); // Import the task router for task related routes
const notFound = require("./middlewares/notFound"); //

app.use(express.json()); // middleware to parse incoming json requests from postman allowing acess to the req.body

app.use("/api/task", taskRouter); // Mount the taskRouter at /api/task, all task-related route start with /api/task
app.use(notFound); // use the custom 404 middleware for handling

const start = async () => {
  try {
    //attempt to connect to mongoDB using Monoose
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database Connected");
    // Start the server and listen on the specified port
    app.listen(port, () => {
      console.log(`server is running on PORT ${port}`);
    });
  } catch (error) {
    //log the error if the database connection fails
    console.log(error);
    console.log("Unable to connect");
  }
};
start();

//Mongoose is an ODM (Object Data modelling) library for MongoDB and node.js.

//MongoDB is a NoSQL database that stores data in flexible, JSON like format.

//ibikunlesamod
//f0pXzx2VZxqTWfvA
//mongodb+srv://ibikunlesamod:f0pXzx2VZxqTWfvA@cluster0.o6dwt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
