import express from 'express';
import connectDB from "./config/db.js";
import dotenv from 'dotenv/config.js';
import router from "./Routes/allRoutes.js"
import cors from 'cors';
import authRoutes from './Routes/authRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

connectDB()

app.use(cors());
app.use(express.json());
app.use('/api', router);
app.use("/api/auth", authRoutes);



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});