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

//Course Schema
const courseSchema = new mongoose.Schema(
    {
        title: String,
        students: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }],
    },
    { timestamps: true }
);

//Compile
const Course = mongoose.model("Course", courseSchema);

//Student Schema
const studentSchema = new mongoose.Schema(
    {
        name: String,
        courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
    },
    { timestamps: true }
);

//Compile
const Student = mongoose.model("Student", studentSchema);

//Create some courses
// Course.create({
//     title: "Frontend Development using ReactJS",
// })
//     .then((course) => console.log(course))
//     .catch((e) => console.log(e));

//   .catch((e) => console.log(e));

//Create student and enroll (courses)
// Student.create({
//     name: "Jane Doe",
//     courses: ["693ff2fd35083148a90b7d70", "693ff311b151b9678d18bba5", "693ff29ab17711d12457b886"],
// })
//     .then((studentWithCourses) => console.log(studentWithCourses))
//     .catch((e) => console.log(e));


//!Get student and their enrolled courses
// Student.findById("693ff3984a5a43cc012eaf19")
//     .populate("courses", "title") //Only show title
//     .then((course) => console.log(course))
//     .catch((e) => console.log(e));


// Update courses to reference the student
Course.updateMany(
    { _id: { $in: ["693ff29ab17711d12457b886", "693ff2fd35083148a90b7d70"] } },
    { $push: { students: "693ff353687597886dd79a39" } })
    .then((course) => console.log(course))
    .catch((e) => console.log(e));

//!Get courses and their enrolled students
Course.findById("693ff29ab17711d12457b886")
    .populate("students", "name")
    .then((course) => console.log(course))
    .catch((e) => console.log(e));

app.listen(5000, () => {
    console.log("Server is running");
})