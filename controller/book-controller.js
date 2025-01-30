const Book = require("../models/books");

const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find({});
    if (allBooks.length > 0) {
      return res.status(200).json({
        success: true,
        message: "List of books",
        data: allBooks,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "No books found",
      });
    }
  } catch (error) {
    console.error("Error fetching books:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
};

const getBookById = async (req, res) => {
  try {
    const getCurrentBook = await Book.findById(req.params.id);
    if (!getCurrentBook) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Book fetched successfully",
      data: getCurrentBook,
    });
  } catch (error) {
    console.error("Error fetching book:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
};

const createBook = async (req, res) => {
  try {
    const newBookFormData = req.body;

    if (!newBookFormData) {
      return res.status(400).json({
        success: false,
        message: "Book data is required",
      });
    }

    const newBook = await Book.create(newBookFormData);

    return res.status(201).json({
      success: true,
      message: "Book created successfully",
      data: newBook,
    });
  } catch (error) {
    console.error("Error creating book:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
};

const updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Book updated successfully",
      data: book,
    });
  } catch (error) {
    console.error("Error updating book:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
};

const deleteBook = async (req, res) => {
  try {
    const deleteBook = await Book.findByIdAndDelete(req.params.id);
    if (!deleteBook) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Book deleted successfully",
      data: deleteBook,
    });
  } catch (error) {
    console.error("Error deleting book:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
