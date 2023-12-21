//commonJS
const express = require("express");
//moduleJS
//import express from "express";
const data = require("./data.json");

// Importing dotenv
require("dotenv").config();

const app = express();

//Total ports around 65535
const port = process.env.PORT || 4000;
//response for home route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//response for user route
app.get("/user", (req, res) => {
  res.send("User Info");
});

//response for user login
app.get("/login", (req, res) => {
  res.send("<h1>User Login Page</h1>");
});

//response from youtube
app.get("/youtube", (req, res) => {
  res.send("<h2>Accessing Youtube Tutorials</h2>");
});

// json response for project
app.get("/project", (req, res) => {
  res.json(data);
});

//listening to the given port
app.listen(port, () => {
  console.log(`Server is running on the port ${port}`);
});
