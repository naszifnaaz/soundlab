const connect = require("./configs/db");
const app = require("./index");

require("dotenv").config();

const startServer = async () => {
  try {
    await connect(); // Ensure the database connection is established
    console.log("Database connected");
  } catch (error) {
    console.log("Something went wrong!");
    console.error(error);
  }
};

startServer();

module.exports = app; // Export the app for Vercel's serverless function to handle
