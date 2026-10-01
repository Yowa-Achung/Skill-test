const Book = require("../schema/BookSchema");

const addBook = async (req, res) => {
  try {
    const book = new Book(req.body);
    const saved = await book.save();
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

const getBooks = async (req, res) => {
  try {
    const books = await Book.find()
    res.status(200).json(books);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
}

module.exports = {
  addBook,
  getBooks
}