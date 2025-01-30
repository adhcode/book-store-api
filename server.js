require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const connectToDB = require("./database/db");
const bookRoute = require("./route/book-route");

//connect to database
connectToDB();

//middleware
app.use(express.json());

//routes
app.use("/api/books", bookRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
