const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const router = require('./routes/allRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("DB Connected");
    })
    .catch((err) => {
        console.log(err.message);
    });


app.use(express.json());
app.use('/api', router);




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});