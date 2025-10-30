const express = require("express");

//Initialize express
const app = express();

//Basic Route
app.get("/", (req, res) => {
    res.send("Hello from Express");
});

//About Route
app.get("/about", (req, res) => {
    res.send("About us page");
});

//GET - Get data
//POST - Send data
//PUT/PATCH - update data
//DELETE - delete

//Contact Route
app.get("/contact", function (req, res) {
    res.send("Contact us page");
});

//Signup route
app.post("/register", (req, res) => {
    res.send("Registerd");
});

app.get("/register", (req, res) => {
    res.send("Register route");
});

//Start the server
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
