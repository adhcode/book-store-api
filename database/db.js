const mongoose = require("mongoose");
const dns = require("dns");
const connectToDB = async () => {
  try {
    dns.setServers(["8.8.8.8", "8.8.4.4"]);
    await mongoose.connect(
      "mongodb+srv://adekunledh:GoodGod11@cluster0.pz0qq.mongodb.net/"
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

module.exports = connectToDB;
