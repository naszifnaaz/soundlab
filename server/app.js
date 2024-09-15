const connect = require("./configs/db");
const app = require("./index");

require("dotenv").config();
const PORT = process.env.PORT || 8080;

// Running Express Server
app.listen(PORT, async () => {
  try {
    await connect();
    console.log("Server running on port", PORT);
  } catch (error) {
    console.log("Something went wrong!");
    console.log(error);
  }
});
