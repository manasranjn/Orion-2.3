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
    },
    { timestamps: true }
);

//Compile
const Course = mongoose.model("Course", courseSchema);

//Course Schema
const studentSchema = new mongoose.Schema(
    {
        name: String,
    },
    { timestamps: true }
);
const Student = mongoose.model("Student", studentSchema);

//Enrollment Schema
const enrollmentSchema = new mongoose.Schema(
    {
        student: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
        course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
        enrolledAt: { type: Date, default: Date.now() },
        status: { type: String, enum: ["active", "completed", "dropped"], default: "active" },
    },
    { timestamps: true }
);
//Compile
const Enrollment = mongoose.model("Enrollment", enrollmentSchema);

//Create courses
// Course.create({
//     title: "Complete React.js Guide",
// })
//     .then((course) => console.log(course))
//     .catch((e) => console.log(e));

//Create student
// Student.create({
//     name: "Jordan",
// })
//     .then((student) => console.log(student))
//     .catch((e) => console.log(e));


// Enroll the student in the course (with extra info)
// Enrollment.create({
//     student: "694140dc626d9912368bbf20",
//     course: "6941408cad3a6f93aadc78e8"
// }).then((enrollment) => console.log(enrollment));

//!Get all enrollments for a student (with full course info)
// Enrollment.find({ student: "694140bd2ce7a3b1180d7ce7" })
//     .populate("course", "title")
//     .populate("student", "name")
//     .then((enrollment) => console.log(enrollment))
//     .catch((e) => console.log(e));


Enrollment.find({ course: "6941406f833aba0accc2ecf1" })
    .populate("course", "title")
    .populate("student", "name")
    .then((enrollment) => console.log(enrollment))
    .catch((e) => console.log(e));


app.listen(5000, () => {
    console.log("Server is running");
})