const express = require("express")
const app = express()
const mongoose = require('mongoose');

const DB_URI = ""
mongoose.connect(DB_URI)
    .then((res) => {
        console.log("DB Connected");
    }).catch((err) => {
        console.log(err.message);
    })

const taskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        completed: {
            type: String,
            default: false
        }
    },
    {
        timestamps: true
    }
)

const Task = mongoose.model('Task', taskSchema) //tasks

// Task.create({ title: "Create a Project", completed: true })
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err.message);
//     })

//Fetch all tasks
// Task.find({ completed: true })
//     .then((tasks) => {
//         console.log(tasks);
//     })
//     .catch((e) => console.log(e));

//Find a task by ID
// Task.findById("693aacccb546c161001e248d")
//     .then((task) => {
//         console.log(task);
//     })
//     .catch((e) => console.log(e));

//Update a task by ID
// Task.findByIdAndUpdate(
//     "693aacccb546c161001e248d",
//     {
//         title: "Coding  ",
//     },
//     { new: true }
// ).then((updatedTask) => {
//     console.log(updatedTask);
// })
//     .catch((e) => console.log(e));

//Delete task
// Task.findByIdAndDelete("693aacccb546c161001e248d")
//     .then(() => {
//         console.log("Task deleted");
//     })
//     .catch((e) => console.log(e));




//!Common Schema types  with validations
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            minLength: [2, "Name must be at least 2 characters long"],
            maxLength: [50, "Name cannot exceed 50 characters"],
        },
        age: {
            type: Number,
            required: [true, "Age is required"],
            min: [0, "Age cannot be negative"],
            max: [120, "Age seems too high!"],
        },
        isActive: {
            type: Boolean,
            default: true,
        },
        hobbies: {
            type: [String],
            validate: {
                validator: (arr) => arr.length <= 5,
                message: "A user can have up to 5 hobbies only",
            },
        },
        location: {
            city: {
                type: String,
                required: [true, "City is required"],
            },
            country: {
                type: String,
                required: [true, "Country is required"],
            },
        },
        scores: [Number],
        metadata: {
            type: mongoose.Schema.Types.Mixed,
        },
        email: {
            type: String,
            required: [true, "Email is required"],
        },
        role: {
            type: String,
            enum: {
                values: ["user", "admin"],
                message: 'Role must be either "user" or "admin"',
            },
            default: "user",
        },
    },
    { timestamps: true }
);

//Compile to form model
const User = mongoose.model("User", userSchema); //users


User.create({
    name: "Ankit",
    age: 22,
    hobbies: ['Playing Cricket', 'Politics', 'Depression'],
    location: {
        city: "Banka",
        country: "India"
    },
    scores: 8.5,
    metadata: true,
    email: "ankit@gmail.com",
}).then((user) => {
    console.log(user);
}).catch((err) => {
    console.log(err.message);
})


app.listen(3000, () => {
    console.log("Server is runnig");
})