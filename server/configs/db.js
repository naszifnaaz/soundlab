const mongoose = require("mongoose");
require("dotenv").config();

// Connecting to SoundLab MongoDB cluster
const connect = () => {
  return mongoose.connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@soundlab-db.0hryuwh.mongodb.net/SoundLab`
  );
};

module.exports = connect;
