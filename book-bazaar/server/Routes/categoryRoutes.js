import express from "express";
import { createCategory, getCategories, getCategoryById, updateCategory, deleteCategory } from "../controllers/categoryController.js";

const router = express.Router();

router.post('/createCategory', createCategory);
router.get('/getCategories', getCategories);
router.get('/getCategory/:id', getCategoryById);
router.put('/updateCategory/:id', updateCategory);
router.delete('/deleteCategory/:id', deleteCategory);

export default router;