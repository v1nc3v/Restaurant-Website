/*
Restaurant Website
Vincent Ton
May 6, 2024
*/

const express = require('express');
let app = express();
const path = require('path');

const ejs = require('ejs');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("home");
})

app.listen(3000, () => {
    console.log("Express server initialized.");
})