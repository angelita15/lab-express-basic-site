const express = require("express");

const hbs = require("hbs");
const path = require("path");


const app = express();


app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
hbs.registerPartials(path.join(__dirname, "views/partials"));



app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/works", (req, res) => {
  res.render("works");
});

app.get("/photogallery", (req, res) => {
  res.render("photogallery");
});


app.listen(5000, () => console.log(" on port 5000"));
