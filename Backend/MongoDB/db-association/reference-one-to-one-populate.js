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

const userDetailsSchema = new mongoose.Schema(
    {
        designation: String,
        address: String
    },
    {
        timestamps: true
    })

const UserDetails = mongoose.model("UserDetails", userDetailsSchema)

// UserDetails.create({
//     designation: "DevOps Eng",
//     address: "India"
// }).then((details) => {
//     console.log(details);
// })
//     .catch((err) => {
//         console.log(err.message);
//     })

const userSchema = new mongoose.Schema(
    {
        name: String,
        age: Number,
        details: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "UserDetails",
        }
    },
    {
        timestamps: true
    }
)

const User = mongoose.model('User', userSchema)

// User.create({
//     name: "Smruti",
//     age: 25,
//     details: "693c0bd2907b316e77ed7362"
// }).then((user) => {
//     console.log(user);
// })
//     .catch((err) => {
//         console.log(err.message);

//     })


// User.find().populate("details")
//     .then((users) => {
//         console.log(users);
//     }).catch((err) => {
//         console.log(err.message);
//     })

// User.find().populate({ path: "details", select: "designation" })
//     .then((users) => {
//         console.log(users);
//     }).catch((err) => {
//         console.log(err.message);
//     })

User.find().populate({ path: "details", select: "-designation" })
    .then((users) => {
        console.log(users);
    }).catch((err) => {
        console.log(err.message);
    })

app.listen(5000, () => {
    console.log("Server is running");
})