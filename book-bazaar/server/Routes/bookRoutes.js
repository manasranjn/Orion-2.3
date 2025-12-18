import express from "express";
import { getBooks, getBookById, createBook, updateBook, deleteBook } from "../controllers/bookController.js";

const router = express.Router();

router.get("/getBooks", getBooks);
router.get("/getBookById/:id", getBookById);
router.post("/addBook", createBook);
router.put("/updateBook/:id", updateBook);
router.delete("/deleteBook/:id", deleteBook);

export default router;