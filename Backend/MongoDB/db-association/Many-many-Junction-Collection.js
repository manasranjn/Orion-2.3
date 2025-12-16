import express from "express";
import mongoose from "mongoose";
//!Express instance
const app = express();
const PORT = 5000;
const MONGO_URI =
  "mongodb+srv://malekurt53:iTWRAnG0rZByXAcg@database-associations.3fwkvf3.mongodb.net/DB-Associations?retryWrites=true&w=majority&appName=database-associations";

//Connect to Mongodb
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB Connected successfully"))
  .catch((e) => console.log(e));

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
    grade: String,
    status: { type: String, enum: ["active", "completed", "dropped"] },
  },
  { timestamps: true }
);
//Compile
const Enrollment = mongoose.model("Enrollment", enrollmentSchema);

//Create some courses
// Course.create({
//   title: "MongoDB Mastery",
// })
//   .then((course) => console.log(course))
//   .catch((e) => console.log(e));

//Create student and enroll (courses)
// Student.create({
//   name: "Alex",
// })
//   .then((student) => console.log(student))
//   .catch((e) => console.log(e));

// Enroll the student in the course (with extra info)

// Enrollment.create({
//   student: "684dbe33cce97e4b03846934",
//   course: "684dbde45dfc0927471f2653",
//   grade: "A",
//   status: "active",
// }).then((enrollment) => console.log(enrollment));

//!Get all enrollments for a student (with full course info)
// Enrollment.find({ student: "684dbe33cce97e4b03846934" })
//   .populate("course", "title")
//   .populate("student", "name")
//   .then((enrollment) => console.log(enrollment))
//   .catch((e) => console.log(e));

Enrollment.find({ course: "684dbde45dfc0927471f2653" })
  .populate("course", "title")
  .populate("student", "name")
  .then((enrollment) => console.log(enrollment))
  .catch((e) => console.log(e));
//!Start the servers
app.listen(PORT, console.log("Server is up and running..."));
