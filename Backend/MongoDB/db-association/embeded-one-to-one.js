import express from "express"
import "dotenv/config"
import mongoose from "mongoose"

const app = express()

mongoose.connect(process.env.MONGO_URI)
    .then((res) => {
        console.log("DB Connected");
    }).catch((err) => {
        console.log(err.message);
    })

const userDetailsSchema = new mongoose.Schema({
    designation: String,
    address: String
})

const userSchema = new mongoose.Schema(
    {
        name: String,
        age: Number,
        details: userDetailsSchema
    },
    {
        timestamps: true
    }
)

const User = mongoose.model('User', userSchema)

User.create({
    name: "Satybrata",
    age: 24,
    details: {
        designation: "SDE",
        address: "BBSR"
    }
}).then((user) => {
    console.log(user);
})
    .catch((err) => {
        console.log(err.message);

    })


app.listen(5000, () => {
    console.log("Server is running");
})