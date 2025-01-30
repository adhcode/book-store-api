const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true,
    maxlength: [100, "Title cannot be more than 100 characters"],
  },
  author: {
    type: String,
    required: [true, "Author is required"],
    trim: true,
  },
  year: {
    type: Number,
    required: [true, "Year is required"],
    min: [1900, "Year cannot be less than 1900"],
    max: [
      new Date().getFullYear(),
      "Year cannot be more than the current year",
    ],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
