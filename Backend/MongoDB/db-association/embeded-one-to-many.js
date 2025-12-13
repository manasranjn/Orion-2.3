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

// Embedded post schema (inline, no separate collection)
const postSchema = new mongoose.Schema(
    {
        title: String,
        content: String,
    },
    { _id: false }
);

//User
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    posts: [postSchema], //Embedded directly
});

const Account = mongoose.model("Account", userSchema);
//?Create user with it's posts
// Account.create({
//     name: "Smith",
//     email: "smith@gmail.com",
//     posts: [
//         { title: "HTML Intro", content: "Mastering HTML" },
//         { title: "Intro to css", content: "CSS for Frontend..." },
//     ],
// })
//     .then((userWithPosts) => console.log(userWithPosts))
//     .catch((e) => console.log(e));

//?Find user and it's posts
Account.findOne({ name: "Smith" })
    .then((userWithPosts) => console.log(userWithPosts))
    .catch((e) => console.log(e));


app.listen(5000, () => {
    console.log("Server is running");
})