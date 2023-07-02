const express = require("express");
const app = express();
const port = 3000;

app.get("/", async function (req, res) {
    res.send("Reached home!");
});