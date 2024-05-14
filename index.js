/*
Restaurant Website
Vincent Ton
May 6, 2024
*/

const express = require('express');
let app = express();

const ejs = require('ejs');
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("home");
})

app.listen(3000, () => {
    console.log("Express server initialized.");
})