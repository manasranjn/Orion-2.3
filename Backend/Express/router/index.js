const express = require('express');
const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');

const app = express();


app.use('/user', userRouter)
app.use('/products', productRouter)
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});