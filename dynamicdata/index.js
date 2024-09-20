const express = require("express");
const server = express();
const path = require("path");
const hbs = require("hbs");



const htmlpath = path.join(__dirname, "../dynamicdata/mydata");
const pathforhbs = path.join(__dirname, "../dynamicdata/views/views");
const pathdata = path.join(__dirname, "../dynamicdata/views/partials");

hbs.registerPartials(pathdata);
server.set("view engine", "hbs");
server.set("views", pathforhbs);


server.get("", (req, res) => {
    res.render("index");
});
server.get("/about", (req, res) => {
    res.render("about");
});
server.get("/service", (req, res) => {
    res.render("service");
});
server.get("/contacts", (req, res) => {
    res.render("contacts");
});
server.get("*", (req, res) => {
    res.render("errorpage");
});

server.listen(3000, () => {
    console.log("connected to the server...");
});