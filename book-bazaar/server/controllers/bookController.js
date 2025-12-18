import book from "../Models/book.js";

export const getBooks = async (req, res) => {
    try {
        const books = await book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: "No books found" });
    }
};

export const getBookById = async (req, res) => {
    const { id } = req.params;
    try {
        const bookById = await book.findById(id);
        if (!bookById) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json(bookById);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createBook = async (req, res) => {
    const newBook = new book(req.body);
    try {
        await newBook.save();
        res.status(201).json(newBook);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateBook = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedBook = await book.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedBook) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json(updatedBook);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteBook = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedBook = await book.findByIdAndDelete(id);
        if (!deletedBook) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json({ message: "Book deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};