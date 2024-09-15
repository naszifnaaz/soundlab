const mongoose = require("mongoose");
require("dotenv").config();

let isConnected = false; // Global variable to track the connection state

const connect = async () => {
  if (isConnected) {
    console.log("Using existing database connection");
    return;
  }

  try {
    const db = await mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@soundlab-db.0hryuwh.mongodb.net/SoundLab`
    );
    isConnected = db.connections[0].readyState;
    console.log("Connected to the database");
  } catch (error) {
    console.log("Failed to connect to the database");
    console.error(error);
    throw error; // Throw the error so you can handle it in the calling function
  }
};

module.exports = connect;
