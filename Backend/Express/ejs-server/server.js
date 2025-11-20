const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;

//set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.get("/", (req, res) => {
    res.render("index", {
        title: "Home Page",
    });
});

app.get("/about", (req, res) => {
    res.render("about", {
        title: "About Page",
    });
});

app.get("/variables", (req, res) => {
    res.render("variables", {
        title: "EJS Variables",
        user: {
            name: "ABCD",
            age: 25,
            email: "abcd@gmail.com",
            isActive: true,
        },
    });
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

app.get("/conditionals", (req, res) => {
    res.render("conditionals.ejs", {
        title: "EJS Conditionals",
        user: {
            isLoggedIn: true,
            isAdmin: false,
            hasItems: true,
        },
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});