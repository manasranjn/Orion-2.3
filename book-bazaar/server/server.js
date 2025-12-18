import express from 'express';
import connectDB from "./config/db.js";
import dotenv from 'dotenv/config.js';
import router from "./Routes/allRoutes.js"

const app = express();
const PORT = process.env.PORT || 5000;

connectDB()

app.use(express.json());
app.use('/api', router);



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});