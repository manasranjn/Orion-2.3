import express from "express";
import bookRoutes from "./bookRoutes.js";
import categoryRoutes from "./categoryRoutes.js";


const router = express.Router();

router.use("/books", bookRoutes);
router.use("/categories", categoryRoutes);


export default router;