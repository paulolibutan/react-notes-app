const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");

// Imports
const userRoutes = require("./routes/user");
const noteRoutes = require("./routes/note");

// Initialize app
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
mongoose.connect(process.env.MONGODB_URL);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB database!");
});

// Routes
app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);

// Start the server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
